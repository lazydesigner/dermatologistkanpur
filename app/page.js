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
  title: 'Best Dermatologist in Kanpur | Dr. R M Singh | Skin World Kanpur',
  description:
    'Searching for the best dermatologist in Kanpur? Visit Skin World Clinic, led by Dr. R M Singh, for expert skin, hair, and cosmetic treatments. Book your appointment today!',
  keywords:
    'best dermatologist in Kanpur, top skin specialist in Kanpur, dermatologist near me Kanpur, Dr. R M Singh Kanpur, skin doctor Kanpur, skin world Kanpur, dermatologist Swaroop Nagar Kanpur',
  openGraph: {
    title: 'Best Dermatologist in Kanpur | Dr. R M Singh | Skin World Kanpur',
    description:
      'Get expert skin and hair care from Dr. R M Singh — the best dermatologist in Kanpur at Skin World Clinic. Personalized treatments for all your skin concerns.',
    url: 'https://kanpurdermatologist.com/',
    type: 'website',
    images: [
      {
        url: 'https://kanpurdermatologist.com/images/skinworld-kanpur.jpg',
        alt: 'Dr. R M Singh - Best Dermatologist in Kanpur',
      },
    ],
  },
  alternates: {
    canonical: 'https://kanpurdermatologist.com/',
  },
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
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "Skin World Kanpur",
      "image": "https://kanpurdermatologist.com/images/skinworld-kanpur.jpg",
      "@id": "https://kanpurdermatologist.com/",
      "url": "https://kanpurdermatologist.com/",
      "telephone": "+919936959955",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "113/209, near Madhuraj Hospital, Khalasi Line, Swaroop Nagar",
        "addressLocality": "Kanpur",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "208002",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 26.4607,
        "longitude": 80.3218
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "10:00",
          "closes": "19:00"
        }
      ],
      "medicalSpecialty": "Dermatology",
      "founder": {
        "@type": "Person",
        "name": "Dr. R M Singh"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "245"
      },
      "sameAs": [
        "https://www.facebook.com/SkinWorldKanpur/",
        "https://www.instagram.com/skin.world.dermatology/",
        "https://www.youtube.com/@SkinWorldKanpur"
      ]
    }),
  }}
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