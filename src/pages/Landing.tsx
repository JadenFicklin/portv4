import { HeroDesktop } from '~/components/HeroDesktop'
import { HeroMobile } from '~/components/HeroMobile'
import { Nav } from '~/components/Nav'
import { PageLoad } from '~/components/PageLoad'
import { About } from '~/components/About'
import { Works } from '~/components/Works'
import { ProjectsSlider } from '~/components/ProjectsSlider'
import { Contact } from '~/components/Contact'
import GetScrollPosition from '~/utils/GetScrollPosition'

export const Landing = () => {
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
