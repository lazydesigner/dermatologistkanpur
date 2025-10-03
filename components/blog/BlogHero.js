'use client'

import { motion } from 'framer-motion'
import { FaNewspaper, FaUser, FaCalendarAlt, FaSearch } from 'react-icons/fa'

export default function BlogHero() {
  const blogStats = [
    { icon: FaNewspaper, number: '50+', label: 'Articles', color: 'from-blue-500 to-blue-600' },
    { icon: FaUser, number: '10K+', label: 'Readers', color: 'from-green-500 to-green-600' },
    { icon: FaCalendarAlt, number: 'Weekly', label: 'Updates', color: 'from-purple-500 to-purple-600' }
  ]

  return (
    <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-blue-50 via-white to-pink-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-200/20 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6"
          >
            <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></div>
            Expert Insights & Tips
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Skin & Hair{' '}
            <span className="gradient-text">Blog</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto"
          >
            Expert dermatology advice, latest treatment insights, and practical tips for healthy skin and hair
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-md mx-auto mb-12"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-6 py-4 pl-12 bg-white rounded-full border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 shadow-lg"
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <button className="absolute right-2 top-2 bottom-2 px-6 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors font-medium">
                Search
              </button>
            </div>
          </motion.div> 
        </div>
      </div>
 
    </section>
  )
}