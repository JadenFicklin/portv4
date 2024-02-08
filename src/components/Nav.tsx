import { useEffect, useState } from 'react'
import { HoverText } from '~/utils/HoverText'
import { cn } from '~/utils/cn'

export const Nav = () => {
  const [menuClicked, setMenuClicked] = useState(false)
  const [displayNav, setDisplayNav] = useState(false)

  useEffect(() => {
    setTimeout(
      () => {
        setDisplayNav(true)
      },
      window.innerWidth > 1400 ? 5500 : 500,
    )
  }, [])

  return (
    <>
      <div
        className={cn(
          'w-full z-50 duration-[2000ms] h-[61px] fixed bg-black',
          displayNav ? 'top-[0%]' : 'top-[-100%]',
        )}
      >
        <div className="fixed z-50 left-[5%] size-[60px] bg-text text-white text-[26px] font-black grid place-content-center cursor-pointer duration-200 hover:opacity-90">
          JF
        </div>
        <div
          className={cn(
            'fixed z-50 right-[5%] rounded-full size-[50px] mt-[6px] bg-text font-black grid place-content-center cursor-pointer duration-200 hover:opacity-90',
          )}
          onClick={() => setMenuClicked(!menuClicked)}
        >
          <div
            className={cn(
              'w-[20px] h-[1px] bg-counterText my-[1.5px] duration-200 relative ',
              menuClicked && 'rotate-[-40deg] bottom-[-1.8px] w-[20px]',
            )}
          ></div>
          <div
            className={cn(
              'w-[20px] h-[1px] bg-counterText my-[1.5px] duration-200',
              menuClicked && 'hidden',
            )}
          ></div>
          <div
            className={cn(
              'w-[20px] h-[1px] bg-counterText my-[1.5px] duration-200 relative',
              menuClicked && 'rotate-[-135deg] bottom-[2.2px] w-[20px]',
            )}
          ></div>
        </div>
      </div>
      <div
        className={cn(
          'w-full h-screen top-[-100vh] bg-text fixed duration-700 ease-in-out z-20',
          menuClicked && 'top-0',
        )}
      >
        <div className="md:pl-[6%] pl-[8%] pt-[100px]">
          <HoverText
            className="text-[88px] tracking-wider font-semibold cursor-pointer"
            text="Work"
            speed={50}
          />
          <HoverText
            className="text-[88px] tracking-wider font-semibold cursor-pointer mt-[-28px]"
            text="About"
            speed={50}
          />
          <HoverText
            className="text-[88px] tracking-wider font-semibold cursor-pointer mt-[-28px]"
            text="Experience"
            speed={50}
          />
          <HoverText
            className="text-[88px] tracking-wider font-semibold cursor-pointer mt-[-28px]"
            text="Contact"
            speed={50}
          />
        </div>
      </div>
    </>
  )
}
