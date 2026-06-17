import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { label: '关于', href: '#about' },
    { label: '作品', href: '#projects' },
    { label: '能力', href: '#skills' },
    { label: '联系', href: '#contact' },
  ]

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled ? 'glass bg-dark-900/50 border-b border-dark-700' : 'transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-container mx-auto container-gutter py-4 flex justify-between items-center">
        <motion.div
          className="text-xl font-bold gradient-text"
          whileHover={{ scale: 1.05 }}
        >
          YONG
        </motion.div>

        <div className="flex gap-8 items-center">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-dark-300 hover:text-blue-400 transition-colors"
            >
              {item.label}
            </a>
          ))}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium text-sm hover:bg-blue-700 transition-colors"
          >
            联系我
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}
