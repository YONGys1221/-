import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // 这里可以添加实际的表单提交逻辑
    setFormData({ name: '', email: '', message: '' })
  }

  const contactLinks = [
    {
      title: '邮箱',
      value: 'hello@yong.design',
      href: 'mailto:hello@yong.design',
      icon: '📧',
    },
    {
      title: 'LinkedIn',
      value: 'linkedin.com/in/yong',
      href: '#',
      icon: '💼',
    },
    {
      title: 'GitHub',
      value: 'github.com/yong',
      href: '#',
      icon: '🐙',
    },
    {
      title: 'WeChat',
      value: 'YONGdesign2024',
      href: '#',
      icon: '📱',
    },
  ]

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center py-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/50 to-dark-950" />
        
        {/* 背景光效 */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <div className="max-w-container mx-auto container-gutter w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* 左侧 - 联系信息 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="block text-gray-100">准备好合作了吗?</span>
              <span className="block gradient-text mt-2">让我们一起创造精彩</span>
            </motion.h2>

            <motion.p
              className="text-lg text-dark-400 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              无论您的项目规模如何，我都期待与您的团队合作，将创意愿景转化为现实。
              让我们讨论您的需求，并一起打造令人印象深刻的设计。
            </motion.p>

            {/* 联系方式列表 */}
            <div className="space-y-4">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={link.title}
                  href={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 glass rounded-lg border border-dark-700/30 hover:border-blue-400/50 transition-colors group cursor-pointer"
                >
                  <div className="text-2xl">{link.icon}</div>
                  <div className="flex-1">
                    <div className="text-sm text-dark-500">{link.title}</div>
                    <div className="font-medium text-gray-100 group-hover:text-blue-400 transition-colors">
                      {link.value}
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-dark-500 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* 右侧 - 联系表单 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 border border-dark-700/30"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* 名字输入 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  您的名字
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-gray-100 placeholder-dark-500 focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="请输入您的名字"
                />
              </motion.div>

              {/* 邮箱输入 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  您的邮箱
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-gray-100 placeholder-dark-500 focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="your@email.com"
                />
              </motion.div>

              {/* 消息输入 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  您的消息
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-gray-100 placeholder-dark-500 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                  placeholder="请告诉我您的需求和想法..."
                />
              </motion.div>

              {/* 提交按钮 */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-colors"
              >
                发送消息
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* 底部版权信息 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-dark-700/30 text-center"
        >
          <p className="text-dark-400 text-sm">
            © 2024 YONG Design. All rights reserved. | Crafted with creativity ✨
          </p>
          <div className="mt-4 flex justify-center gap-6">
            <a href="#" className="text-dark-500 hover:text-blue-400 transition-colors text-sm">
              隐私政策
            </a>
            <span className="text-dark-700">•</span>
            <a href="#" className="text-dark-500 hover:text-blue-400 transition-colors text-sm">
              服务条款
            </a>
            <span className="text-dark-700">•</span>
            <a href="#" className="text-dark-500 hover:text-blue-400 transition-colors text-sm">
              社交媒体
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
