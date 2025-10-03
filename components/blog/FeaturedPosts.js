'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight, FaClock, FaUser, FaArrowRight } from 'react-icons/fa' 



export default  function FeaturedPosts({ featuredPosts }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
   
  // Auto-advance slides
  useEffect(() => { 
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredPosts.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, featuredPosts.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredPosts.length) % featuredPosts.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredPosts.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Articles</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our most popular and insightful articles on dermatology, skincare, and beauty
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-6"></div>
        </motion.div>

        {/* Featured Posts Slider */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative h-[600px] md:h-[500px]"
              >
                {/* Background Image */}
                <Image
                  src={featuredPosts[currentSlide]?.featuredImage?.url || '/default.jpg'}
                  alt={featuredPosts[currentSlide]?.featuredImage?.alt || 'Default image'}
                  fill
                  className="object-cover"
                  priority
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

                {/* Content */}
                <div className="absolute inset-0 flex items-center">
                  <div className="max-w-4xl mx-auto container-padding text-white">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      {/* Text Content */}
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      > 
                          {/* Category Badge */}
                        {featuredPosts[currentSlide].categories && featuredPosts[currentSlide].categories.length > 0 && (
                          <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="inline-block px-4 py-2 bg-purple-600/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4"
                          >
                            {featuredPosts[currentSlide].categories?.[0]}
                          </motion.span>
                        )} 

                        {/* Title */}
                        <motion.h3
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.4 }}
                          className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
                        >
                          {featuredPosts[currentSlide].title}
                        </motion.h3>

                        {/* Excerpt */}
                        <motion.p
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.5 }}
                          className="text-lg mb-6 opacity-90 leading-relaxed"
                        >
                          {featuredPosts[currentSlide].metaDescription}
                        </motion.p>

                        {/* Meta Info */}
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.6 }}
                          className="flex items-center space-x-6 mb-8 text-sm"
                        >
                          <div className="flex items-center space-x-2">
                            <FaUser className="text-primary" />
                            <span>Dr. R M Singh</span>
                          </div> 
                          <div className="text-gray-300">
                            {new Date(featuredPosts[currentSlide].createdAt).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </div>
                        </motion.div>

                        {/* CTA Button */}
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.7 }}
                        >
                          <Link
                            href={`/${featuredPosts[currentSlide].slug}`}
                            className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                          >
                            Read Full Article
                            <FaArrowRight className="ml-2" />
                          </Link>
                        </motion.div>
                      </motion.div>

                      {/* Image Placeholder for larger screens */}
                      <div className="hidden md:block"></div>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                  <motion.div
                    className="h-full bg-white"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 6, ease: "linear" }}
                    key={`progress-${currentSlide}`}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all duration-300 focus-visible"
            aria-label="Previous article"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all duration-300 focus-visible"
            aria-label="Next article"
          >
            <FaChevronRight />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {featuredPosts.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Featured Posts Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {featuredPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onClick={() => goToSlide(index)}
              className={`cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                index === currentSlide ? 'ring-2 ring-primary' : ''
              }`}
            >
              {/* Post Image */}
              <div className="relative h-48">
                <Image
                  src={post.featuredImage?.url || '/default.jpg'}
                  alt={post.featuredImage?.alt || '/default.jpg'}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-white rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <Link href={`/${post.slug}`}>
                <h4 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-primary transition-colors">
                  {post.title}
                </h4></Link>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta */} 
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-4"> 
                  </div>
                  <span>
                    {new Date(post.createdAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                </div>

                {/* Active Indicator */}
                {index === currentSlide && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    className="h-px bg-primary mt-4"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}