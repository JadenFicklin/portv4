import { HeroDesktop } from '~/components/desktop/HeroDesktop'
import { HeroMobile } from '~/components/mobile/HeroMobile'
import { Nav } from '~/components/Nav'
import { PageLoadDesktop } from '~/components/desktop/PageLoadDesktop'
import { PageLoadMobile } from '~/components/mobile/PageLoadMobile'

export const Landing = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-background">
        {/* page load */}
        <PageLoadDesktop />

        {/* nav */}
        <Nav />

        {/* hero */}
        <HeroDesktop />
        <HeroMobile />
        <PageLoadMobile />
      </div>
    </>
  )
}
