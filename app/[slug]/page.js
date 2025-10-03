import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingButton from '@/components/ui/FloatingButton'
import BlogSidebar from '@/components/blog/BlogSidebar'
import RelatedPosts from '@/components/blog/RelatedPosts'
import ShareButtons from '@/components/blog/ShareButtons'
import { FaCalendarAlt, FaUser, FaClock, FaTags, FaArrowLeft } from 'react-icons/fa'
import { BLOG_POSTS, SITE_CONFIG } from '@/lib/constants'
import Post from '@/models/Post';
import dbConnect from '@/lib/dbConnect';

// Helper function to calculate reading time
function calculateReadingTime(content) {
  if (!content) return 0;
  const wordsPerMinute = 200;
  const words = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

 async function singleBlog(slug){ 
    await dbConnect(); 
    
    // Find the post by slug and ensure it's published
    const post = await Post.findOne({ 
      slug, 
      status: 'published' 
    }).lean();
    
    if (!post) {
      return JSON.parse(JSON.stringify('Blog post not found')) 
    }

    // Get related posts (same keywords, exclude current post)
    const relatedPosts = await Post.find({
      _id: { $ne: post._id },
      status: 'published',
      keywords: { $in: post.keywords || [] }
    })
    .select('title slug metaDescription categories featuredImage createdAt')
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
        categories: post.categories,
        readingTime: calculateReadingTime(post.content),
        wordCount: post.content ? post.content.replace(/<[^>]*>/g, '').split(/\s+/).length : 0
      },
      related: relatedPosts.map(relatedPost => ({
        id: relatedPost._id,
        title: relatedPost.title,
        slug: relatedPost.slug,
        metaDescription: relatedPost.metaDescription,
        featuredImage: relatedPost.featuredImage,
        categories: relatedPost.categories,
        publishedAt: relatedPost.createdAt
      })),
      meta: {
        timestamp: new Date().toISOString()
      }
    };

    return JSON.parse(JSON.stringify(response));
 
 } 

// Generate static params for all blog posts
// export async function generateStaticParams() {
//   return BLOG_POSTS.map((post) => ({
//     slug: post.slug
//   }))
// }

// Generate metadata for each blog post
export async function generateMetadata({ params }) {
  const AllData = await singleBlog(params.slug) 

  const post = AllData.data;
  
  if (!post) {
    return {
      title: 'Post Not Found'
    }
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords.join(', '),
    alternates: {
      canonical: post.canonical
    },
    openGraph: {
      title: post.metaTitle + ' | ' + SITE_CONFIG.name,
      description: post.metaDescription,
      url: SITE_CONFIG.url + '/' + post.slug,
      images: [post.featuredImage?.url],
      type: 'article',
      publishedTime: post.publishedAt,
      authors: 'Dr. R M Singh'
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.featuredImage?.url]
    }
  }
}

export default async function BlogPostPage({ params }) {
  const AllData = await singleBlog(params.slug)
  console.log(AllData)

  const post = AllData.data;

  if (!post) {
    notFound()
  } 

  const currentContent = post

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        {/* Article Header */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto container-padding">
            {/* Back Button */}
            <Link
              href="/"
              className="inline-flex items-center text-primary hover:text-primary-dark transition-colors mb-8"
            >
              <FaArrowLeft className="mr-2" />
              Back to Blog
            </Link>

            {/* Category Badge */}
            <div className="mb-6">
              <span className="px-4 py-2 bg-primary text-white rounded-full text-sm font-medium">
                {post.categories?.[0]}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center space-x-6 text-gray-600 mb-8">
              <div className="flex items-center space-x-2">
                <FaUser className="text-primary" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaCalendarAlt className="text-primary" />
                <span>
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <FaClock className="text-primary" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex items-center space-x-2 mb-8">
              <FaTags className="text-gray-400" />
              <div className="flex flex-wrap gap-2">
                {post.keywords.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white text-gray-600 rounded-full text-sm border border-gray-200 hover:bg-primary hover:text-white transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="container-padding">
          <div className="max-w-7xl mx-auto">
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl mb-12">
              <Image
                src={post.featuredImage?.url || '/default.jpg'}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Article Content and Sidebar */}
        <section className="container-padding pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Article Content */}
              <div className="lg:col-span-2">
                {/* Share Buttons */}
                <ShareButtons post={post} />

                {/* Article Body */}
                <div 
                  className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-strong:text-gray-900 prose-a:text-primary hover:prose-a:text-primary-dark"
                  dangerouslySetInnerHTML={{ __html: currentContent.content }}
                />

                {/* Author Bio */}
                <div className="mt-12 p-8 bg-gradient-to-br from-blue-50 to-pink-50 rounded-2xl border border-blue-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <FaUser className="text-2xl text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">About {post.author}</h3>
                      <p className="text-gray-700 mb-4">
                        Dr. R M Singh is a board-certified dermatologist with over 24 years of experience 
                        in treating various skin and hair conditions. He specializes in both medical and 
                        cosmetic dermatology, helping patients achieve healthy, beautiful skin.
                      </p>
                      <Link
                        href="/about"
                        className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
                      >
                        Learn More About Dr. Singh
                        <FaArrowLeft className="ml-2 transform rotate-180" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="mt-12 p-8 bg-gradient-to-r from-primary to-secondary rounded-2xl text-white text-center">
                  <h3 className="text-2xl font-bold mb-4">Need Professional Advice?</h3>
                  <p className="mb-6 opacity-90">
                    Get personalized treatment recommendations from our expert dermatologist.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Book Your Consultation
                  </Link>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <BlogSidebar />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <RelatedPosts currentPost={AllData.related} />
      </main>
      <Footer />
      <FloatingButton />
    </>
  )
}