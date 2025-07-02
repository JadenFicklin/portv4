import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { caseStudies, type TechnologyCategory } from '~/data/caseStudies'
import { useThemeStore } from '~/globalState/themeStore'
import { cn } from '~/utils/cn'
import {
  FaArrowLeft,
  FaArrowUpRightFromSquare,
  FaUsers,
  FaCode,
  FaLightbulb,
  FaPuzzlePiece,
  FaLayerGroup,
  FaGraduationCap,
  FaMountain,
  FaRocket,
} from 'react-icons/fa6'
import { motion } from 'framer-motion'
import { Nav } from '~/components/Nav'
import { ImageModal } from '~/utils/ImageModal'
import { morphingDiamonds, circuitBoard } from 'hero-patterns'
import { getTechIcon } from '~/utils/getTechIcon'

const TechItem: React.FC<{
  icon: React.ReactNode
  name: string
  color?: string
}> = ({ icon, name, color = 'text-max/80' }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className={cn(
      'flex items-center p-3 space-x-2 rounded-xl',
      'backdrop-blur-sm bg-max/5',
      'transition-transform duration-300 hover:scale-105',
      'border border-max/10',
    )}
  >
    <span className={cn('text-xl', color)}>{icon}</span>
    <span className="text-sm font-medium text-max/80">{name}</span>
  </motion.div>
)

// Responsive window size hook
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })
  useEffect(() => {
    const handleResize = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight })
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return size
}

// Minimal SVG Pattern Background Component
const MinimalPatternBackground: React.FC<{ theme: string }> = ({ theme }) => {
  // Create a subtle SVG pattern with wavy lines
  const patternColor = theme === 'dark' ? 'ffffff' : '000000'
  const patternOpacity = theme === 'dark' ? '0.03' : '0.04'

  const svgPattern =
    '<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="minimal-waves" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M0 30 Q15 15 30 30 T60 30" stroke="%23' +
    patternColor +
    '" stroke-width="0.5" fill="none" opacity="' +
    patternOpacity +
    '"/><path d="M0 45 Q15 30 30 45 T60 45" stroke="%23' +
    patternColor +
    '" stroke-width="0.3" fill="none" opacity="' +
    patternOpacity +
    '"/><circle cx="45" cy="15" r="1" fill="%23' +
    patternColor +
    '" opacity="' +
    patternOpacity +
    '"/><circle cx="15" cy="45" r="0.5" fill="%23' +
    patternColor +
    '" opacity="' +
    patternOpacity +
    '"/></pattern></defs><rect width="100%" height="100%" fill="url(%23minimal-waves)"/></svg>'

  const noiseOpacity = theme === 'dark' ? '0.015' : '0.02'
  const noiseSvg =
    '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="1" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noiseFilter)" opacity="' +
    noiseOpacity +
    '"/></svg>'

  // Create noise texture using CSS
  const noiseStyle = {
    backgroundImage:
      'url("data:image/svg+xml,' +
      encodeURIComponent(svgPattern) +
      '"), url("data:image/svg+xml,' +
      encodeURIComponent(noiseSvg) +
      '")',
    backgroundSize: '60px 60px, 200px 200px',
    backgroundPosition: 'center, center',
  }

  // Use theme-aware accent color, with special handling for binary theme
  const accentColor =
    theme === 'binary' ? '#bbb' : theme === 'dark' ? '#fff' : '#222'
  const hexOpacity = theme === 'binary' ? 0.13 : theme === 'dark' ? 0.22 : 0.18
  const { width, height } = useWindowSize()
  // Minimums for SSR safety
  const svgW = Math.max(width, 320)
  const svgH = Math.max(height, 400)

  // Animation state
  const [animate, setAnimate] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100)
    return () => clearTimeout(timer)
  }, [])

  // Helper for hex perimeter
  const hexPerimeter = (size: number) => 6 * size

  return (
    <>
      <div className="absolute inset-0 z-[1]" style={noiseStyle} />
      {/* Responsive Full-bleed SVG: Hexagonal Grid */}
      <svg
        className="absolute inset-0 w-full h-full z-[2] pointer-events-none select-none"
        viewBox={`0 0 ${svgW} ${svgH}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ width: '100%', height: '100%' }}
      >
        {(() => {
          const hexes = []
          const size = 48
          const w = size * Math.sqrt(3)
          const cols = Math.ceil((svgW + w) / w) + 2
          const rows = Math.ceil(svgH / (size * 1.5)) + 2
          for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
              const x = -w + col * w + (row % 2 ? w / 2 : 0)
              const y = row * (size * 1.5)
              const points = Array.from({ length: 6 }, (_, i) => {
                const angle = (Math.PI / 3) * i
                return [
                  x + size * Math.cos(angle),
                  y + size * Math.sin(angle),
                ].join(',')
              }).join(' ')
              const perimeter = hexPerimeter(size)
              const style = {
                transition: 'stroke-dashoffset 1.1s cubic-bezier(.7,.2,.2,1)',
                strokeDasharray: perimeter,
                strokeDashoffset: animate ? 0 : perimeter,
              }
              hexes.push(
                <polygon
                  key={`hex-${row}-${col}`}
                  points={points}
                  stroke={accentColor}
                  strokeWidth="1.5"
                  opacity={hexOpacity}
                  fill="none"
                  style={style}
                />,
              )
            }
          }
          return hexes
        })()}
      </svg>
    </>
  )
}

const CaseStudy: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const caseStudy = caseStudies.find((cs) => cs.slug === slug)
  const { theme } = useThemeStore()
  const [isLoaded, setIsLoaded] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  // Scroll to top when slug changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  // Get the pattern color based on theme
  const getPatternColor = () => {
    return theme === 'dark' ? '#ffffff' : '#000000'
  }

  // Pattern style generator functions
  const getMainPattern = () => ({
    backgroundImage: `${morphingDiamonds(getPatternColor(), 0.03)}`,
    backgroundSize: '60px 60px',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
  })

  const getCardPattern = () => ({
    backgroundImage: `${circuitBoard(getPatternColor(), 0.03)}`,
    backgroundSize: '40px 40px',
  })

  useEffect(() => {
    window.scrollTo(0, 0)
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const handleBackClick = () => {
    navigate(-1) // Go back to previous route
  }

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-min text-max">
        <Nav />
        <div className="flex flex-col justify-center items-center min-h-screen">
          <h1 className="mb-4 text-3xl font-bold">Case Study Not Found</h1>
          <Link
            to="/"
            className="flex items-center space-x-2 transition-colors group text-max/80 hover:text-max"
          >
            <FaArrowLeft className="transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    )
  }

  const landingPageImage = caseStudy.screenshots?.find((s) =>
    s.description.includes('Landing Page'),
  )?.src

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen bg-min text-max">
      <Nav />

      {/* Hero Section */}
      <div
        className={cn(
          'relative min-h-[calc(100vh-4rem)] pt-20 md:pt-24 overflow-hidden',
          theme === 'dark' ? 'bg-max/[0.05]' : 'bg-max/[0.08]',
        )}
      >
        {/* Minimal Pattern Background */}
        <MinimalPatternBackground theme={theme} />

        <div className="absolute inset-0 bg-gradient-to-b to-transparent from-min/90 via-min/80 z-[2]" />

        <div className="container relative px-4 mx-auto h-full z-[5]">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative z-10 mb-8 md:mb-12"
          >
            <button
              onClick={handleBackClick}
              className="inline-flex items-center space-x-2 transition-colors group text-max/80 hover:text-max"
            >
              <FaArrowLeft className="transition-transform group-hover:-translate-x-1" />
              <span>Back</span>
            </button>
          </motion.div>

          <div className="grid gap-12 items-start h-full lg:items-center lg:grid-cols-2">
            {/* Left Column - Content */}
            <div className="max-w-2xl xl:-mt-20 relative z-[5]">
              <motion.div
                className="inline-block px-3 py-1.5 md:px-4 md:py-2 mb-4 md:mb-6 rounded-full bg-max/10 text-max/80 text-sm"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Case Study
              </motion.div>

              <motion.h1
                className="mb-4 text-3xl font-bold md:mb-6 md:text-4xl lg:text-7xl text-max"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {caseStudy.name}
              </motion.h1>

              <motion.p
                className="mb-8 max-w-2xl text-lg md:mb-12 md:text-xl lg:text-2xl text-max/80"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {caseStudy.overview}
              </motion.p>

              {/* Project Duration / Role */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4 mb-8 md:gap-8 md:mb-12"
              >
                <div className="flex items-center space-x-2 text-sm text-max/70 md:text-base">
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-max/20" />
                  <span>{caseStudy.myRole.split('\n')[0]}</span>
                </div>
                {caseStudy.liveDemo && (
                  <a
                    href={caseStudy.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-sm transition-colors text-max/70 hover:text-max group md:text-base"
                  >
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-max/20" />
                    <span>Visit Live Site</span>
                    <FaArrowUpRightFromSquare className="w-2.5 h-2.5 md:w-3 md:h-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                )}
              </motion.div>

              {/* Stats */}
              {/* {caseStudy.stats && caseStudy.stats.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="grid grid-cols-3 gap-4 md:gap-8"
                >
                  {caseStudy.stats.map((stat, index) => (
                    <div key={index} className="flex flex-col items-center">
                      {stat.icon === 'chart' && (
                        <FaChartLine className="mb-2 text-xl md:mb-3 md:text-2xl text-max/90" />
                      )}
                      {stat.icon === 'users' && (
                        <FaUsers className="mb-2 text-xl md:mb-3 md:text-2xl text-max/90" />
                      )}
                      {stat.icon === 'facebook' && (
                        <FaFacebook className="mb-2 text-xl md:mb-3 md:text-2xl text-max/90" />
                      )}
                      {stat.icon === 'code' && (
                        <FaCode className="mb-2 text-xl md:mb-3 md:text-2xl text-max/90" />
                      )}
                      {stat.icon === 'star' && (
                        <FaStar className="mb-2 text-xl md:mb-3 md:text-2xl text-max/90" />
                      )}
                      {stat.icon === 'speed' && (
                        <FaBolt className="mb-2 text-xl md:mb-3 md:text-2xl text-max/90" />
                      )}
                      <div className="text-2xl font-bold md:text-3xl text-max">
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </motion.div>
              )} */}
            </div>

            {/* Right Column - Image */}
            <motion.div
              className="relative lg:h-[500px] rounded-2xl overflow-hidden group z-[5] mb-32 md:mb-48"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              {/* Mobile Design */}
              <div className="block lg:hidden">
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
                  {/* Background Glow Effect */}
                  <motion.div
                    className={cn(
                      'absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500',
                      'hidden lg:block',
                      theme === 'dark'
                        ? 'bg-max/20 blur-2xl'
                        : 'bg-max/10 blur-2xl',
                    )}
                    animate={{
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />

                  {/* Main Image */}
                  <img
                    src={landingPageImage}
                    alt="Landing Page"
                    className="object-cover w-full h-full rounded-2xl transition-transform duration-300 transform group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t to-transparent from-min/60" />

                  {/* Visit Site Button - Mobile */}
                  <div className="absolute inset-x-4 bottom-4">
                    <a
                      href={caseStudy.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center items-center px-6 py-3 space-x-2 w-full text-sm font-medium rounded-full backdrop-blur-md transition-transform duration-300 bg-max/90 text-min hover:scale-105"
                    >
                      <span>Visit Live Site</span>
                      <FaArrowUpRightFromSquare className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Desktop Design */}
              <div className="hidden h-full lg:block">
                {/* Background Glow Effect */}
                <motion.div
                  className={cn(
                    'absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500',
                    theme === 'dark'
                      ? 'bg-max/20 blur-2xl'
                      : 'bg-max/10 blur-2xl',
                  )}
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                {/* Background Image - Blurred */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={landingPageImage}
                    alt=""
                    className="w-full h-full object-cover brightness-[0.7] lg:blur-md lg:scale-105"
                  />
                  <div
                    className={cn(
                      'absolute inset-0',
                      theme === 'dark' ? 'bg-min/60' : 'bg-min/50',
                    )}
                  />
                </div>

                {/* Main Image Container - Removed parallax effect */}
                <motion.div
                  className="overflow-hidden relative h-full rounded-2xl cursor-pointer bg-min/20 group z-[1]"
                  onClick={() => window.open(caseStudy.liveDemo, '_blank')}
                >
                  {/* Image Frame */}
                  <div className="overflow-hidden absolute inset-4 rounded-xl border border-max/10">
                    {/* Image with Hover Effect */}
                    <motion.div
                      className="relative w-full h-full transform group-hover:scale-[1.02] transition-transform duration-500 flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 25,
                      }}
                    >
                      <img
                        src={landingPageImage}
                        alt="Landing Page"
                        className="object-contain w-auto max-w-full h-auto max-h-full rounded-xl shadow-2xl"
                      />

                      {/* Subtle Overlay Gradients */}
                      <div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-50 from-min/10" />
                      <div className="absolute inset-0 bg-gradient-to-l to-transparent opacity-50 from-min/10" />

                      {/* Visit Site Overlay */}
                      <div className="flex absolute inset-0 justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div
                          className={cn(
                            'px-6 py-3 rounded-full backdrop-blur-md flex items-center space-x-3 transform scale-90 group-hover:scale-100 transition-all duration-300',
                            theme === 'dark' ? 'bg-max/20' : 'bg-min shadow-lg',
                          )}
                        >
                          <span className="text-lg font-medium">
                            Visit {caseStudy.name}
                          </span>
                          <FaArrowUpRightFromSquare className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Interactive Elements */}
                  <motion.div
                    className="flex absolute right-8 bottom-8 left-8 justify-between items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                  >
                    {/* View Full Image Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedImageIndex(0)
                        setModalOpen(true)
                      }}
                      className={cn(
                        'px-4 py-2 rounded-full backdrop-blur-md flex items-center space-x-2 transition-all duration-300 hover:scale-105',
                        theme === 'dark'
                          ? 'bg-max/10 hover:bg-max/20'
                          : 'bg-min/80 hover:bg-min shadow-lg',
                      )}
                    >
                      <span className="text-sm font-medium">
                        View Full Image
                      </span>
                      <FaArrowUpRightFromSquare className="w-4 h-4" />
                    </button>

                    {/* Visit Site Button */}
                    {caseStudy.liveDemo && (
                      <a
                        href={caseStudy.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={cn(
                          'px-4 py-2 rounded-full backdrop-blur-md flex items-center space-x-2 transition-all duration-300 hover:scale-105',
                          theme === 'dark'
                            ? 'bg-max/10 hover:bg-max/20'
                            : 'bg-min/80 hover:bg-min shadow-lg',
                        )}
                      >
                        <span className="text-sm font-medium">Visit Site</span>
                        <FaArrowUpRightFromSquare className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </a>
                    )}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex absolute bottom-8 left-1/2 flex-col items-center transform -translate-x-1/2 z-[5]"
          >
            <div className="mb-2 text-sm text-max/70">Scroll to explore</div>
            <div className="w-[2px] h-8 bg-max/20 relative overflow-hidden">
              <motion.div
                className="w-full h-full bg-max/80"
                animate={{
                  y: ['-100%', '100%'],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: 'linear',
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={cn(
          'relative py-8 md:py-16',
          theme === 'dark' ? 'bg-max/[0.02]' : 'bg-max/[0.03]',
        )}
        style={getMainPattern()}
      >
        {/* Edge Shadows - Fixed */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          {/* Top shadow */}
          <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b to-transparent from-min/60 via-min/10 via-min/5" />
          {/* Bottom shadow */}
          <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t to-transparent from-min/60 via-min/10 via-min/5" />
          {/* Left shadow */}
          <div className="absolute inset-y-0 left-0 w-96 bg-gradient-to-r to-transparent from-min/60 via-min/10 via-min/5" />
          {/* Right shadow */}
          <div className="absolute inset-y-0 right-0 w-96 bg-gradient-to-l to-transparent from-min/60 via-min/10 via-min/5" />
        </div>

        <div className="container relative z-10 px-4 mx-auto max-w-4xl">
          <div className="grid gap-8 md:gap-16">
            {/* Role Section */}
            <motion.section
              initial="hidden"
              animate={isLoaded ? 'visible' : 'hidden'}
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              className={cn(
                'space-y-4 p-6 md:p-8 rounded-xl md:rounded-2xl relative',
                theme === 'dark'
                  ? 'bg-min/90 backdrop-blur-xl'
                  : 'bg-min/95 backdrop-blur-xl shadow-xl',
                'border border-max/5',
              )}
              style={getCardPattern()}
            >
              {/* Section Accent */}
              <div className="absolute -left-1 top-6 bottom-6 w-1 bg-gradient-to-b rounded-full md:top-8 md:bottom-8 from-pink-500/50 via-purple-500/50 to-blue-500/50" />

              <h2 className="flex items-center space-x-3 text-xl font-semibold md:text-2xl">
                <span className="flex justify-center items-center w-7 h-7 bg-gradient-to-br rounded-lg md:w-8 md:h-8 from-pink-500/20 to-purple-500/20">
                  <FaUsers className="text-lg text-max/80 md:text-xl" />
                </span>
                <span>My Role</span>
              </h2>
              <div className="max-w-none prose prose-invert">
                {caseStudy.myRole.split('\n').map((line, i) => (
                  <p key={i} className="text-sm md:text-base text-max/80">
                    {line}
                  </p>
                ))}
              </div>
            </motion.section>

            {/* Problem Statement */}
            <motion.section
              initial="hidden"
              animate={isLoaded ? 'visible' : 'hidden'}
              variants={fadeInUp}
              transition={{ delay: 0.5 }}
              className={cn(
                'space-y-4 p-8 rounded-2xl relative',
                theme === 'dark'
                  ? 'bg-min/90 backdrop-blur-xl'
                  : 'bg-min/95 backdrop-blur-xl shadow-xl',
                'border border-max/5',
              )}
              style={getCardPattern()}
            >
              {/* Section Accent */}
              <div className="absolute -left-1 top-8 bottom-8 w-1 bg-gradient-to-b rounded-full from-blue-500/50 via-purple-500/50 to-pink-500/50" />

              <h2 className="flex items-center space-x-3 text-2xl font-semibold">
                <span className="flex justify-center items-center w-8 h-8 bg-gradient-to-br rounded-lg from-blue-500/20 to-purple-500/20">
                  <FaLightbulb className="text-max/80" />
                </span>
                <span>Problem Statement</span>
              </h2>
              <p className="text-max/80">{caseStudy.problemStatement}</p>
            </motion.section>

            {/* Key Features */}
            <motion.section
              initial="hidden"
              animate={isLoaded ? 'visible' : 'hidden'}
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
              className={cn(
                'space-y-6 p-8 rounded-2xl relative',
                theme === 'dark'
                  ? 'bg-min/90 backdrop-blur-xl'
                  : 'bg-min/95 backdrop-blur-xl shadow-xl',
                'border border-max/5',
              )}
              style={getCardPattern()}
            >
              {/* Section Accent */}
              <div className="absolute -left-1 top-8 bottom-8 w-1 bg-gradient-to-b rounded-full from-purple-500/50 via-pink-500/50 to-blue-500/50" />

              <h2 className="flex items-center space-x-3 text-2xl font-semibold">
                <span className="flex justify-center items-center w-8 h-8 bg-gradient-to-br rounded-lg from-purple-500/20 to-pink-500/20">
                  <FaPuzzlePiece className="text-max/80" />
                </span>
                <span>Key Features & Solutions</span>
              </h2>
              <div className="grid gap-4">
                {caseStudy.keyFeatures.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial="hidden"
                    animate={isLoaded ? 'visible' : 'hidden'}
                    variants={fadeInUp}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className={cn(
                      'p-6 rounded-xl relative overflow-hidden group',
                      theme === 'dark' ? 'bg-max/5' : 'bg-max/10',
                      'hover:scale-[1.02] transition-transform duration-300',
                    )}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 from-pink-500/10 to-purple-500/10 group-hover:opacity-100" />
                    <p className="relative z-10 text-max/90">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Technologies */}
            <motion.section
              initial="hidden"
              animate={isLoaded ? 'visible' : 'hidden'}
              variants={fadeInUp}
              transition={{ delay: 0.7 }}
              className={cn(
                'space-y-6 p-8 rounded-2xl relative',
                theme === 'dark'
                  ? 'bg-min/90 backdrop-blur-xl'
                  : 'bg-min/95 backdrop-blur-xl shadow-xl',
                'border border-max/5',
              )}
              style={getCardPattern()}
            >
              {/* Section Accent */}
              <div className="absolute -left-1 top-8 bottom-8 w-1 bg-gradient-to-b rounded-full from-blue-500/50 via-purple-500/50 to-pink-500/50" />

              <h2 className="flex items-center space-x-3 text-2xl font-semibold">
                <span className="flex justify-center items-center w-8 h-8 bg-gradient-to-br rounded-lg from-blue-500/20 to-purple-500/20">
                  <FaCode className="text-max/80" />
                </span>
                <span>Technologies Used</span>
              </h2>

              <div className="grid gap-8 mt-8">
                {caseStudy.technologies.map(
                  (category: TechnologyCategory, categoryIndex) => (
                    <div key={categoryIndex} className="space-y-4">
                      <div className="pb-2 mb-2 text-sm font-medium tracking-wider uppercase border-b text-max/60 border-max/10">
                        {category.name}
                      </div>
                      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
                        {category.items.map((tech, techIndex) => (
                          <TechItem
                            key={techIndex}
                            icon={getTechIcon(tech.icon)}
                            name={tech.name}
                          />
                        ))}
                      </div>
                    </div>
                  ),
                )}
              </div>
            </motion.section>

            {/* Challenges */}
            <motion.section
              initial="hidden"
              animate={isLoaded ? 'visible' : 'hidden'}
              variants={fadeInUp}
              transition={{ delay: 0.8 }}
              className={cn(
                'space-y-4 p-8 rounded-2xl relative',
                theme === 'dark'
                  ? 'bg-min/90 backdrop-blur-xl'
                  : 'bg-min/95 backdrop-blur-xl shadow-xl',
                'border border-max/5',
              )}
              style={getCardPattern()}
            >
              {/* Section Accent */}
              <div className="absolute -left-1 top-8 bottom-8 w-1 bg-gradient-to-b rounded-full from-purple-500/50 via-pink-500/50 to-blue-500/50" />

              <h2 className="flex items-center space-x-3 text-2xl font-semibold">
                <span className="flex justify-center items-center w-8 h-8 bg-gradient-to-br rounded-lg from-purple-500/20 to-pink-500/20">
                  <FaMountain className="text-max/80" />
                </span>
                <span>Challenges & Solutions</span>
              </h2>

              <div className="mt-8 space-y-8">
                {caseStudy.challenges.map((challenge, i) => {
                  const parts = challenge.split(':')
                  const title = parts[0] || challenge
                  const details = parts[1]?.split('->') || []
                  const challengeText = details[0]?.trim() || challenge
                  const solution =
                    details[1]?.trim() || 'Solution implemented successfully'

                  return (
                    <motion.div
                      key={i}
                      initial="hidden"
                      animate={isLoaded ? 'visible' : 'hidden'}
                      variants={fadeInUp}
                      transition={{ delay: 0.9 + i * 0.1 }}
                      className="relative pl-12"
                    >
                      {/* Timeline Line */}
                      <div className="absolute left-[11px] top-14 bottom-0 w-[2px] bg-gradient-to-b from-max/20 to-transparent" />

                      {/* Timeline Dot */}
                      <div className="flex absolute left-0 top-2 justify-center items-center">
                        <div className="w-6 h-6 bg-gradient-to-br rounded-full backdrop-blur-sm from-purple-500/20 to-pink-500/20" />
                        <div className="absolute w-2 h-2 rounded-full bg-max/80" />
                      </div>

                      {/* Content */}
                      <div className="relative">
                        <h3 className="mb-4 text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-max to-max/80">
                          {title}
                        </h3>

                        <div className="space-y-4">
                          {/* Challenge */}
                          <div className="relative pl-6">
                            <div className="absolute left-0 top-[0.6rem] w-1.5 h-1.5 rounded-full bg-red-400/60" />
                            <div>
                              <div className="mb-1 text-sm font-medium text-max/60">
                                Challenge
                              </div>
                              <p className="text-max/80">{challengeText}</p>
                            </div>
                          </div>

                          {/* Solution */}
                          <div className="relative pl-6">
                            <div className="absolute left-0 top-[0.6rem] w-1.5 h-1.5 rounded-full bg-green-400/60" />
                            <div>
                              <div className="mb-1 text-sm font-medium text-max/60">
                                Solution
                              </div>
                              <p className="text-max/80">{solution}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.section>

            {/* Results */}
            <motion.section
              initial="hidden"
              animate={isLoaded ? 'visible' : 'hidden'}
              variants={fadeInUp}
              transition={{ delay: 0.9 }}
              className={cn(
                'space-y-4 p-8 rounded-2xl relative',
                theme === 'dark'
                  ? 'bg-min/90 backdrop-blur-xl'
                  : 'bg-min/95 backdrop-blur-xl shadow-xl',
                'border border-max/5',
              )}
              style={getCardPattern()}
            >
              {/* Section Accent */}
              <div className="absolute -left-1 top-8 bottom-8 w-1 bg-gradient-to-b rounded-full from-blue-500/50 via-purple-500/50 to-pink-500/50" />

              <h2 className="flex items-center space-x-3 text-2xl font-semibold">
                <span className="flex justify-center items-center w-8 h-8 bg-gradient-to-br rounded-lg from-blue-500/20 to-purple-500/20">
                  <FaRocket className="text-max/80" />
                </span>
                <span>Results & Impact</span>
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {caseStudy.results.map((result, i) => (
                  <motion.div
                    key={i}
                    initial="hidden"
                    animate={isLoaded ? 'visible' : 'hidden'}
                    variants={fadeInUp}
                    transition={{ delay: 1 + i * 0.1 }}
                    className={cn(
                      'p-6 rounded-xl relative overflow-hidden group',
                      theme === 'dark' ? 'bg-max/5' : 'bg-max/10',
                      'hover:scale-[1.02] transition-transform duration-300',
                    )}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 from-blue-500/10 to-purple-500/10 group-hover:opacity-100" />
                    <p className="relative z-10 text-max/90">{result}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Screenshots */}
            {caseStudy.screenshots && caseStudy.screenshots.length > 0 && (
              <motion.section
                initial="hidden"
                animate={isLoaded ? 'visible' : 'hidden'}
                variants={fadeInUp}
                transition={{ delay: 1 }}
                className={cn(
                  'space-y-8 p-8 rounded-2xl relative',
                  theme === 'dark'
                    ? 'bg-min/90 backdrop-blur-xl'
                    : 'bg-min/95 backdrop-blur-xl shadow-xl',
                  'border border-max/5',
                )}
                style={getCardPattern()}
              >
                {/* Section Accent */}
                <div className="absolute -left-1 top-8 bottom-8 w-1 bg-gradient-to-b rounded-full from-pink-500/50 via-purple-500/50 to-blue-500/50" />

                <h2 className="flex items-center space-x-3 text-2xl font-semibold">
                  <span className="flex justify-center items-center w-8 h-8 bg-gradient-to-br rounded-lg from-pink-500/20 to-purple-500/20">
                    <FaLayerGroup className="text-max/80" />
                  </span>
                  <span>Key Pages & Features</span>
                </h2>
                <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
                  {caseStudy.screenshots.map((screenshot, index) => (
                    <motion.div
                      key={screenshot.src}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="overflow-hidden relative rounded-lg cursor-pointer group aspect-video"
                      onClick={() => {
                        setSelectedImageIndex(index)
                        setModalOpen(true)
                      }}
                    >
                      <img
                        src={screenshot.src}
                        alt={screenshot.description}
                        className="object-cover object-top w-full h-full transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-300 from-black/60 group-hover:opacity-100">
                        <div className="absolute right-4 bottom-4">
                          <div className="text-sm font-medium text-white truncate">
                            {screenshot.description}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* What I Learned */}
            <motion.section
              initial="hidden"
              animate={isLoaded ? 'visible' : 'hidden'}
              variants={fadeInUp}
              transition={{ delay: 1.1 }}
              className={cn(
                'space-y-4 p-8 rounded-2xl relative',
                theme === 'dark'
                  ? 'bg-min/90 backdrop-blur-xl'
                  : 'bg-min/95 backdrop-blur-xl shadow-xl',
                'border border-max/5',
              )}
              style={getCardPattern()}
            >
              {/* Section Accent */}
              <div className="absolute -left-1 top-8 bottom-8 w-1 bg-gradient-to-b rounded-full from-purple-500/50 via-blue-500/50 to-pink-500/50" />

              <h2 className="flex items-center space-x-3 text-2xl font-semibold">
                <span className="flex justify-center items-center w-8 h-8 bg-gradient-to-br rounded-lg from-purple-500/20 to-blue-500/20">
                  <FaGraduationCap className="text-max/80" />
                </span>
                <span>What I Learned</span>
              </h2>
              <div className="space-y-3">
                {caseStudy.whatILearned.map((item, i) => (
                  <motion.div
                    key={i}
                    initial="hidden"
                    animate={isLoaded ? 'visible' : 'hidden'}
                    variants={fadeInUp}
                    transition={{ delay: 1.2 + i * 0.1 }}
                    className="flex items-start space-x-2"
                  >
                    <div className="mt-2 w-2 h-2 rounded-full bg-max/50" />
                    <p className="flex-1 text-max/80">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Final Call to Action Section */}
            <motion.section
              initial="hidden"
              animate={isLoaded ? 'visible' : 'hidden'}
              variants={fadeInUp}
              transition={{ delay: 1.2 }}
              className={cn(
                'mt-12 md:mt-24 p-8 md:p-16 rounded-xl md:rounded-2xl relative overflow-hidden',
                theme === 'dark'
                  ? 'bg-min/90 backdrop-blur-xl'
                  : 'bg-min/95 backdrop-blur-xl shadow-xl',
                'border border-max/5',
              )}
            >
              <div className="relative z-10 text-center">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 }}
                  className="mb-4 text-2xl font-bold md:mb-6 md:text-4xl"
                >
                  {caseStudy.callToAction?.title ||
                    `Ready to Experience ${caseStudy.name}?`}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 }}
                  className="mx-auto mb-8 max-w-2xl text-base md:mb-12 md:text-lg text-max/80"
                >
                  {caseStudy.callToAction?.description ||
                    `Experience ${caseStudy.name} today and discover what makes it special.`}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 }}
                  className="flex flex-col gap-4 justify-center items-stretch sm:flex-row md:gap-6 sm:items-center"
                >
                  {caseStudy.liveDemo && (
                    <a
                      href={caseStudy.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center items-center px-6 py-3 space-x-3 text-base font-semibold rounded-full transition-all duration-300 transform md:px-8 md:py-4 md:text-lg group bg-max/90 text-min hover:bg-max/80 hover:scale-105"
                    >
                      <span>Visit Live Site</span>
                      <FaArrowUpRightFromSquare className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  )}

                  <Link
                    to="/"
                    className="flex justify-center items-center px-6 py-3 space-x-3 text-base font-semibold rounded-full transition-all duration-300 transform md:px-8 md:py-4 md:text-lg group bg-max/10 text-max hover:bg-max/20 hover:scale-105"
                  >
                    <FaArrowLeft className="transition-transform group-hover:-translate-x-1" />
                    <span>Back to Portfolio</span>
                  </Link>
                </motion.div>
              </div>
            </motion.section>

            {/* Project Navigation */}
            <motion.section
              initial="hidden"
              animate={isLoaded ? 'visible' : 'hidden'}
              variants={fadeInUp}
              transition={{ delay: 1.3 }}
              className="grid gap-4 mt-8 md:gap-6 sm:grid-cols-2"
            >
              {/* Previous Project */}
              {caseStudy.navigation?.previous && (
                <Link
                  to={`/casestudy/${caseStudy.navigation.previous.slug}`}
                  className={cn(
                    'group p-8 rounded-2xl relative overflow-hidden transition-all duration-300 hover:scale-[1.02]',
                    theme === 'dark'
                      ? 'bg-min/90 backdrop-blur-xl'
                      : 'bg-min/95 backdrop-blur-xl shadow-xl',
                    'border border-max/5',
                  )}
                >
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 from-pink-500/10 to-purple-500/10 group-hover:opacity-100" />
                  <div className="relative z-10">
                    <div className="mb-2 text-sm font-medium text-max/60">
                      Previous Project
                    </div>
                    <div className="flex items-center space-x-3 text-xl font-semibold">
                      <FaArrowLeft className="transition-transform group-hover:-translate-x-1" />
                      <span>{caseStudy.navigation.previous.name}</span>
                    </div>
                  </div>
                </Link>
              )}

              {/* Next Project */}
              {caseStudy.navigation?.next && (
                <Link
                  to={`/casestudy/${caseStudy.navigation.next.slug}`}
                  className={cn(
                    'group p-8 rounded-2xl relative overflow-hidden transition-all duration-300 hover:scale-[1.02]',
                    theme === 'dark'
                      ? 'bg-min/90 backdrop-blur-xl'
                      : 'bg-min/95 backdrop-blur-xl shadow-xl',
                    'border border-max/5',
                  )}
                >
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 from-purple-500/10 to-pink-500/10 group-hover:opacity-100" />
                  <div className="relative z-10">
                    <div className="mb-2 text-sm font-medium text-max/60">
                      Next Project
                    </div>
                    <div className="flex justify-end items-center space-x-3 text-xl font-semibold">
                      <span>{caseStudy.navigation.next.name}</span>
                      <FaArrowLeft className="transition-transform rotate-180 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              )}
            </motion.section>

            {/* Footer */}
            <motion.footer
              initial="hidden"
              animate={isLoaded ? 'visible' : 'hidden'}
              variants={fadeInUp}
              transition={{ delay: 1.4 }}
              className="py-8 mt-24 text-center text-max/60"
            >
              <p>© 2024 Portfolio. All rights reserved.</p>
            </motion.footer>
          </div>
        </div>
      </div>

      <ImageModal
        images={caseStudy.screenshots || []}
        initialIndex={selectedImageIndex}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  )
}

export default CaseStudy
