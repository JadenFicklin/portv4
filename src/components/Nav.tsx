import { useEffect, useState } from 'react'
import { HoverText } from '~/utils/HoverText'
import { cn } from '~/utils/cn'
import Video from '~/assets/videos/GroupAtWork.mp4'

export const Nav = () => {
  const [menuClicked, setMenuClicked] = useState(false)
  const [displayNav, setDisplayNav] = useState(false)

  const navOptions = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/' },
    { name: 'Work', to: '/' },
    { name: 'Contact', to: '/' },
  ]

  useEffect(() => {
    setTimeout(
      () => {
        setDisplayNav(true)
      },
      window.innerWidth > 1400 ? 7000 : 500,
    )
  }, [])

  return (
    <>
      <div
        className={cn(
          'w-full z-50 duration-[700ms] h-[60px] fixed',
          displayNav ? 'top-[0%]' : 'top-[-100%]',
        )}
      >
        <div
          className={cn(
            'w-[160%] z-10 left-[-40%] h-[60px] fixed bg-text duration-700 ease-in-out justify-center',
            displayNav ? 'top-[0%]' : 'top-[-100%]',
            // menuClicked && ' left-[5%] w-[60px] duration-700',
          )}
        ></div>
        <div
          className={cn(
            'fixed z-50 left-[5%] size-[60px] grid place-content-center cursor-pointer duration-200 bg-text',
          )}
        >
          <HoverText
            wrapperClassName="hover:pl-0"
            className="text-[26px] tracking-wider font-black cursor-pointer"
            text="JF"
            speed={50}
          />
        </div>
        <div
          className={cn(
            'fixed z-50 right-[5%] rounded-full size-[50px] mt-[6px] font-black grid place-content-center cursor-pointer duration-200',
            menuClicked && 'md:bg-counterText',
          )}
          onClick={() => setMenuClicked(!menuClicked)}
        >
          <div
            className={cn(
              'w-[20px] h-[1px] bg-counterText my-[1.5px] duration-200 relative ',
              menuClicked &&
                'rotate-[-40deg] bottom-[-1.8px] w-[20px] md:bg-text',
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
              menuClicked &&
                'rotate-[-135deg] bottom-[2.2px] w-[20px] md:bg-text',
            )}
          ></div>
        </div>
      </div>
      {/* black screen cover for nav */}
      <div
        className={cn(
          'w-full h-screen top-[-100vh] bg-text fixed duration-700 ease-in-out z-20',
          menuClicked && 'top-0',
        )}
      >
        <video
          className={cn(
            'absolute md:block top-1/2 w-[40%] h-screen hidden left-1/2 translate-x-[-125%] translate-y-[-50%] object-cover',
          )}
          src={Video}
          autoPlay
          muted
          loop
        />
        <div className="pl-[8%] pt-[100px] md:left-[45%] md:pl-0 md:pt-0 md:top-1/4  md:absolute">
          {navOptions.map((option) => (
            <HoverText
              wrapperClassName="hover:pl-[10px] md:hover:pl-10"
              className="text-[30px] xs:text-[50px] mt-[-10px] sm:text-[60px] md:text-[88px] tracking-wider font-semibold cursor-pointer md:mt-[-28px]"
              text={option.name}
              speed={50}
            />
          ))}
        </div>

        <p className="text-counterText pl-[8%] bottom-16 md:left-[45%] md:pl-0 md:pt-0 md:top-[90%] absolute">
          <a className="mx-2 font-semibold cursor-pointer">Github</a> /{' '}
          <a className="mx-2 font-semibold cursor-pointer">Linkedin</a> /{' '}
          <a className="mx-2 font-semibold cursor-pointer">Resume</a>
        </p>

        <p className="mx-2 font-semibold cursor-pointer text-counterText pl-[8%] md:right-[5%] md:hidden lg:block md:pl-0 md:pt-0 md:top-[90%] bottom-10 absolute">
          FullstackJaden@gmail.com
        </p>
      </div>
    </>
  )
}
