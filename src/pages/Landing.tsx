import { HeroDesktop } from '~/components/HeroDesktop'
import { HeroMobile } from '~/components/HeroMobile'
import { Nav } from '~/components/Nav'
import { PageLoad } from '~/components/PageLoad'
import { About } from '~/components/About'
import { Works } from '~/components/Works'
import { ProjectsSlider } from '~/components/ProjectsSlider'
import { Contact } from '~/components/Contact'
import GetScrollPosition from '~/utils/GetScrollPosition'
import { useLocation } from 'react-router-dom'
import { useElementsLocationStore } from '~/globalState/elementsLocationStore'
import { useEffect } from 'react'

export const Landing = () => {
  const location = useLocation()
  const { contact } = useElementsLocationStore()

  useEffect(() => {
    if (location.state && location.state.scrollToContact) {
      setTimeout(() => {
        window.scrollTo({ top: contact, behavior: 'smooth' })
      }, 300)
      // Remove scrollToContact from history state so it doesn't trigger again
      window.history.replaceState({}, document.title)
    }
  }, [location.state, contact])

  return (
    <>
      {/* hero and mobile page load*/}
      <HeroDesktop />
      <HeroMobile />

      {/* page load */}
      <PageLoad />

      {/* about */}
      <GetScrollPosition position={-150} name="About">
        <About />
      </GetScrollPosition>

      {/* works */}
      <GetScrollPosition position={-100} name="Works">
        <Works />
      </GetScrollPosition>

      {/* projects slider */}
      <GetScrollPosition position={0} name="Archive">
        <ProjectsSlider />
      </GetScrollPosition>

      {/* contact */}
      <GetScrollPosition position={0} name="Contact">
        <Contact />
      </GetScrollPosition>

      {/* nav */}
      <Nav />
    </>
  )
}
