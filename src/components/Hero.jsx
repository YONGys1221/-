import { motion } from 'framer-motion'

export default function Hero({ scrollY }) {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* 视频背景替代品 - 渐变动画背景 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-950 to-dark-950" />
        
        {/* 动画光效 */}
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, 50, -50, 0],
            y: [0, 100, -100, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, -50, 50, 0],
            y: [0, -100, 100, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
      </div>

      {/* 内容 */}
      <div className="relative z-10 max-w-container mx-auto container-gutter w-full">
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* 标题 */}
          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="block text-gray-100">创意视觉设计师</span>
            <span className="block gradient-text mt-2">AI · 品牌 · 创新</span>
          </motion.h1>

          {/* 副标题 */}
          <motion.p
            className="text-lg md:text-xl text-dark-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            将创意转化为数字体验 · 用设计推动品牌价值 · 探索 AI 与设计的无限可能
          </motion.p>

          {/* CTA 按钮 */}
          <motion.div
            className="flex gap-4 justify-center pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
            >
              查看作品
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-dark-600 text-gray-100 rounded-lg font-semibold text-lg hover:border-blue-400 hover:text-blue-400 transition-colors"
            >
              联系我
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* 向下滚动提示 */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-center text-dark-500">
          <div className="text-sm mb-2">向下滚动</div>
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>

      {/* 视差效果 */}
      <motion.div
        className="absolute inset-0 -z-5 pointer-events-none"
        style={{
          y: scrollY * 0.5,
        }}
      />
    </section>
  )
}
