import { motion } from 'framer-motion'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: '品牌VI系统设计',
      description: '为科技创新公司设计完整的视觉识别系统，包括logo、色彩体系、字体应用等。',
      category: '品牌设计',
      image: '🎨',
      color: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      id: 2,
      title: '产品UI/UX设计',
      description: '设计并实现了一个金融科技应用的完整用户界面，提升用户转化率35%。',
      category: 'UI/UX',
      image: '💻',
      color: 'from-purple-500/20 to-pink-500/20',
    },
    {
      id: 3,
      title: 'AI创意工具界面',
      description: '探索人工智能与设计的结合，创建直观的AI模型可视化交互界面。',
      category: 'AI设计',
      image: '🤖',
      color: 'from-amber-500/20 to-orange-500/20',
    },
    {
      id: 4,
      title: '电商平台视觉优化',
      description: '重新设计电商平台的整体视觉风格，提高了品牌辨识度和购物体验。',
      category: '视觉设计',
      image: '🛍️',
      color: 'from-green-500/20 to-teal-500/20',
    },
    {
      id: 5,
      title: '动效与交互设计',
      description: '为多个项目设计精致的动画效果和交互逻辑，增强用户体验。',
      category: '交互设计',
      image: '✨',
      color: 'from-red-500/20 to-rose-500/20',
    },
    {
      id: 6,
      title: '品牌宣传物料',
      description: '设计并制作了系列品牌宣传物料，包括海报、画册、视频素材等。',
      category: '品牌设计',
      image: '📺',
      color: 'from-indigo-500/20 to-violet-500/20',
    },
  ]

  return (
    <section id="projects" className="relative py-20 md:py-32 bg-gradient-to-b from-dark-950 to-dark-900">
      <div className="max-w-container mx-auto container-gutter">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">精选项目</span>
          </h2>
          <p className="text-lg text-dark-400">
            展示代表性作品和创意成果
          </p>
        </motion.div>

        {/* 项目网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              {/* 卡片容器 */}
              <div className="relative h-96 rounded-2xl overflow-hidden glass border border-dark-700/30 hover:border-blue-400/50 transition-colors">
                
                {/* 背景图像区域 */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color}`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="absolute inset-0 flex items-center justify-center text-7xl opacity-40 group-hover:opacity-60 transition-opacity">
                    {project.image}
                  </div>
                </motion.div>

                {/* 内容层 */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-950/50 to-transparent flex flex-col justify-end p-6">
                  <div className="space-y-4">
                    {/* 分类标签 */}
                    <div className="inline-block">
                      <span className="text-xs font-semibold text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full border border-blue-400/30">
                        {project.category}
                      </span>
                    </div>

                    {/* 标题 */}
                    <h3 className="text-xl md:text-2xl font-bold text-gray-100 leading-tight">
                      {project.title}
                    </h3>

                    {/* 描述 */}
                    <p className="text-sm text-dark-400 line-clamp-2">
                      {project.description}
                    </p>

                    {/* CTA */}
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center gap-2 text-blue-400 font-medium text-sm pt-2 cursor-pointer"
                    >
                      查看详情
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 查看更多 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-dark-600 text-gray-100 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-400 transition-colors"
          >
            查看所有作品 →
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
