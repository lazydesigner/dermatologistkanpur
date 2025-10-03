import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Post from '@/models/Post';

// CORS headers for cross-origin requests
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
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
    const query = searchParams.get('q') || '';
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 10;

    if (!query.trim()) {
      return NextResponse.json(
        {
          success: false,
          error: 'Search query is required',
          message: 'Please provide a search query'
        },
        { 
          status: 400,
          headers: corsHeaders
        }
      );
    }

    // Build search query
    const searchQuery = {
      status: 'published',
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { content: { $regex: query, $options: 'i' } },
        { metaDescription: { $regex: query, $options: 'i' } },
        { keywords: { $in: [new RegExp(query, 'i')] } }
      ]
    };

    // Calculate pagination
    const skip = (page - 1) * limit;

    // Execute search
    const [posts, totalPosts] = await Promise.all([
      Post.find(searchQuery)
        .select('title slug content metaTitle metaDescription keywords featuredImage createdAt')
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      Post.countDocuments(searchQuery)
    ]);

    // Calculate pagination metadata
    const totalPages = Math.ceil(totalPosts / limit);

    const response = {
      success: true,
      data: {
        query,
        posts: posts.map(post => ({
          id: post._id,
          title: post.title,
          slug: post.slug,
          excerpt: post.content ? post.content.substring(0, 200).replace(/<[^>]*>/g, '') + '...' : '',
          metaTitle: post.metaTitle,
          metaDescription: post.metaDescription,
          keywords: post.keywords || [],
          featuredImage: post.featuredImage,
          publishedAt: post.createdAt,
          readingTime: calculateReadingTime(post.content)
        }))
      },
      pagination: {
        currentPage: page,
        totalPages,
        totalPosts,
        limit,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1
      },
      meta: {
        timestamp: new Date().toISOString(),
        count: posts.length
      }
    };

    return NextResponse.json(response, { headers: corsHeaders });

  } catch (error) {
    console.error('Error searching blog posts:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Search failed',
        message: error.message
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