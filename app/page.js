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
  title: 'Skin Doctor in Kanpur | Dr. R M Singh | Skin World Clinic',
  description:
    'Looking for the best skin doctor in Kanpur? Visit Skin World Clinic by Dr. R M Singh for expert treatment in acne, hair loss, pigmentation, and cosmetic dermatology.',
  keywords:
    'skin doctor in Kanpur, dermatologist in Kanpur, skin specialist Kanpur, Dr. R M Singh, Skin World Clinic Kanpur, best dermatologist near me',
  openGraph: {
    title: 'Skin Doctor in Kanpur | Dr. R M Singh | Skin World Clinic',
    description:
      'Consult Dr. R M Singh, one of the top dermatologists in Kanpur at Skin World Clinic. Expert care for skin, hair, and cosmetic issues.',
    url: 'https://skindoctorinkanpur.com/',
    type: 'article',
    images: [
      {
        url: 'https://skindoctorinkanpur.com/images/skin-doctor-kanpur.jpg',
        alt: 'Dr. R M Singh - Skin Doctor in Kanpur',
      },
    ],
  },
  alternates: {
    canonical: 'https://skindoctorinkanpur.com/',
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
      "image": "https://skindoctorinkanpur.com/images/skin-doctor-kanpur.jpg",
      "@id": "https://skindoctorinkanpur.com/",
      "url": "https://skindoctorinkanpur.com/",
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
      "medicalSpecialty": "Dermatology",
      "founder": {
        "@type": "Person",
        "name": "Dr. R M Singh"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "250"
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