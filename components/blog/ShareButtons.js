'use client'

import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp, FaLink } from 'react-icons/fa'
import { SITE_CONFIG } from '@/lib/constants'

export default function ShareButtons({ post }) {
  const shareUrl = `${SITE_CONFIG.url}/${post.slug}`
  const shareText = `${post.title} - ${post.excerpt}`

  const shareLinks = [
    {
      name: 'Facebook',
      icon: FaFacebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: 'hover:bg-blue-600'
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
      color: 'hover:bg-blue-400'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: 'hover:bg-blue-700'
    },
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      url: `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`,
      color: 'hover:bg-green-600'
    }
  ]

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      alert('Link copied to clipboard!')
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  return (
    <div className="flex items-center space-x-4 mb-8 p-4 bg-gray-50 rounded-lg">
      <span className="text-gray-600 font-medium">Share:</span>
      <div className="flex space-x-2">
        {shareLinks.map((link) => {
          const IconComponent = link.icon
          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 bg-gray-200 ${link.color} hover:text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110`}
              aria-label={`Share on ${link.name}`}
            >
              <IconComponent className="text-sm" />
            </a>
          )
        })}
        <button
          onClick={copyToClipboard}
          className="w-10 h-10 bg-gray-200 hover:bg-gray-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
          aria-label="Copy link"
        >
          <FaLink className="text-sm" />
        </button>
      </div>
    </div>
  )
}