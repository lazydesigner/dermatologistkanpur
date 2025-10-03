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

export async function GET() {
  try {
    await dbConnect();
    
    // Aggregate all keywords/categories from published posts
    const categories = await Post.aggregate([
      { $match: { status: 'published' } },
      { $unwind: '$keywords' },
      { 
        $group: { 
          _id: '$keywords',
          count: { $sum: 1 }
        }
      },
      { $sort: { count: -1 } },
      { $limit: 50 } // Limit to top 50 categories
    ]);

    const response = {
      success: true,
      data: {
        categories: categories.map(cat => ({
          name: cat._id,
          count: cat.count,
          slug: cat._id.toLowerCase().replace(/[^a-z0-9]+/g, '-')
        }))
      },
      meta: {
        timestamp: new Date().toISOString(),
        total: categories.length
      }
    };

    return NextResponse.json(response, { headers: corsHeaders });

  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch categories',
        message: error.message
      },
      { 
        status: 500,
        headers: corsHeaders
      }
    );
  }
}