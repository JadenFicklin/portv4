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
      <WithVisibility position={-20} name="About">
        <GetScrollPosition position={-150} name="About">
          <About />
        </GetScrollPosition>
      </WithVisibility>

      {/* works */}
      <WithVisibility position={200} name="Works">
        <GetScrollPosition position={-100} name="Works">
          <Works />
        </GetScrollPosition>
      </WithVisibility>

      {/* projects slider */}
      <WithVisibility position={100} name="Archive">
        <GetScrollPosition position={0} name="Archive">
          <ProjectsSlider />
        </GetScrollPosition>
      </WithVisibility>

      {/* contact */}
      <WithVisibility position={100} name="Contact">
        <GetScrollPosition position={0} name="Contact">
          <Contact />
        </GetScrollPosition>
      </WithVisibility>

      {/* nav */}
      <Nav />
    </>
  )
}
