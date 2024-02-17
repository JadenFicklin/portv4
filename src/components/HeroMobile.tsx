import { Grid } from '~/utils/Grid'
import { SlideIn } from '~/utils/SlideIn'

export const HeroMobile = () => {
  return (
    <>
      <div className="absolute top-0 flex-col mt-32 flex-wrap ml-[5%] w-max reveal xxl:conceal">
        <>
          <h1 className="pb-6 ">
            <SlideIn
              text="Jaden Ficklin, Website Developer"
              className="text-base italic font-light tracking-tight text-max xs:text-xl sm:text-2xl xl:text-3xl"
              speed={20}
              initialDelay={200}
            />
          </h1>
          <div className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl xxl:text-9xl text-max">
            <SlideIn
              text="Innovative web dev"
              className=""
              speed={20}
              initialDelay={400}
            />
            <SlideIn
              text="built to engage"
              className=""
              speed={20}
              initialDelay={600}
            />
            <SlideIn
              text="and perform"
              className=""
              speed={20}
              initialDelay={800}
            />
            <Grid
              horizontalLines={100}
              verticalLines={100}
              initialDelay={1000}
              className="-ml-[5%]"
            />
          </div>
        </>
      </div>
    </>
  )
}
