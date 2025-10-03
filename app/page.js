import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingButton from '@/components/ui/FloatingButton'
import BlogHero from '@/components/blog/BlogHero'
import FeaturedPosts from '@/components/blog/FeaturedPosts'
import BlogList from '@/components/blog/BlogList'
import BlogSidebar from '@/components/blog/BlogSidebar'
import { SITE_CONFIG } from '@/lib/constants'
import Post from '@/models/Post';
import dbConnect from '@/lib/dbConnect';
 
export const dynamic = "force-dynamic"

export const metadata = {
  title: 'Blog - Dermatology Tips & Expert Advice',
  description: 'Read expert dermatology advice, skin care tips, hair treatment insights, and latest updates from Dr. R M Singh and the Skin World team.',
  keywords: 'dermatology blog, skin care tips, hair care advice, beauty tips kanpur, skin health',
  openGraph: {
    title: 'Blog - Dermatology Tips & Expert Advice | ' + SITE_CONFIG.name,
    description: 'Read expert dermatology advice, skin care tips, hair treatment insights, and latest updates from Dr. R M Singh and the Skin World team.',
    url: SITE_CONFIG.url + '/blog', 
  },
}

async function getPosts() {
  await dbConnect()
  const posts = await Post.find({ status: "published" })
    .sort({ createdAt: -1 })
    .limit(3)
    .lean()
  return JSON.parse(JSON.stringify(posts))
}

async function getAllPosts() {
  await dbConnect()
  const posts = await Post.find({ status: "published" })
    .sort({ createdAt: -1 }) 
    .lean()
  return JSON.parse(JSON.stringify(posts))
}

export default async  function BlogPage() {
  const featuredPosts = await getPosts() 
  const BLOG_POSTS = await getAllPosts()  
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <BlogHero />
        <FeaturedPosts featuredPosts={featuredPosts} />
        <div className="max-w-7xl mx-auto container-padding section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <BlogList BLOG_POSTS={BLOG_POSTS} />
            </div>
            <div className="lg:col-span-1">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingButton />
    </>
  )
}