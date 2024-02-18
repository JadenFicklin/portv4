import { HeroDesktop } from '~/components/HeroDesktop'
import { HeroMobile } from '~/components/HeroMobile'
import { Nav } from '~/components/Nav'
import { PageLoadDesktop } from '~/components/PageLoadDesktop'
import { PageLoadMobile } from '~/components/PageLoadMobile'
import { About } from '~/components/About'
import { Works } from '~/components/Works'
import { ProjectsSlider } from '~/components/ProjectsSlider'
import { Contact } from '~/components/Contact'
import GetScrollPosition from '~/utils/GetScrollPosition'
import WithVisibility from '~/utils/WithVisibility'

export const Landing = () => {
  return (
    <>
      {/* hero and mobile page load*/}
      <HeroDesktop />
      <HeroMobile />

      {/* page load */}
      <PageLoadDesktop />
      <PageLoadMobile />

      {/* about */}
      <WithVisibility position={-200} name="About">
        <About />
      </WithVisibility>

      {/* works */}
      <GetScrollPosition position={-200} name="Works">
        <Works />
      </GetScrollPosition>

      {/* projects slider */}
      <ProjectsSlider />

      {/* contact */}
      <Contact />

      {/* nav */}
      <Nav />
    </>
  )
}
