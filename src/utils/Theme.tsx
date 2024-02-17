import { useState } from 'react'
import { useThemeStore } from '~/globalState/themeStore'
import { FaLightbulb, FaSun, FaMoon, FaCode } from 'react-icons/fa'
import { IoFlower } from 'react-icons/io5'
import { IoMdWater } from 'react-icons/io'
import { cn } from '~/utils/cn'

type ThemeName = 'light' | 'dark' | 'binary' | 'cherryBlossom' | 'blueTheme'

interface ThemeProps {
  name: React.ReactNode
  theme: ThemeName
}

const themes: ThemeProps[] = [
  {
    name: <FaSun className="size-5 fill-max" />,
    theme: 'light',
  },
  {
    name: <FaMoon className="size-5 fill-max" />,
    theme: 'dark',
  },
  {
    name: <FaCode className="size-5 fill-max" />,
    theme: 'binary',
  },
  {
    name: <IoFlower className="size-5 fill-max" />,
    theme: 'cherryBlossom',
  },
  {
    name: <IoMdWater className="size-5 fill-max" />,
    theme: 'blueTheme',
  },
]

export const Theme = () => {
  const [themeOpen, setThemeOpen] = useState(false)
  const [themeSelected, setThemeSelected] = useState('')

  const { setTheme } = useThemeStore()

  const handleThemeClicked = (item: ThemeProps) => {
    setThemeSelected(item.theme)
    setTheme(item.theme)
  }

  return (
    <>
      <div
        className={cn(
          'rounded-full size-8 bg-min absolute right-[25%] xs:right-[20%] sm:right-[15%] md:right-[10%] top-4 duration-300 overflow-hidden flex items-center',
          themeOpen ? 'w-[195px]' : 'w-8',
        )}
      >
        <div className="relative flex items-center w-full h-full overflow-hidden ">
          <div className="grid grid-cols-5  w-[160px] relative -left-[5px]">
            {themes.map((item, index) => (
              <div
                key={index}
                className={cn(
                  'size-7 rounded-full ml-2 grid place-content-center duration-300 cursor-pointer',
                  themeSelected === item.theme ? 'bg-archive' : '',
                  themeOpen ? 'opacity-100' : 'opacity-0',
                )}
                onClick={() => handleThemeClicked(item)}
              >
                {item.name}
              </div>
            ))}
          </div>
          <div
            className="absolute top-0 right-0 grid rounded-full cursor-pointer place-content-center size-8 bg-min"
            onClick={() => setThemeOpen(!themeOpen)}
          >
            <FaLightbulb className="rounded-full size-5 fill-max" />
          </div>
        </div>
      </div>
    </>
  )
}
