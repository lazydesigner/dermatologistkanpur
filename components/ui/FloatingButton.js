'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPhone, FaCalendarAlt, FaWhatsapp, FaTimes } from 'react-icons/fa'
import { CONTACT_INFO } from '@/lib/constants'

export default function FloatingButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
        setIsExpanded(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const handleWhatsApp = () => {
    const phoneNumber = CONTACT_INFO.phones[0].replace(/[^\d]/g, '')
    const message = encodeURIComponent('Hello! I would like to book an appointment at Skin World.')
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  const handleCall = () => {
    window.location.href = `tel:${CONTACT_INFO.phones[0]}`
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50 no-print">
          {/* Expanded Options */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, scale: 0, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0, y: 20 }}
                transition={{ duration: 0.3, staggerChildren: 0.1 }}
                className="absolute bottom-16 right-0 flex flex-col items-end space-y-3"
              >
                {/* Book Appointment */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href="/contact"
                    className="flex items-center bg-white text-primary border border-primary hover:bg-primary hover:text-white rounded-full px-4 py-3 shadow-lg transition-all duration-300 group"
                    onClick={() => setIsExpanded(false)}
                  >
                    <FaCalendarAlt className="mr-2" />
                    <span className="font-medium whitespace-nowrap">Book Appointment</span>
                  </Link>
                </motion.div>

                {/* WhatsApp */}
                <motion.button
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  onClick={handleWhatsApp}
                  className="flex items-center bg-white text-green-600 border border-green-600 hover:bg-green-600 hover:text-white rounded-full px-4 py-3 shadow-lg transition-all duration-300 group"
                >
                  <FaWhatsapp className="mr-2" />
                  <span className="font-medium whitespace-nowrap">WhatsApp</span>
                </motion.button>

                {/* Call */}
                <motion.button
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  onClick={handleCall}
                  className="flex items-center bg-white text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white rounded-full px-4 py-3 shadow-lg transition-all duration-300 group"
                >
                  <FaPhone className="mr-2" />
                  <span className="font-medium whitespace-nowrap">Call Now</span>
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Floating Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              rotate: isExpanded ? 45 : 0 
            }}
            exit={{ opacity: 0, scale: 0, rotate: -180 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 260, damping: 20 }}
            onClick={() => setIsExpanded(!isExpanded)}
            className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-white transition-all duration-300 ${
              isExpanded 
                ? 'bg-red-500 hover:bg-red-600' 
                : 'bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isExpanded ? 'Close options' : 'Open contact options'}
          >
            <AnimatePresence mode="wait">
              {isExpanded ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaTimes className="text-xl" />
                </motion.div>
              ) : (
                <motion.div
                  key="phone"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaPhone className="text-xl" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Pulse Animation */}
          {!isExpanded && (
            <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20"></div>
          )}

          {/* Tooltip */}
          <AnimatePresence>
            {!isExpanded && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3, delay: 2 }}
                className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-black text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap pointer-events-none"
              >
                Contact Us
                <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-l-4 border-l-black border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </AnimatePresence>
  )
}