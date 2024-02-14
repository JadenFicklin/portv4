import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GoArrowLeft } from 'react-icons/go'
import { projectArchiveArray } from '~/data/projectArchive'
import { IoMdArrowForward } from 'react-icons/io'
import { cn } from '~/utils/cn'

export const Archive = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="w-full min-h-screen bg-opacity-10 bg-max text-max">
      <div className="min-h-screen px-6 py-12 mx-auto font-sans max-w-screen-xxl md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:py-24">
          <Link to="/" className="flex py-2 group">
            <GoArrowLeft className="relative left-0 mt-1 duration-200 fill-green group-hover:-left-3" />
            <p className="ml-1 font-medium ">Jaden Ficklin</p>
          </Link>
          <h2 className="text-4xl font-bold sm:text-5xl text-medium">
            All Projects
          </h2>

          <table className="w-full mt-12 text-left border-collapse">
            <thead className="sticky top-0 z-10 px-6 py-5 border-b text-max border-max border-opacity-10 backdrop-blur">
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
              {projectArchiveArray.map((item) => (
                <tr className="border-b t border-max border-opacity-80 last:border-none">
                  <td className="py-4 pr-4 text-sm align-top">
                    <div className="translate-y-px">{item.year}</div>
                  </td>
                  <td className="py-4 pr-4 font-semibold leading-snug align-top">
                    <p className="hidden text-base font-medium leading-tight sm:block">
                      {item.project}
                    </p>
                    <a
                      className="inline-flex items-baseline sm:hidden group"
                      href={item.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Emerson Collective (opens in a new tab)"
                    >
                      <span className="flex text-base font-medium leading-tight hover:text-accent ">
                        {item.project}
                        <IoMdArrowForward
                          className={cn(
                            '-translate-y-[2px] rotate-[-45deg] relative -bottom-[6px] left-1 group-hover:bottom-[-3px] group-hover:left-[8px] duration-300 group-hover:fill-green',
                          )}
                        />
                      </span>
                    </a>
                  </td>
                  <td className="hidden py-4 text-sm align-top lg:table-cell">
                    {item.madeAt}
                  </td>
                  <td className="hidden py-3 pr-4 align-top lg:table-cell">
                    <ul className="flex flex-wrap gap-1 ">
                      {item.builtWith.map((item) => (
                        <div className="px-3 py-1 text-xs bg-black rounded-full text-min">
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
                      className="relative flex mb-1 text-base font-medium text-light group-hover:text-blue-500"
                    >
                      {item.link}{' '}
                      <IoMdArrowForward
                        className={cn(
                          'rotate-[-45deg] relative -bottom-[6px] left-1 group-hover:bottom-[-3px] group-hover:left-[8px] duration-300 group-hover:fill-green',
                        )}
                      />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
