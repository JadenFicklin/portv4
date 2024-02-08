import { Hero } from '~/components/Hero'
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
        <Hero />
        <PageLoadMobile />
      </div>
    </>
  )
}
