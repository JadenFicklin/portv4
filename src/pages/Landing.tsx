import { HeroDesktop } from '~/components/desktop/HeroDesktop'
import { HeroMobile } from '~/components/mobile/HeroMobile'
import { Nav } from '~/components/Nav'
import { PageLoadDesktop } from '~/components/desktop/PageLoadDesktop'
import { PageLoadMobile } from '~/components/mobile/PageLoadMobile'
import { Spacer } from '~/components/Spacer'
import { About } from '~/components/About'

export const Landing = () => {
  return (
    <>
      {/* page load */}
      <PageLoadDesktop />

      {/* nav */}
      <Nav />

      {/* hero and mobile page load*/}
      <HeroDesktop />
      <HeroMobile />
      <PageLoadMobile />

      {/* spacer */}
      <Spacer />

      {/* about */}
      <About />
    </>
  )
}
