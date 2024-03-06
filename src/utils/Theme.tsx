import { useState, useEffect } from 'react'
import { useThemeStore } from '~/globalState/themeStore'
import { FaSun, FaMoon, FaCode } from 'react-icons/fa'
import { IoMdWater } from 'react-icons/io'
import { cn } from '~/utils/cn'
import { GiFlowerEmblem } from 'react-icons/gi'
import { IoColorPalette } from 'react-icons/io5'

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
    name: <GiFlowerEmblem className="size-5 fill-max" />,
    theme: 'cherryBlossom',
  },
  {
    name: <IoMdWater className="size-5 fill-max" />,
    theme: 'blueTheme',
  },
]

export const Theme = () => {
  const [themeOpen, setThemeOpen] = useState(() => {
    const stored = localStorage.getItem('themeOpen')
    return stored ? stored === 'true' : false
  })
  const [themeSelected, setThemeSelected] = useState(
    () => localStorage.getItem('themeSelected') || '',
  )

  const { setTheme } = useThemeStore()

  useEffect(() => {
    localStorage.setItem('themeSelected', themeSelected)
    localStorage.setItem('themeOpen', String(themeOpen))
  }, [themeSelected, themeOpen])

  const handleThemeClicked = (item: ThemeProps) => {
    setThemeSelected(item.theme)
    setTheme(item.theme)
  }

  return (
    <>
      <div
        className={cn(
          'hidden md:flex rounded-full size-8 bg-min absolute right-[25%] xs:right-[20%] sm:right-[15%] md:right-[10%] top-4 duration-300 overflow-hidden items-center',
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
                  themeSelected === item.theme ? 'bg-max/40' : '',
                  themeOpen ? 'opacity-100' : 'opacity-0',
                )}
                onClick={() => handleThemeClicked(item)}
              >
                {item.name}
              </div>
            ))}
          </div>
          <div
            className="absolute top-0 right-0 grid duration-300 rounded-full cursor-pointer place-content-center size-8 bg-min"
            onClick={() => setThemeOpen(!themeOpen)}
          >
            <IoColorPalette className="rounded-full size-5 fill-max" />
          </div>
        </div>
      </div>
    </>
  )
}
