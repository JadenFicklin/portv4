import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GoArrowLeft } from 'react-icons/go'
import { projectArchiveArray } from '~/data/projectArchive'
import { IoMdArrowForward } from 'react-icons/io'
import { cn } from '~/utils/cn'

type ProjectProps = {
  year: number
  project: string
  madeAt: string
  builtWith: string[]
  link: string
  image: string
}

export const Archive = () => {
  const [currentImage, setCurrentImage] = useState('')
  const [imageLoading, setImageLoading] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (currentImage) {
      const img = new Image()
      img.onload = () => {
        setImageLoading(false) // Image is preloaded and ready to be displayed
      }
      img.src = currentImage
    }
  }, [currentImage])

  const handleMouseEnter = (image: string) => {
    setImageLoading(true) // Indicate that a new image is loading
    setCurrentImage(image) // Start loading the new image
  }

  return (
    <>
      {currentImage && !imageLoading && (
        <img
          src={currentImage}
          className="fixed w-full h-screen transition-opacity duration-1000 ease-in-out opacity-0 -z-20"
          style={{ animation: 'fadeIn 1s forwards' }}
          alt="Project Preview"
        />
      )}
      {/* <div className="fixed w-full h-screen bg-black -z-30"></div> */}
      <div className="fixed w-full h-screen bg-lightest -z-10"></div>
      <div
        className={cn(
          'w-full min-h-screen text-max duration-500',
          currentImage && 'bg-lightest duration-500',
        )}
      >
        <div className="min-h-screen px-6 py-12 mx-auto font-sans shadow-lg bg-min max-w-screen-xxl md:px-12 md:py-20 lg:px-24 lg:py-0 backdrop-blur-lg">
          <div className="lg:py-24">
            <Link to="/" className="flex py-2 group">
              <GoArrowLeft className="relative left-0 mt-1 duration-200 fill-green group-hover:-left-3" />
              <p className="ml-1 font-medium ">Jaden Ficklin</p>
            </Link>
            <h2 className="text-4xl font-bold sm:text-5xl text-medium">
              All Projects
            </h2>

            <table className="w-full mt-12 text-left border-collapse">
              <thead className="px-6 py-5 border-b text-max border-max">
                <th className="py-4 pr-8 text-sm font-semibold">Year</th>
                <th className="py-4 pr-8 text-sm font-semibold">Project</th>
                <th className="hidden py-4 pr-8 text-sm font-semibold lg:table-cell">
                  Made at
                </th>
                <th className="hidden py-4 pr-8 text-sm font-semibold lg:table-cell">
                  Built with
                </th>
                <th className="hidden py-4 pr-8 text-sm font-semibold sm:table-cell">
                  Link
                </th>
              </thead>
              <tbody>
                {projectArchiveArray.map(
                  (item: ProjectProps, index: number) => (
                    <tr
                      className="duration-300 border-b border-max border-opacity-30 group hover:bg-archive"
                      key={index}
                      onMouseEnter={() => handleMouseEnter(item.image)}
                      onMouseLeave={() => setCurrentImage('')}
                    >
                      <td className="py-4 pr-4 text-sm align-top md:translate-y-1">
                        <div className="translate-y-px group-hover:text-custom">
                          {item.year}
                        </div>
                      </td>
                      <td className="py-4 pr-4 font-semibold leading-snug align-top">
                        <p className="hidden text-base font-medium leading-tight translate-y-1 sm:block group-hover:text-custom">
                          {item.project}
                        </p>
                        <a
                          className="inline-flex items-baseline sm:hidden group"
                          href={item.link}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label="Emerson Collective (opens in a new tab)"
                        >
                          <span className="flex text-base font-medium leading-tight">
                            {item.project}
                            <IoMdArrowForward
                              className={cn(
                                '-translate-y-[2px] rotate-[-45deg] relative -bottom-[6px] left-1 group-hover:bottom-[-3px] group-hover:left-[8px] duration-300 ',
                              )}
                            />
                          </span>
                        </a>
                      </td>
                      <td className="hidden py-4 text-sm align-top translate-y-1 group-hover:text-custom lg:table-cell">
                        {item.madeAt}
                      </td>
                      <td className="hidden py-3 pr-4 align-top lg:table-cell">
                        <ul className="flex flex-wrap gap-1 ">
                          {item.builtWith.map((item) => (
                            <div className="px-3 py-1 text-xs translate-y-1.5 bg-bubble rounded-full text-custom">
                              {item}
                            </div>
                          ))}
                        </ul>
                      </td>
                      <td className="hidden py-4 align-top cursor-pointer sm:table-cell group">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          className="relative flex mb-1 text-base font-medium text-light group-hover:text-hoverAccent"
                        >
                          {item.link}{' '}
                          <IoMdArrowForward
                            className={cn(
                              'rotate-[-45deg] relative -bottom-[6px] left-1 group-hover:bottom-[-3px] group-hover:left-[8px] duration-300 group-hover:fill-hoverAccent',
                            )}
                          />
                        </a>
                      </td>
                    </tr>
                  ),
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
