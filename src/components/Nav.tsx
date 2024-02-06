import { useState } from 'react'
import { cn } from '~/utils/cn'

export const Nav = () => {
  const [menuClicked, setMenuClicked] = useState(false)
  const [videoFinished, setVideoFinished] = useState(false)

  setTimeout(
    () => {
      setVideoFinished(true)
    },
    window.innerWidth > 1400 ? 5500 : 0,
  )

  return (
    <div
      className={cn(
        'w-full fixed z-50 top-0 duration-[2000ms] h-[61px] xxl:bg-transparent bg-black ',
        videoFinished ? 'top-[0%]' : 'top-[-100%]',
      )}
    >
      <div className="fixed z-50 left-[5%] size-[60px] bg-text text-white text-[26px] font-black grid place-content-center cursor-pointer duration-200 hover:opacity-90">
        JF
      </div>
      <div
        className={cn(
          'fixed z-50 right-[5%] rounded-full size-[50px] mt-[5px] xxl:mt-[10px] bg-text font-black grid place-content-center cursor-pointer duration-200 hover:opacity-90',
        )}
        onClick={() => setMenuClicked(!menuClicked)}
      >
        <div
          className={cn(
            'w-[20px] h-[1px] bg-textCounter my-[1.5px] duration-200 relative ',
            menuClicked && 'rotate-[-40deg] bottom-[-1.8px] w-[20px]',
          )}
        ></div>
        <div
          className={cn(
            'w-[20px] h-[1px] bg-textCounter my-[1.5px] duration-200',
            menuClicked && 'hidden',
          )}
        ></div>
        <div
          className={cn(
            'w-[20px] h-[1px] bg-textCounter my-[1.5px] duration-200 relative',
            menuClicked && 'rotate-[-135deg] bottom-[2.2px] w-[20px]',
          )}
        ></div>
      </div>
    </div>
  )
}
