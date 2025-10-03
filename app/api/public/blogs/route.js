import { NextResponse } from 'next/server';
import dbConnect from '../../../../lib/dbConnect';
import Post from '../../../../models/Post';

// CORS headers for cross-origin requests
const corsHeaders = {
  'Access-Control-Allow-Origin': '*', // In production, specify your dashboard domain
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Max-Age': '86400',
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function GET(request) {
  try {
    await dbConnect();
    
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 10;
    const status = searchParams.get('status') || 'published';
    const search = searchParams.get('search') || '';
    const category = searchParams.get('category') || '';
    const sortBy = searchParams.get('sortBy') || 'createdAt';
    const sortOrder = searchParams.get('sortOrder') || 'desc';

    // Build query object
    const query = { status };

    // Add search functionality
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { content: { $regex: search, $options: 'i' } },
        { metaDescription: { $regex: search, $options: 'i' } }
      ];
    }

    // Add category filter if needed (assuming you have categories)
    if (category) {
      query.keywords = { $in: [category] };
    }

    // Calculate pagination
    const skip = (page - 1) * limit;

    // Build sort object
    const sort = {};
    sort[sortBy] = sortOrder === 'desc' ? -1 : 1;

    // Execute query with pagination
    // First, try with populate, if it fails, try without
    let posts;
    let totalPosts;
    
    try {
      // Try to populate category if the field exists
      [posts, totalPosts] = await Promise.all([
        Post.find(query)
          .select('title slug content metaTitle metaDescription keywords featuredImage category createdAt updatedAt')
          .populate('category', 'name slug icon color')
          .sort(sort)
          .skip(skip)
          .limit(limit)
          .lean(),
        Post.countDocuments(query)
      ]);
    } catch (populateError) {
      // If populate fails, query without it
      console.log('Category populate failed, querying without populate:', populateError.message);
      [posts, totalPosts] = await Promise.all([
        Post.find(query)
          .select('title slug content metaTitle metaDescription keywords featuredImage createdAt updatedAt')
          .sort(sort)
          .skip(skip)
          .limit(limit)
          .lean(),
        Post.countDocuments(query)
      ]);
    }

    // Calculate pagination metadata
    const totalPages = Math.ceil(totalPosts / limit);
    const hasNextPage = page < totalPages;
    const hasPrevPage = page > 1;

    const response = {
      success: true,
      data: {
        posts: posts.map(post => {
          const basePost = {
            id: post._id,
            title: post.title,
            slug: post.slug,
            content: post.content,
            excerpt: post.content ? post.content.substring(0, 200).replace(/<[^>]*>/g, '') + '...' : '',
            metaTitle: post.metaTitle,
            metaDescription: post.metaDescription,
            keywords: post.keywords || [],
            featuredImage: post.featuredImage,
            publishedAt: post.createdAt,
            updatedAt: post.updatedAt,
            readingTime: calculateReadingTime(post.content)
          };

          // Add category if it exists
          if (post.category) {
            basePost.category = {
              id: post.category._id || post.category,
              name: post.category.name || null,
              slug: post.category.slug || null,
              icon: post.category.icon || null,
              color: post.category.color || null
            };
          }

          return basePost;
        })
      },
      pagination: {
        currentPage: page,
        totalPages,
        totalPosts,
        limit,
        hasNextPage,
        hasPrevPage,
        nextPage: hasNextPage ? page + 1 : null,
        prevPage: hasPrevPage ? page - 1 : null
      },
      meta: {
        timestamp: new Date().toISOString(),
        count: posts.length
      }
    };

    return NextResponse.json(response, { headers: corsHeaders });

  } catch (error) {
    console.error('Error fetching blog posts:', error);
    console.error('Error stack:', error.stack);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch blog posts',
        message: error.message,
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { 
        status: 500,
        headers: corsHeaders
      }
    );
  }
}

// Helper function to calculate reading time
function calculateReadingTime(content) {
  if (!content) return 0;
  const wordsPerMinute = 200;
  const words = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}
