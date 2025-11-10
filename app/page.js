import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingButton from '@/components/ui/FloatingButton'
import BlogHero from '@/components/blog/BlogHero'
import FeaturedPosts from '@/components/blog/FeaturedPosts'
import BlogList from '@/components/blog/BlogList'
import BlogSidebar from '@/components/blog/BlogSidebar'
import ServicesHero from '@/components/services/ServicesHero'
import SkinTreatments from '@/components/services/SkinTreatments'
import { SITE_CONFIG } from '@/lib/constants'
import Post from '@/models/Post';
import dbConnect from '@/lib/dbConnect';
 
export const dynamic = "force-dynamic"

export const metadata = {
  title: 'Best Dermatologist in Kanpur | Dr. R M Singh | Skin World Clinic',
  description:
    'Looking for the best dermatologist in Kanpur? Consult Dr. R M Singh at Skin World Clinic for advanced skin, hair, and laser treatments. Book your appointment today!',
  keywords:
    'best dermatologist in Kanpur, top skin specialist in Kanpur, dermatologist near me Kanpur, Dr. R M Singh dermatologist, skin clinic Kanpur, hair and skin treatment Kanpur',
  openGraph: {
    title: 'Best Dermatologist in Kanpur | Dr. R M Singh | Skin World Clinic',
    description:
      'Get expert care from Dr. R M Singh — the best dermatologist in Kanpur, offering skin, hair, and cosmetic treatments at Skin World Clinic.',
    url: SITE_CONFIG.url + '',
    type: 'article',
    images: [
      {
        url: SITE_CONFIG.url + '/images/dermatologist-kanpur.jpg',
        alt: 'Dr. R M Singh - Best Dermatologist in Kanpur',
      },
    ],
  },
  alternates: {
    canonical: SITE_CONFIG.url + '',
  },
};

const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Skin World Clinic",
    "image": "https://yourdomain.com/images/dermatologist-kanpur.jpg",
    "@id": "dermatologistkanpur.in",
    "url": "dermatologistkanpur.in",
    "telephone": "+91-9936959955",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "113/131 Swaroop Nagar (Near Madhuraj hospital), Kanpur, U.P. 208002",
      "addressLocality": "Kanpur",
      "addressRegion": "UP",
      "postalCode": "208002",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.4607,
      "longitude": 80.3218
    },
    "openingHours": "Mo-Sa 10:00-19:00",
    "department": {
      "@type": "MedicalSpecialty",
      "name": "Dermatology"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "245"
    },
    "medicalSpecialty": "Dermatology",
    "founder": {
      "@type": "Person",
      "name": "Dr. R M Singh"
    },
    "sameAs": [
      "https://www.facebook.com/skinworldkanpur",
      "https://www.instagram.com/skin.worldkanpur"
    ]
  };


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
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Header />
      <main id="main-content" className="flex-1">
        <ServicesHero />
        <SkinTreatments />
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