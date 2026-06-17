import { motion } from 'framer-motion'

export default function About() {
  const stats = [
    { number: '8+', label: '年设计经验' },
    { number: '150+', label: '成功案例' },
    { number: '40+', label: '合作品牌' },
    { number: '100%', label: '客户满意度' },
  ]

  const contacts = [
    { icon: '📧', label: 'Email', value: 'hello@yong.design' },
    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/yong' },
    { icon: '🐙', label: 'GitHub', value: 'github.com/yong' },
    { icon: '📱', label: 'WeChat', value: 'YONGdesign2024' },
  ]

  return (
    <section id="about" className="relative py-20 md:py-32">
      <div className="max-w-container mx-auto container-gutter">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* 左侧 - 头像/人物图 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-72 md:h-72">
              {/* 渐变圆形背景 */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              {/* 头像容器 */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden border border-dark-700/50 glass">
                <div className="w-full h-full bg-gradient-to-br from-dark-800 to-dark-900 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🎨</div>
                    <p className="text-dark-400">视觉设计师</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 右侧 - 个人介绍 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-8"
          >
            <div>
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="gradient-text">关于我</span>
              </motion.h2>
              
              <motion.p
                className="text-lg text-dark-300 leading-relaxed space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="block">
                  我是一名专业的视觉设计师，专注于品牌设计、UI/UX 设计和 AI 创意应用。
                </span>
                <span className="block">
                  凭借 8+ 年的设计经验，我为众多知名品牌和创新企业提供过设计服务，
                  帮助他们打造独特的视觉识别系统和数字体验。
                </span>
                <span className="block">
                  擅长将设计思维与最新科技相融合，创造既美观又实用的解决方案。
                </span>
              </motion.p>
            </div>

            {/* 数据展示 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="glass rounded-xl p-4 text-center border border-dark-700/30"
                >
                  <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-dark-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* 联系方式 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4">
              {contacts.map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href="#"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="glass rounded-lg p-3 border border-dark-700/30 hover:border-blue-400/50 transition-colors text-center group cursor-pointer"
                >
                  <div className="text-2xl mb-2">{contact.icon}</div>
                  <div className="text-xs text-dark-400 group-hover:text-blue-400 transition-colors">
                    {contact.label}
                  </div>
                  <div className="text-xs font-medium text-gray-300 mt-1 truncate">
                    {contact.value}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
