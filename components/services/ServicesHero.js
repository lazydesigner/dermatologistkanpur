'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaEye, FaCut, FaUserMd, FaSyringe, FaSpa } from 'react-icons/fa'

export default function ServicesHero() {
  const serviceCategories = [
    
    {
      icon: FaSpa,
      title: 'Skin Treatment',
      count: 'Expert Care',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: FaCut,
      title: 'Hair Treatments',
      count: '15+ Services',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: FaEye,
      title: 'Eyelid Surgeries',
      count: '10+ Procedures',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: FaSyringe,
      title: 'Non-Surgical',
      count: '8+ Treatments',
      color: 'from-purple-500 to-purple-600'
    }
  ]

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-pink-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-200/20 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6"
            >
              <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></div>
              Comprehensive Care
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Best Skin Specialist in {' '}
              <span className="gradient-text">kanpur</span>
            </motion.h1>
 

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >Looking for the Best Skin Specialist in Kanpur? Visit Skin World Clinic by Dr. R M Singh for expert skin, hair, and laser treatments. Book your appointment today!
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <Link
                href="/contact"
                className="btn-primary text-center"
              >
                Book Consultation
              </Link>
              
              <Link
                href="#services-overview"
                className="btn-secondary text-center"
              >
                Explore Services
              </Link>
            </motion.div>

            {/* Service Categories Quick Overview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {serviceCategories.map((category, index) => {
                const IconComponent = category.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300 text-center"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                      <IconComponent className="text-white text-xl" />
                    </div>
                    <div className="text-sm font-semibold text-gray-900 mb-1">{category.title}</div>
                    <div className="text-xs text-gray-600">{category.count}</div>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/38.jpg"
                  alt="Advanced Dermatology Services"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20"></div>
                
                {/* Floating Service Cards */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                      <FaCut className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Hair Transplant</div>
                      <div className="text-sm text-gray-600">Advanced FUE Technique</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      <FaEye className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Eyelid Surgery</div>
                      <div className="text-sm text-gray-600">Precision Procedures</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                  className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">98%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                </motion.div>
              </div>

              {/* Background Decorations */}
              <div className="absolute -z-10 top-8 right-8 w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl"></div>
              <div className="absolute -z-20 top-16 right-16 w-full h-full bg-gradient-to-br from-secondary/5 to-primary/5 rounded-3xl"></div>
            </div>
          </motion.div>
        </div>

        {/* Services Overview Banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-20"
          id="services-overview"
        >
          <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Complete Dermatological Solutions</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              From consultation to recovery, we provide comprehensive care with state-of-the-art 
              technology and personalized treatment plans for optimal results.
            </p>
          </div>
        </motion.div>
      </div>
 
    </section>
  )
}