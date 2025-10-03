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
    const limit = parseInt(searchParams.get('limit')) || 5;

    // Get recent published posts
    const posts = await Post.find({ status: 'published' })
      .select('title slug metaDescription featuredImage createdAt')
      .sort({ createdAt: -1 })
      .limit(limit)
      .lean();

    const response = {
      success: true,
      data: {
        posts: posts.map(post => ({
          id: post._id,
          title: post.title,
          slug: post.slug,
          metaDescription: post.metaDescription,
          featuredImage: post.featuredImage,
          publishedAt: post.createdAt
        }))
      },
      meta: {
        timestamp: new Date().toISOString(),
        count: posts.length
      }
    };

    return NextResponse.json(response, { headers: corsHeaders });

  } catch (error) {
    console.error('Error fetching recent posts:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch recent posts',
        message: error.message
      },
      { 
        status: 500,
        headers: corsHeaders
      }
    );
  }
}