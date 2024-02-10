import { HeroDesktop } from '~/components/HeroDesktop'
import { HeroMobile } from '~/components/HeroMobile'
import { Nav } from '~/components/Nav'
import { PageLoadDesktop } from '~/components/PageLoadDesktop'
import { PageLoadMobile } from '~/components/PageLoadMobile'
import { About } from '~/components/About'

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
      <About />

      {/* nav */}
      <Nav />
    </>
  )
}
