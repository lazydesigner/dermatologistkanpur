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
  title: 'Best Skin Specialist in Kanpur | Dr. R M Singh | Skin World Clinic',
  description:
    'Looking for the Best Skin Specialist in Kanpur? Visit Skin World Clinic by Dr. R M Singh for expert skin, hair, and laser treatments. Book your appointment today!',
  keywords:
    'Best Skin Specialist in Kanpur, top dermatologist Kanpur, skin doctor Kanpur, Dr. R M Singh, Skin World Clinic Kanpur, hair and skin treatment Kanpur',
  openGraph: {
    title: 'Best Skin Specialist in Kanpur | Dr. R M Singh | Skin World Clinic',
    description:
      'Trusted by thousands, Dr. R M Singh offers advanced skin, hair, and cosmetic solutions at Skin World Clinic — the best dermatology center in Kanpur.',
    url: 'https://skinspecialistsinkanpur.in/',
    type: 'website',
    images: [
      {
        url: 'https://skinspecialistsinkanpur.in/images/skin-specialist-kanpur.jpg',
        alt: 'Dr. R M Singh - Best Skin Specialist in Kanpur',
      },
    ],
  },
  alternates: {
    canonical: 'https://skinspecialistsinkanpur.in/',
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
      "name": "Skin World Clinic",
      "image": "https://skinspecialistsinkanpur.in/images/skin-specialist-kanpur.jpg",
      "@id": "https://skinspecialistsinkanpur.in/",
      "url": "https://skinspecialistsinkanpur.in/",
      "telephone": "+91-9936959955",
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
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "10:00",
          "closes": "19:00"
        }
      ],
      "department": {
        "@type": "MedicalSpecialty",
        "name": "Dermatology"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "250"
      },
      "medicalSpecialty": "Dermatology",
      "founder": {
        "@type": "Person",
        "name": "Dr. R M Singh"
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