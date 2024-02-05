import { About } from '~/components/About'
import { Nav } from '~/components/Nav'
import { PageLoad } from '~/components/PageLoad'

export const Landing = () => {
  return (
    <>
      <div className="absolute w-full min-h-screen overflow-hidden bg-background">
        <PageLoad />
        <Nav />
        <About />
        <About />
        <About />
      </div>
    </>
  )
}
