import { HeroDesktop } from '~/components/HeroDesktop'
import { HeroMobile } from '~/components/HeroMobile'
import { Nav } from '~/components/Nav'
import { PageLoadDesktop } from '~/components/PageLoadDesktop'
import { PageLoadMobile } from '~/components/PageLoadMobile'
import { About } from '~/components/About'
import { Grid } from '~/utils/Grid'
import { Works } from '~/components/Works'
// import { Grid } from '~/utils/Grid'

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

      {/* works */}
      <Works />

      {/* nav */}
      <Nav />

      {/* grid */}
      <Grid horizontalLines={100} verticalLines={100} />
    </>
  )
}
