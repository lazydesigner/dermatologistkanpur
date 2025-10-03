import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Post from '@/models/Post';

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
 
export async function GET(request, { params }) {
  try {
    await dbConnect();
    const { slug } = params;
    
    // Find the post by slug and ensure it's published
    const post = await Post.findOne({ 
      slug, 
      status: 'published' 
    }).lean();
    
    if (!post) {
      return NextResponse.json(
        {
          success: false,
          error: 'Blog post not found',
          message: 'The requested blog post does not exist or is not published'
        },
        { 
          status: 404,
          headers: corsHeaders
        }
      );
    }

    // Get related posts (same keywords, exclude current post)
    const relatedPosts = await Post.find({
      _id: { $ne: post._id },
      status: 'published',
      keywords: { $in: post.keywords || [] }
    })
    .select('title slug metaDescription featuredImage createdAt')
    .limit(3)
    .sort({ createdAt: -1 })
    .lean();

    const response = {
      success: true,
      data: {
        id: post._id,
        title: post.title,
        slug: post.slug,
        content: post.content,
        metaTitle: post.metaTitle,
        metaDescription: post.metaDescription,
        canonical: post.canonical,
        keywords: post.keywords || [],
        featuredImage: post.featuredImage,
        publishedAt: post.createdAt,
        updatedAt: post.updatedAt,
        readingTime: calculateReadingTime(post.content),
        wordCount: post.content ? post.content.replace(/<[^>]*>/g, '').split(/\s+/).length : 0
      },
      related: relatedPosts.map(relatedPost => ({
        id: relatedPost._id,
        title: relatedPost.title,
        slug: relatedPost.slug,
        metaDescription: relatedPost.metaDescription,
        featuredImage: relatedPost.featuredImage,
        publishedAt: relatedPost.createdAt
      })),
      meta: {
        timestamp: new Date().toISOString()
      }
    };

    return NextResponse.json(response, { headers: corsHeaders });

  } catch (error) {
    console.error('Error fetching blog post:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch blog post',
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
