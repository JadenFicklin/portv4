import { SlideIn } from '~/utils/SlideIn'

export const HeroDesktop = () => {
  const normalDisplaySpeed = true
  return (
    <>
      <div className="flex-col flex-wrap w-max ml-[5%] mt-64 xxl:reveal conceal">
        <>
          <h1 className=" pb-7">
            <SlideIn
              text="Jaden Ficklin, Website Developer"
              className="text-base italic font-light tracking-tight text-max xs:text-xl sm:text-2xl xl:text-3xl"
              speed={20}
              initialDelay={normalDisplaySpeed ? 5800 : 0}
            />
          </h1>
          <div className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl xxl:text-9xl text-max">
            <SlideIn
              text="Innovative web dev"
              className=""
              speed={20}
              initialDelay={normalDisplaySpeed ? 6000 : 0}
            />
            <SlideIn
              text="built to engage"
              className=""
              speed={20}
              initialDelay={normalDisplaySpeed ? 6200 : 0}
            />
            <SlideIn
              text="and perform"
              className=""
              speed={20}
              initialDelay={normalDisplaySpeed ? 6400 : 0}
            />
          </div>
        </>
      </div>
    </>
  )
}
