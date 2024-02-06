import { Hero } from '~/components/Hero'
import { Nav } from '~/components/Nav'
import { PageLoad } from '~/components/PageLoad'

export const Landing = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-background">
        <PageLoad />
        <Nav />
        <Hero />
      </div>
    </>
  )
}
