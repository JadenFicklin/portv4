import { SlideIn } from '~/utils/SlideIn'

export const Hero = () => {
  return (
    <>
      <div className="relative z-10 flex flex-col flex-wrap w-max top-64 left-32">
        <h1 className=" pb-[26px]">
          <SlideIn
            text="Jaden Ficklin, Website Developer"
            className="text-text text-[26px] italic"
            speed={20}
            initialDelay={5800}
          />
        </h1>
        <div className="text-[128px] text-text">
          <SlideIn
            text="Innovative web dev"
            className=""
            speed={20}
            initialDelay={6000}
          />
          <SlideIn
            text="built to engage"
            className="-mt-8"
            speed={20}
            initialDelay={6200}
          />
          <SlideIn
            text="and preform"
            className="-mt-8"
            speed={20}
            initialDelay={6400}
          />
        </div>
      </div>
    </>
  )
}
