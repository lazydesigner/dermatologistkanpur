'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaSpa, 
  FaLeaf, 
  FaMagic, 
  FaShieldAlt,
  FaStethoscope,
  FaGem,
  FaCheckCircle,
  FaArrowRight
} from 'react-icons/fa'
import { SERVICES } from '@/lib/constants'

export default function SkinTreatments() {
  const [activeTab, setActiveTab] = useState('acneAndScars')

  const tabs = [
    {
      id: 'acneAndScars',
      name: 'Acne & Scars',
      icon: FaLeaf,
      color: 'from-green-500 to-green-600',
      description: 'Comprehensive acne treatment and scar reduction solutions'
    },
    {
      id: 'antiAging',
      name: 'Anti-Aging',
      icon: FaMagic,
      color: 'from-purple-500 to-purple-600',
      description: 'Advanced anti-aging treatments for youthful skin'
    },
    {
      id: 'skinRejuvenation',
      name: 'Skin Rejuvenation',
      icon: FaSpa,
      color: 'from-pink-500 to-pink-600',
      description: 'Rejuvenating treatments for radiant, healthy skin'
    },
    {
      id: 'pigmentation',
      name: 'Pigmentation',
      icon: FaGem,
      color: 'from-yellow-500 to-orange-600',
      description: 'Effective treatments for pigmentation and dark spots'
    },
    {
      id: 'medicalDermatology',
      name: 'Medical Dermatology',
      icon: FaStethoscope,
      color: 'from-blue-500 to-blue-600',
      description: 'Medical treatments for various skin conditions'
    },
    {
      id: 'cosmeticProcedures',
      name: 'Cosmetic Procedures',
      icon: FaShieldAlt,
      color: 'from-indigo-500 to-indigo-600',
      description: 'Advanced cosmetic procedures and enhancements'
    }
  ]

  const getTabData = (tabId) => {
    return SERVICES.skinTreatments[tabId] || []
  }

  const activeTabData = tabs.find(tab => tab.id === activeTab)

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
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center">
              <FaSpa className="text-2xl text-white" />
            </div>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Best Dermatology Services in Kanpur</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive skin care solutions for all skin types and concerns using advanced techniques and proven methods
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full mx-auto mt-6"></div>
        </motion.div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Advanced Skin Care Solutions
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our comprehensive skin treatment approach combines cutting-edge technology with 
              proven medical techniques to address various skin concerns and achieve 
              healthy, radiant skin for all our patients.
            </p>

            {/* Key Features */}
            <div className="space-y-4 mb-8">
              {[
                'Personalized treatment plans',
                'Advanced laser technologies',
                'Medical-grade skin care',
                'Proven treatment protocols'
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaCheckCircle className="text-pink-600 text-sm" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="btn-primary"
            >
              Free Skin Analysis
              <FaArrowRight className="ml-2" />
            </motion.button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/4.jpg"
                alt="Skin Treatment Procedure"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              
              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
                className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-600">99%</div>
                  <div className="text-sm text-gray-600">Patient Satisfaction</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
                className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-600">3000+</div>
                  <div className="text-sm text-gray-600">Treatments Done</div>
                </div>
              </motion.div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl -z-10"></div>
          </motion.div>
        </div>

        {/* Skin Treatment Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Treatment Categories
          </h3>

          {/* Tab Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {tabs.map((tab) => {
              const IconComponent = tab.icon
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-start p-6 rounded-xl font-medium transition-all duration-300 text-left ${
                    activeTab === tab.id
                      ? `bg-gradient-to-r ${tab.color} text-white shadow-lg`
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 ${
                    activeTab === tab.id ? 'bg-white/20' : 'bg-gray-200'
                  }`}>
                    <IconComponent className={`text-xl ${
                      activeTab === tab.id ? 'text-white' : 'text-gray-600'
                    }`} />
                  </div>
                  <div>
                    <div className="font-semibold text-lg mb-1">{tab.name}</div>
                    <div className={`text-sm ${
                      activeTab === tab.id ? 'text-white/90' : 'text-gray-500'
                    }`}>
                      {tab.description}
                    </div>
                  </div>
                </motion.button>
              )
            })}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
            >
              {/* Tab Header */}
              <div className="flex items-center mb-8">
                <div className={`w-12 h-12 bg-gradient-to-br ${activeTabData.color} rounded-xl flex items-center justify-center mr-4`}>
                  <activeTabData.icon className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">{activeTabData.name}</h4>
                  <p className="text-gray-600">{activeTabData.description}</p>
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getTabData(activeTab).map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-10 h-10 bg-gradient-to-br ${activeTabData.color} rounded-lg flex items-center justify-center`}>
                        <activeTabData.icon className="text-white" />
                      </div>
                      <FaArrowRight className="text-gray-400 group-hover:text-gray-600 transition-colors" />
                    </div>
                    
                    <h5 className="font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {service}
                    </h5>
                    
                    <p className="text-sm text-gray-600 mb-4">
                      Professional treatment with personalized care and proven results.
                    </p>

                    <div className="flex items-center text-sm text-gray-500">
                      <FaCheckCircle className="text-green-600 mr-2" />
                      <span>Expert consultation included</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-blue-200"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">
                      Interested in {activeTabData.name}?
                    </h5>
                    <p className="text-gray-600">
                      Schedule a consultation to discuss the best treatment options for your specific skin concerns.
                    </p>
                  </div>
                  <button className="btn-primary whitespace-nowrap ml-4">
                    Book Consultation
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Treatment Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Your Skin Health Journey</h3>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              From initial consultation to achieving your skin goals, we provide comprehensive 
              care with personalized treatment plans and ongoing support.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { step: '1', title: 'Skin Analysis', desc: 'Comprehensive skin assessment' },
                { step: '2', title: 'Treatment Plan', desc: 'Customized treatment strategy' },
                { step: '3', title: 'Treatment', desc: 'Professional procedures' },
                { step: '4', title: 'Follow-up', desc: 'Ongoing care & monitoring' }
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">{phase.step}</span>
                  </div>
                  <h4 className="font-semibold mb-2">{phase.title}</h4>
                  <p className="text-sm opacity-80">{phase.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}