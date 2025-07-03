import { FaArrowRight } from 'react-icons/fa6'

export const Links = () => {
  return (
    <>
      <div className="flex flex-col flex-wrap max-w-[900px] md:ml-12 py-10">
        <a
          href="https://github.com/JadenFicklin"
          target="_blank"
          rel="noreferrer"
          className="flex py-1 font-semibold group/link text-max"
        >
          Github{' '}
          <FaArrowRight className="relative top-1 left-2 duration-150 group-hover/link:-rotate-45" />
        </a>
        <a
          href="https://www.linkedin.com/in/jaden-ficklin-b1686a21a/"
          target="_blank"
          rel="noreferrer"
          className="flex py-1 font-semibold group/link text-max"
        >
          Linkedin{' '}
          <FaArrowRight className="relative top-1 left-2 duration-150 group-hover/link:-rotate-45" />
        </a>
        <a
          href="https://docs.google.com/document/d/1QVo9-KNAfNvJGrWKi83bLLg9VnD8pmwkMbX9GV65tzc/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="flex py-1 font-semibold group/link text-max"
        >
          Resume{' '}
          <FaArrowRight className="relative top-1 left-2 duration-150 group-hover/link:-rotate-45" />
        </a>
      </div>
    </>
  )
}
