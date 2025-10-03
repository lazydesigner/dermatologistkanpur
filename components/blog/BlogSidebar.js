'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaSearch, FaCalendarAlt, FaTags, FaUserMd, FaArrowRight } from 'react-icons/fa'
import { BLOG_POSTS, DOCTOR_INFO } from '@/lib/constants'

export default function BlogSidebar() {
  const recentPosts = BLOG_POSTS.slice(0, 4)
  const popularTags = ['skincare', 'hair loss', 'acne', 'anti-aging', 'dermatology', 'beauty tips', 'PRP therapy', 'treatments']
  const categories = [
    { name: 'Skincare', count: 12 },
    { name: 'Hair Care', count: 8 },
    { name: 'Treatments', count: 6 },
    { name: 'Beauty Tips', count: 10 },
    { name: 'Anti-Aging', count: 5 }
  ]

  return (
    <div className="space-y-8">
      {/* Search Widget */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl p-6 shadow-lg"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">Search Articles</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search blog posts..."
            className="w-full px-4 py-3 pl-10 border border-gray-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <button className="absolute right-2 top-2 bottom-2 px-4 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors text-sm font-medium">
            Search
          </button>
        </div>
      </motion.div>

      {/* About Author */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-6 shadow-lg text-white"
      >
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
            <FaUserMd className="text-2xl" />
          </div>
          <div>
            <h3 className="text-xl font-bold">About the Author</h3>
            <p className="opacity-90">{DOCTOR_INFO.name}</p>
          </div>
        </div>
        <p className="text-sm opacity-90 mb-4">
          With {DOCTOR_INFO.experience.split(' ')[0]} years of experience in dermatology, 
          Dr. Singh shares expert insights on skin and hair care.
        </p>
        <Link
          href="/about"
          className="inline-flex items-center text-white hover:text-blue-100 transition-colors font-medium"
        >
          Learn More
          <FaArrowRight className="ml-2" />
        </Link>
      </motion.div>

      {/* Recent Posts */}
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl p-6 shadow-lg"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Posts</h3>
        <div className="space-y-4">
          {recentPosts.map((post, index) => (
            <div key={post.id} className="flex space-x-3 group">
              <div className="relative w-16 h-16 flex-shrink-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-gray-900 line-clamp-2 group-hover:text-primary transition-colors">
                  <Link href={`/${post.slug}`}>
                    {post.title}
                  </Link>
                </h4>
                <div className="flex items-center text-xs text-gray-500 mt-1">
                  <FaCalendarAlt className="mr-1" />
                  <span>
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div> */}

      {/* Categories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl p-6 shadow-lg"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-6">Categories</h3>
        <div className="space-y-3">
          {categories.map((category, index) => (
            <div key={index} className="flex items-center justify-between group cursor-pointer">
              <span className="text-gray-700 group-hover:text-primary transition-colors">
                {category.name}
              </span>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-sm group-hover:bg-primary group-hover:text-white transition-colors">
                {category.count}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Popular Tags */}
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl p-6 shadow-lg"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-6">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-primary hover:text-white transition-colors cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>
      </motion.div> */}

      {/* Newsletter Signup */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-pink-50 to-blue-50 rounded-2xl p-6 shadow-lg border border-pink-100"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">Stay Updated</h3>
        <p className="text-gray-600 mb-4 text-sm">
          Subscribe to our newsletter for the latest tips and insights on skin and hair care.
        </p>
        <div className="space-y-3">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          />
          <button className="w-full btn-primary">
            Subscribe Now
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="bg-gray-900 rounded-2xl p-6 shadow-lg text-white"
      >
        <h3 className="text-xl font-bold mb-4">Need Professional Help?</h3>
        <p className="text-gray-300 mb-4 text-sm">
          Get personalized advice from our expert dermatologist. Book your consultation today.
        </p>
        <Link
          href="/contact"
          className="block w-full text-center btn-primary"
        >
          Book Consultation
        </Link>
      </motion.div>
    </div>
  )
}