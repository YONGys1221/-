import { motion } from 'framer-motion'

export default function Skills() {
  const skills = [
    {
      title: '视觉设计',
      description: '深厚的美学基础，掌握设计美学原理和视觉表达方式',
      icon: '🎨',
      items: ['品牌设计', 'VI系统', '视觉规范', '色彩理论'],
    },
    {
      title: 'UI/UX设计',
      description: '用户中心的设计思维，打造高转化的交互体验',
      icon: '💻',
      items: ['用户研究', '信息架构', '原型设计', '可用性测试'],
    },
    {
      title: 'AI创意应用',
      description: '探索人工智能在设计领域的创新应用和可能性',
      icon: '🤖',
      items: ['AI生成工具', '创意工作流', '数据可视化', '算法设计'],
    },
    {
      title: '动效设计',
      description: '精致的动画表现力，提升用户体验和品牌质感',
      icon: '✨',
      items: ['过渡动画', '交互反馈', '视频制作', '加载状态'],
    },
    {
      title: '品牌建设',
      description: '完整的品牌战略和落地执行，塑造品牌价值',
      icon: '🎯',
      items: ['品牌策略', '市场定位', '视觉识别', '品牌传播'],
    },
    {
      title: '设计工具',
      description: '熟练掌握行业标准工具和最新设计技术',
      icon: '🛠️',
      items: ['Figma', 'Adobe CC', 'Spline', 'Webflow'],
    },
  ]

  return (
    <section id="skills" className="relative py-20 md:py-32">
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
            <span className="gradient-text">个人优势</span>
          </h2>
          <p className="text-lg text-dark-400">
            核心能力与专业技能
          </p>
        </motion.div>

        {/* 技能卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              {/* 卡片 */}
              <div className="glass rounded-2xl p-6 border border-dark-700/30 hover:border-blue-400/50 transition-colors h-full">
                
                {/* 顶部 */}
                <div className="flex items-start justify-between mb-6">
                  <div className="text-4xl">{skill.icon}</div>
                  <motion.div
                    whileHover={{ rotate: 45 }}
                    className="text-dark-500"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </motion.div>
                </div>

                {/* 标题和描述 */}
                <h3 className="text-xl font-bold text-gray-100 mb-2">
                  {skill.title}
                </h3>
                <p className="text-sm text-dark-400 mb-6 leading-relaxed">
                  {skill.description}
                </p>

                {/* 技能标签 */}
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{ scale: 1.05 }}
                      className="text-xs bg-dark-800 text-blue-300 px-3 py-1 rounded-full border border-dark-700 hover:border-blue-400/50 transition-colors cursor-default"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 底部说明 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 glass rounded-2xl p-8 border border-dark-700/30 text-center"
        >
          <p className="text-lg text-dark-300 max-w-2xl mx-auto">
            持续学习新技术和设计趋势，致力于在视觉设计、UI/UX 和 AI 应用领域
            <span className="font-semibold text-blue-400"> 创造最大价值 </span>
            ，为客户带来卓越的设计体验。
          </p>
        </motion.div>
      </div>
    </section>
  )
}
