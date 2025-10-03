'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaClock, FaUser, FaCalendarAlt, FaArrowRight, FaTags } from 'react-icons/fa'
// import { BLOG_POSTS } from '@/lib/constants'

const calculateReadTime = (content) => {
    if (!content) return '5 min read'
    const words = content.split(/\s+/).length
    const minutes = Math.ceil(words / 200)
    return `${minutes} min read`
  }

export default function BlogList({BLOG_POSTS}) {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [visiblePosts, setVisiblePosts] = useState(6)

  const categories = [
    { id: 'all', name: 'All Posts', count: BLOG_POSTS.length },
    { id: 'Skincare', name: 'Skincare', count: BLOG_POSTS.filter(post => post.categories?.[0] === 'Skincare').length },
    { id: 'Hair Care', name: 'Hair Care', count: BLOG_POSTS.filter(post => post.categories?.[0] === 'Hair Care').length },
    { id: 'Treatments', name: 'Treatments', count: BLOG_POSTS.filter(post => post.categories?.[0] === 'Treatments').length }
  ]

  const filteredPosts = selectedCategory === 'all' 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.categories?.[0] === selectedCategory)

  const displayedPosts = filteredPosts.slice(0, visiblePosts)

  const loadMore = () => {
    setVisiblePosts(prev => prev + 6)
  }

  return (
    <div>
      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-3 mb-12"
      >
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => {
              setSelectedCategory(category.id)
              setVisiblePosts(6)
            }}
            className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === category.id
                ? 'bg-primary text-white shadow-lg'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {category.name}
            <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
              selectedCategory === category.id
                ? 'bg-white/20 text-white'
                : 'bg-gray-200 text-gray-500'
            }`}>
              {category.count}
            </span>
          </button>
        ))}
      </motion.div>

      {/* Blog Posts Grid */}
      <div className="space-y-8">
        {displayedPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {/* Image */}
              <div className="relative h-64 md:h-auto">
                <Image
                  src={post.featuredImage?.url || '/default.jpg'}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-white rounded-full text-sm font-medium">
                    {post.categories?.[0]}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-2 p-8">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <FaCalendarAlt />
                    <span>
                      {new Date(post.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaUser />
                    <span>Dr. R M Singh</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaClock />
                    <span>{calculateReadTime(post.content)}</span>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors line-clamp-2">
                  <Link href={`/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                  {post.metaDescription}
                </p>

                {/* Tags */}
                {post.keywords == '' ? '' : <div className="flex items-center space-x-2 mb-6">
                  <FaTags className="text-gray-400" />
                  <div className="flex flex-wrap gap-2">
                    {post.keywords.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs hover:bg-primary hover:text-white transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>}

                {/* Read More */}
                <Link
                  href={`/${post.slug}`}
                  className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors group"
                >
                  Read Full Article
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Load More Button */}
      {visiblePosts < filteredPosts.length && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
            onClick={loadMore}
            className="btn-primary"
          >
            Load More Articles
          </button>
        </motion.div>
      )}

      {/* No Posts Message */}
      {filteredPosts.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center py-12"
        >
          <div className="text-gray-400 text-6xl mb-4">📝</div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
          <p className="text-gray-500">Try selecting a different category or check back later for new content.</p>
        </motion.div>
      )}
    </div>
  )
}