import { HeroDesktop } from '~/components/desktop/HeroDesktop'
import { HeroMobile } from '~/components/mobile/HeroMobile'
import { NavDesktop } from '~/components/desktop/NavDesktop'
import { NavMobile } from '~/components/mobile/NavMobile'
import { PageLoadDesktop } from '~/components/desktop/PageLoadDesktop'
import { PageLoadMobile } from '~/components/mobile/PageLoadMobile'

export const Landing = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-background">
        {/* page load */}
        <PageLoadDesktop />

        {/* nav */}
        <NavDesktop />
        <NavMobile />

        {/* hero */}
        <HeroDesktop />
        <HeroMobile />
        <PageLoadMobile />
      </div>
    </>
  )
}
