import { useEffect, useState } from 'react'
import { HoverText } from '~/utils/HoverText'
import { cn } from '~/utils/cn'
import Video from '~/assets/videos/GroupAtWork.mp4'
import { useThemeStore } from '~/globalState/themeStore'
// import Video from '~/assets/videos/code.mp4'

export const Nav = () => {
  const normalDisplaySpeed = true

  const [menuClicked, setMenuClicked] = useState(false)
  const [displayNav, setDisplayNav] = useState(false)

  const navOptions = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/' },
    { name: 'Work', to: '/' },
    { name: 'Contact', to: '/' },
  ]
  const { toggleTheme } = useThemeStore()

  useEffect(() => {
    setTimeout(
      () => {
        setDisplayNav(true)
      },
      window.innerWidth > 1400 && normalDisplaySpeed ? 7000 : 500,
    )
  }, [normalDisplaySpeed])

  return (
    <>
      <div
        className={cn(
          'w-full duration-[700ms] h-16 fixed z-50',
          displayNav ? 'top-[0%]' : 'top-[-100%]',
        )}
      >
        <div
          className={cn(
            'w-[160%] left-[-40%] h-16 fixed bg-accent duration-700 ease-in-out justify-center',
            displayNav ? 'top-0' : '-top-full',
            // menuClicked && 'left-[5%] w-[60px] duration-700',
          )}
        ></div>
        <div
          className={cn(
            'fixed left-[5%] size-16 grid place-content-center cursor-pointer duration-200 bg-transparent',
          )}
        >
          <HoverText
            wrapperClassName="hover:pl-0"
            className="text-2xl font-black tracking-wider cursor-pointer"
            text="JF"
            speed={50}
          />
        </div>
        {/* theme changer */}
        <button
          onClick={toggleTheme}
          className="absolute h-10 px-3 cursor-pointer w-max bg-min right-52 top-3 text-max"
        >
          Switch theme
        </button>
        <div
          className={cn(
            'fixed right-[5%] rounded-full size-12 mt-2 font-black grid place-content-center cursor-pointer duration-200',
            menuClicked && 'md:bg-min',
          )}
          onClick={() => setMenuClicked(!menuClicked)}
        >
          <div
            className={cn(
              'w-5 h-[1px] bg-custom my-[1.5px] duration-200 relative ',
              menuClicked && 'rotate-[-40deg] bottom-[-1.8px] w-5 md:bg-max',
            )}
          ></div>
          <div
            className={cn(
              'w-5 h-[1px] bg-custom my-[1.5px] duration-200',
              menuClicked && 'hidden',
            )}
          ></div>
          <div
            className={cn(
              'w-5 h-[1px] bg-custom my-[1.5px] duration-200 relative',
              menuClicked && 'rotate-[-135deg] bottom-[2.2px] w-5 md:bg-max',
            )}
          ></div>
        </div>
      </div>
      {/* black screen cover for nav */}
      <div
        className={cn(
          'w-full h-screen top-[-100vh] bg-accent fixed duration-700 ease-in-out z-40',
          menuClicked && 'top-0',
        )}
      >
        <video
          className={cn(
            'absolute md:block top-1/2 w-2/5 h-screen hidden left-1/2 translate-x-[-125%] -translate-y-1/2 object-cover',
          )}
          src={Video}
          autoPlay
          muted
          loop
        />
        <div className="pl-[8%] pt-24 md:left-[45%] md:pl-0 md:pt-0 md:top-1/4 md:absolute">
          {navOptions.map((option, index: number) => (
            <HoverText
              key={index}
              wrapperClassName="hover:pl-10"
              className="text-3xl font-semibold tracking-wider cursor-pointer xs:text-5xl sm:text-6xl md:text-8xl "
              text={option.name}
              speed={50}
            />
          ))}
        </div>

        <div className="text-custom pl-[8%] bottom-16 md:left-[45%] md:pl-0 md:pt-0 md:top-[90%] absolute">
          <a
            href="https://github.com/JadenFicklin"
            target="_blank"
            rel="noreferrer"
            className="mx-2 font-semibold duration-150 cursor-pointer hover:text-hoverAccent"
          >
            Github
          </a>{' '}
          /{' '}
          <a
            href="https://www.linkedin.com/in/jaden-ficklin-b1686a21a/"
            target="_blank"
            rel="noreferrer"
            className="mx-2 font-semibold duration-150 cursor-pointer hover:text-hoverAccent"
          >
            Linkedin
          </a>{' '}
          /{' '}
          <a
            href="https://docs.google.com/document/d/1QVo9-KNAfNvJGrWKi83bLLg9VnD8pmwkMbX9GV65tzc/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="mx-2 font-semibold duration-150 cursor-pointer hover:text-hoverAccent"
          >
            Resume
          </a>
        </div>

        <a
          href="mailto:fullstackjaden@gmail.com"
          className="hover:text-hoverAccent duration-150 mx-2 font-semibold cursor-pointer text-custom pl-[8%] md:right-[5%] md:hidden lg:block md:pl-0 md:pt-0 md:top-[90%] bottom-10 absolute"
        >
          FullstackJaden@gmail.com
        </a>
      </div>
    </>
  )
}
