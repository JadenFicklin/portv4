import { useEffect, useState, useRef, useMemo } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { GoArrowLeft } from 'react-icons/go'
import { projectArchiveArray } from '~/data/projectArchive'
import { IoMdArrowForward } from 'react-icons/io'
import { BsGrid, BsTable } from 'react-icons/bs'
import { HiChevronDown } from 'react-icons/hi'
import { cn } from '~/utils/cn'
import { motion, AnimatePresence } from 'framer-motion'
import { caseStudies } from '~/data/caseStudies'
import { Nav } from '~/components/Nav'
import { ImagePreloader } from '~/utils/ImagePreloader'
import { scrollToTop } from '~/utils/scrollUtils'

type ProjectProps = {
  year: number
  project: string
  madeAt: string
  builtWith: string[]
  link: string
  image: string
  description?: string
}

type ViewMode = 'table' | 'grid'

export const Archive = () => {
  console.log('Archive component rendered')
  const [viewMode, setViewMode] = useState<ViewMode>('table')
  const [expandedProject, setExpandedProject] = useState<string | null>(null)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const navigate = useNavigate()
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  const images = useMemo(() => {
    const arr = projectArchiveArray.map((project) => project.image)
    console.log('Memoized images array created:', arr)
    return arr
  }, [])

  // Preload images
  useEffect(() => {
    console.log('Preloading images...')
    const imagePromises = projectArchiveArray.map((project) => {
      return new Promise((resolve) => {
        const img = new Image()
        img.src = project.image
        img.onload = resolve
        img.onerror = resolve // Resolve even on error to continue loading
      })
    })

    Promise.all(imagePromises).then(() => {
      setImagesLoaded(true)
      console.log('All images loaded!')
    })
  }, [])

  useEffect(() => {
    console.log('Archive mounted, scrolling to top')
    scrollToTop(true) // Scroll to top immediately when component mounts
  }, [])

  const handleBackClick = () => {
    console.log('Back button clicked')
    navigate(-1) // Go back to previous route
  }

  const toggleExpand = (projectName: string) => {
    setExpandedProject((prev) => {
      const newValue = prev === projectName ? null : projectName
      console.log('toggleExpand:', { prev, projectName, newValue })
      return newValue
    })
  }

  const hasCaseStudy = (projectName: string) => {
    const normalizedProjectName = projectName
      .toLowerCase()
      .trim()
      .replace(/[&]/g, 'and')
      .replace(/\s+/g, ' ') // normalize spaces
      .replace(/construction/gi, '') // remove 'construction' since it's optional

    console.log('Checking case study for:', {
      originalName: projectName,
      normalizedName: normalizedProjectName,
    })

    console.log(
      'Available case studies:',
      caseStudies.map((study) => ({
        originalName: study.name,
        normalizedName: study.name
          .toLowerCase()
          .trim()
          .replace(/[&]/g, 'and')
          .replace(/\s+/g, ' ')
          .replace(/construction/gi, ''),
        slug: study.slug,
      })),
    )

    const hasStudy = caseStudies.some((study) => {
      const normalizedStudyName = study.name
        .toLowerCase()
        .trim()
        .replace(/[&]/g, 'and')
        .replace(/\s+/g, ' ')
        .replace(/construction/gi, '')

      const projectContainsStudy =
        normalizedProjectName.includes(normalizedStudyName)
      const studyContainsProject = normalizedStudyName.includes(
        normalizedProjectName,
      )

      console.log('Comparing:', {
        projectName: normalizedProjectName,
        studyName: normalizedStudyName,
        projectContainsStudy,
        studyContainsProject,
      })

      return projectContainsStudy || studyContainsProject
    })

    console.log('Has case study:', hasStudy)
    return hasStudy
  }

  const getCaseStudySlug = (projectName: string) => {
    const normalizedProjectName = projectName
      .toLowerCase()
      .trim()
      .replace(/[&]/g, 'and')
      .replace(/\s+/g, ' ')
      .replace(/construction/gi, '')

    console.log('Getting slug for:', {
      originalName: projectName,
      normalizedName: normalizedProjectName,
    })

    const study = caseStudies.find((study) => {
      const normalizedStudyName = study.name
        .toLowerCase()
        .trim()
        .replace(/[&]/g, 'and')
        .replace(/\s+/g, ' ')
        .replace(/construction/gi, '')

      const projectContainsStudy =
        normalizedProjectName.includes(normalizedStudyName)
      const studyContainsProject = normalizedStudyName.includes(
        normalizedProjectName,
      )

      console.log('Comparing for slug:', {
        projectName: normalizedProjectName,
        studyName: normalizedStudyName,
        projectContainsStudy,
        studyContainsProject,
        slug: study.slug,
      })

      return projectContainsStudy || studyContainsProject
    })

    console.log('Found study:', study)
    return study?.slug
  }

  const handleProjectClick = (projectName: string, e: React.MouseEvent) => {
    console.log(
      'Card clicked:',
      projectName,
      'event:',
      e.type,
      'target:',
      e.target,
    )
    if (
      (e.target as HTMLElement).closest('a') ||
      (e.target as HTMLElement).closest('button')
    ) {
      console.log('Click was on a link or button, not toggling expand.')
      return
    }
    toggleExpand(projectName)
  }

  // Scroll to center when expanding a card
  useEffect(() => {
    if (expandedProject && cardRefs.current[expandedProject]) {
      // Wait for expand animation to start
      setTimeout(() => {
        cardRefs.current[expandedProject]?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
      }, 120) // 120ms for a natural feel
    }
  }, [expandedProject])

  const ProjectDetails = ({ item }: { item: ProjectProps }) => {
    const isExpanded = expandedProject === item.project

    return (
      <>
        <div className="grid grid-cols-12 gap-2 items-center sm:gap-4">
          <div className="col-span-2 text-xs sm:col-span-1 sm:text-sm text-max/60">
            {item.year}
          </div>
          <div className="col-span-8 sm:col-span-3">
            <p className="text-sm font-medium sm:text-base text-max">
              {item.project}
            </p>
          </div>
          <div className="hidden col-span-2 text-sm sm:block text-max/60">
            {item.madeAt}
          </div>
          <div className="hidden col-span-4 lg:block">
            <div className="flex flex-wrap gap-2">
              {item.builtWith.slice(0, 3).map((tech: string, index: number) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs rounded-full transition-all duration-200 sm:px-3 bg-min/50 text-max/80 hover:bg-min hover:shadow-sm"
                >
                  {tech}
                </span>
              ))}
              {item.builtWith.length > 3 && (
                <span className="px-2 py-1 text-xs sm:px-3 text-max/60">
                  +{item.builtWith.length - 3} more
                </span>
              )}
            </div>
          </div>
          <div className="flex col-span-2 justify-end sm:justify-start">
            <div className="flex gap-4 items-center">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  console.log(
                    'Expand/collapse button clicked for',
                    item.project,
                  )
                  toggleExpand(item.project)
                }}
                className={cn(
                  'p-1.5 sm:p-2 rounded-lg transition-all duration-300 hover:bg-min hover:shadow-sm',
                  isExpanded && 'bg-min shadow-sm',
                )}
              >
                <HiChevronDown
                  className={cn(
                    'w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 text-max/80',
                    isExpanded && 'rotate-180',
                  )}
                />
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: 'auto',
                opacity: 1,
                transition: {
                  height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
                  opacity: { duration: 0.5, ease: 'easeInOut' },
                },
              }}
              exit={{
                height: 0,
                opacity: 0,
                transition: {
                  height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
                  opacity: { duration: 0.3 },
                },
              }}
              className="overflow-hidden"
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.4,
                    ease: [0.04, 0.62, 0.23, 0.98],
                    opacity: { duration: 0.3 },
                  },
                }}
                exit={{
                  y: -10,
                  opacity: 0,
                  transition: {
                    duration: 0.2,
                    ease: [0.36, 0, 0.66, -0.56],
                  },
                }}
                className="px-2 pt-6 pb-4 sm:px-4 sm:pt-8"
              >
                <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
                  {item.image && (
                    <div className="overflow-hidden relative rounded-lg aspect-video bg-max/10 group/image">
                      {/* Glow effect */}
                      <div className="absolute -inset-1 bg-gradient-to-r rounded-lg opacity-0 blur-xl transition-all duration-500 from-hover-accent/30 via-hover-accent/10 to-hover-accent/30 group-hover/image:opacity-100" />

                      {/* Background blur effect */}
                      <div className="absolute inset-0 backdrop-blur-[2px] opacity-0 group-hover/image:opacity-100 transition-all duration-500" />

                      <img
                        src={item.image}
                        alt={item.project}
                        className="relative object-cover w-full h-full transition-all duration-500 group-hover/image:scale-[1.02] z-10"
                      />
                      {/* Hover overlay */}
                      <div
                        onClick={() => window.open(item.link, '_blank')}
                        className="flex absolute inset-0 z-20 justify-center items-center"
                      >
                        <div className="opacity-0 transition-all duration-300 transform scale-95 group-hover/image:opacity-100 group-hover/image:scale-100">
                          <div className="flex gap-2 items-center px-6 py-3 rounded-full border backdrop-blur-md transition-all duration-300 cursor-pointer border-max/10 bg-min/80 text-max hover:bg-min hover:border-max/20 group/button">
                            <span className="text-sm font-medium">
                              Visit Project
                            </span>
                            <IoMdArrowForward className="transition-transform duration-300 group-hover/button:translate-x-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98],
                        delay: 0.1,
                      },
                    }}
                    exit={{
                      opacity: 0,
                      x: -10,
                      transition: {
                        duration: 0.2,
                        ease: [0.36, 0, 0.66, -0.56],
                      },
                    }}
                    className="space-y-4 sm:space-y-6"
                  >
                    <div>
                      <h3 className="mb-2 text-base font-medium sm:text-lg text-max">
                        About
                      </h3>
                      <p className="text-sm leading-relaxed sm:text-base text-max/80">
                        {item.description ||
                          'A creative project showcasing modern web development techniques and best practices.'}
                      </p>
                    </div>
                    <div>
                      <h3 className="mb-2 text-base font-medium sm:text-lg text-max">
                        Technologies
                      </h3>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {item.builtWith.map((tech: string, index: number) => (
                          <span
                            key={index}
                            className="px-2 py-1 text-xs rounded-full transition-all duration-200 sm:px-3 bg-min/50 text-max/80 hover:bg-min hover:shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-2 text-base font-medium sm:text-lg text-max">
                        Links
                      </h3>
                      <div className="flex flex-col gap-2 sm:gap-3">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex gap-2 items-center text-sm transition-colors duration-200 text-max/80 hover:text-hover-accent w-fit group/link"
                        >
                          Visit Project
                          <IoMdArrowForward className="transition-transform duration-300 text-max/80 group-hover/link:text-hover-accent group-hover/link:translate-x-1" />
                        </a>
                        {hasCaseStudy(item.project) && (
                          <Link
                            to={`/casestudy/${getCaseStudySlug(item.project)}`}
                            className="inline-flex gap-2 items-center text-sm transition-colors duration-200 text-max/80 hover:text-hover-accent w-fit group/link"
                          >
                            Case Study
                            <IoMdArrowForward className="transition-transform duration-300 text-max/80 group-hover/link:text-hover-accent group-hover/link:translate-x-1" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    )
  }

  if (!imagesLoaded) {
    console.log('Images not loaded yet, showing spinner')
    return (
      <>
        <Nav />
        <div className="flex fixed inset-0 justify-center items-center bg-min">
          <div className="w-10 h-10 rounded-full border-4 animate-spin border-max/20 border-t-max/80" />
        </div>
      </>
    )
  }

  return (
    <ImagePreloader images={images}>
      <Nav />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.04, 0.62, 0.23, 0.98],
        }}
        className="px-4 pt-28 pb-12 min-h-screen sm:px-6 lg:px-8 sm:pt-32 sm:pb-16 bg-min"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="flex flex-col gap-4 justify-between items-start mb-8 sm:flex-row sm:items-center sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.04, 0.62, 0.23, 0.98],
              delay: 0.2,
            }}
          >
            <div>
              <button
                onClick={handleBackClick}
                className="inline-flex gap-2 items-center mb-4 text-sm transition-colors duration-200 sm:mb-6 text-max/60 hover:text-max/80"
              >
                <GoArrowLeft className="w-4 h-4" />
                Back
              </button>
              <h1 className="text-2xl font-semibold sm:text-3xl lg:text-4xl text-max">
                All Projects
              </h1>
            </div>
            <div className="flex gap-2 items-center p-1 rounded-lg bg-max/5">
              <button
                onClick={() => setViewMode('table')}
                className={cn(
                  'p-2 rounded-lg transition-all duration-300',
                  viewMode === 'table'
                    ? 'bg-min shadow-sm text-max'
                    : 'text-max/60 hover:text-max/80',
                )}
              >
                <BsTable className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={cn(
                  'p-2 rounded-lg transition-all duration-300',
                  viewMode === 'grid'
                    ? 'bg-min shadow-sm text-max'
                    : 'text-max/60 hover:text-max/80',
                )}
              >
                <BsGrid className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            {viewMode === 'table' ? (
              <motion.div
                key="table"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.5,
                  ease: [0.04, 0.62, 0.23, 0.98],
                }}
                className="space-y-2"
              >
                {/* Table header */}
                <div className="hidden grid-cols-12 gap-4 px-6 py-3 text-sm font-medium rounded-lg sm:grid text-max/60 bg-max/5">
                  <div className="col-span-1">Year</div>
                  <div className="col-span-3">Project</div>
                  <div className="hidden col-span-2 sm:block">Made at</div>
                  <div className="hidden col-span-4 lg:block">Built with</div>
                  <div className="col-span-2"></div>
                </div>
                {/* Table content */}
                {projectArchiveArray.map((item, index) => (
                  <motion.div
                    key={item.project}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1,
                    }}
                    ref={(el) => (cardRefs.current[item.project] = el)}
                    onClick={(e) => handleProjectClick(item.project, e)}
                    className={cn(
                      'rounded-lg transition-all duration-300 hover:bg-max/5',
                      expandedProject === item.project
                        ? 'bg-max/5'
                        : 'hover:shadow-sm',
                    )}
                  >
                    <div className="px-6 py-4">
                      <ProjectDetails item={item} />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="grid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.5,
                  ease: [0.04, 0.62, 0.23, 0.98],
                }}
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                {projectArchiveArray.map((item, index) => (
                  <motion.div
                    key={item.project}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1,
                    }}
                    className="p-6 rounded-xl transition-all duration-300 group bg-max/5 hover:shadow-lg"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="mb-1 text-lg font-medium text-max">
                          {item.project}
                        </h3>
                        <p className="text-sm text-max/60">{item.madeAt}</p>
                      </div>
                      <span className="text-sm text-max/60">{item.year}</span>
                    </div>

                    <div className="space-y-4">
                      {item.image && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          className="block overflow-hidden rounded-lg aspect-video bg-max/10"
                        >
                          <img
                            src={item.image}
                            alt={item.project}
                            className="object-cover w-full h-full transition-transform duration-300 cursor-pointer group-hover:scale-105"
                          />
                        </a>
                      )}

                      <p className="text-sm text-max/80 line-clamp-3">
                        {item.description ||
                          'A creative project showcasing modern web development techniques and best practices.'}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {item.builtWith.slice(0, 4).map((tech, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 text-xs rounded-full transition-all duration-200 bg-min/50 text-max/80 hover:bg-min hover:shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                        {item.builtWith.length > 4 && (
                          <span className="px-2 py-1 text-xs text-max/60">
                            +{item.builtWith.length - 4} more
                          </span>
                        )}
                      </div>

                      <div className="flex gap-4 pt-2">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex gap-2 items-center text-sm transition-colors duration-200 text-max/80 hover:text-hover-accent w-fit group/link"
                        >
                          Visit Project
                          <IoMdArrowForward className="transition-transform duration-300 text-max/80 group-hover/link:text-hover-accent group-hover/link:translate-x-1" />
                        </a>
                        {hasCaseStudy(item.project) && (
                          <Link
                            to={`/casestudy/${getCaseStudySlug(item.project)}`}
                            className="inline-flex gap-2 items-center text-sm transition-colors duration-200 text-max/80 hover:text-hover-accent w-fit group/link"
                          >
                            Case Study
                            <IoMdArrowForward className="transition-transform duration-300 text-max/80 group-hover/link:text-hover-accent group-hover/link:translate-x-1" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.main>
    </ImagePreloader>
  )
}
