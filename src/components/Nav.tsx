import { useEffect, useState } from 'react'
import { useElementsLocationStore } from '~/globalState/elementsLocationStore'
import { HoverText } from '~/utils/HoverText'
import { cn } from '~/utils/cn'
import Video from '~/assets/videos/GroupAtWork.mp4'
import { Theme } from '~/utils/Theme'
import { Link, useNavigate, useLocation } from 'react-router-dom'

export const Nav = () => {
  const normalDisplaySpeed = true

  const [menuClicked, setMenuClicked] = useState(false)
  const [displayNav, setDisplayNav] = useState(false)

  const { about, work, contact } = useElementsLocationStore((state) => ({
    about: state.about,
    work: state.work,
    contact: state.contact,
  }))

  const navigate = useNavigate()
  const location = useLocation()

  interface NavOption {
    name: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    to: any
    isRoute?: boolean
  }

  const navOptions: NavOption[] = [
    { name: 'Home', to: 0 },
    { name: 'About', to: about },
    { name: 'Work', to: work },
    { name: 'Archive', to: '/archive', isRoute: true },
    { name: 'Contact', to: contact },
  ]

  useEffect(() => {
    setTimeout(() => {
      setDisplayNav(true)
    }, 500)
  }, [normalDisplaySpeed])

  const handleNavClick = (
    to: string | number,
    isRoute: boolean = false,
    name?: string,
  ) => {
    if (name === 'Contact') {
      if (location.pathname !== '/') {
        navigate('/', { state: { scrollToContact: true } })
        setMenuClicked(false)
        return
      }
    }
    if (!isRoute) {
      window.scrollTo({
        top: typeof to === 'number' ? to : 0,
        behavior: 'smooth',
      })
      setMenuClicked(false)
    }
  }

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
          )}
        ></div>
        <Link
          to="/"
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
        </Link>
        {/* theme changer */}
        <Theme isMobile={true} />
        <Theme />
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
            'absolute md:block top-1/2 w-2/5 h-screen hidden left-1/2 translate-x-[-125%] -translate-y-1/2 object-cover pointer-events-none select-none',
          )}
          src={Video}
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
          controls={false}
        />
        <div className="pl-[8%] pt-24 md:left-[45%] md:pl-0 md:pt-0 md:top-[19%] md:absolute">
          {navOptions.map((option, index) => {
            if (option.isRoute) {
              return (
                <Link
                  key={index}
                  to={option.to}
                  className={cn(
                    'cursor-pointer',
                    !menuClicked && 'pointer-events-none opacity-50',
                  )}
                  tabIndex={!menuClicked ? -1 : 0}
                >
                  <HoverText
                    wrapperClassName="hover:pl-10"
                    className="text-3xl font-semibold tracking-wider cursor-pointer xs:text-5xl sm:text-6xl md:text-8xl max-h-710:text-6xl"
                    text={option.name}
                    speed={50}
                  />
                </Link>
              )
            } else {
              return (
                <div
                  key={index}
                  onClick={() =>
                    menuClicked && handleNavClick(option.to, false, option.name)
                  }
                  className={cn(
                    'cursor-pointer',
                    !menuClicked && 'pointer-events-none opacity-50',
                  )}
                  tabIndex={!menuClicked ? -1 : 0}
                >
                  <HoverText
                    wrapperClassName="hover:pl-10"
                    className="text-3xl font-semibold tracking-wider cursor-pointer xs:text-5xl sm:text-6xl md:text-8xl max-h-710:text-6xl"
                    text={option.name}
                    speed={50}
                  />
                </div>
              )
            }
          })}
        </div>

        <div className="text-custom pl-[8%] bottom-32 md:left-[45%] md:pl-0 md:pt-0 md:top-[90%] absolute">
          <a
            href="https://github.com/JadenFicklin"
            target="_blank"
            rel="noreferrer"
            className="relative top-0 mx-2 font-semibold duration-150 cursor-pointer hover:text-hover-accent hover:-top-1 hover:pb-1"
          >
            Github
          </a>{' '}
          /{' '}
          <a
            href="https://www.linkedin.com/in/jaden-ficklin-b1686a21a/"
            target="_blank"
            rel="noreferrer"
            className="relative top-0 mx-2 font-semibold duration-150 cursor-pointer hover:-top-1 hover:pb-1 hover:text-hover-accent"
          >
            Linkedin
          </a>{' '}
          /{' '}
          <a
            href="https://docs.google.com/document/d/1QVo9-KNAfNvJGrWKi83bLLg9VnD8pmwkMbX9GV65tzc/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="relative top-0 mx-2 font-semibold duration-150 cursor-pointer hover:-top-1 hover:pb-1 hover:text-hover-accent"
          >
            Resume
          </a>
        </div>

        <a
          href="mailto:fullstackjaden@gmail.com"
          className=" hover:pb-1 hover:text-hover-accent duration-150 mx-2 font-semibold cursor-pointer text-custom pl-[8%] md:right-[5%] md:hidden lg:block md:pl-0 md:pt-0 md:top-[90%] hover:md:top-[89.5%] bottom-24 hover:bottom-[98px] absolute"
        >
          FullstackJaden@gmail.com
        </a>
      </div>
    </>
  )
}
