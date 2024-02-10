import { SlideIn } from '~/utils/SlideIn'

export const HeroDesktop = () => {
  const normalDisplaySpeed = true
  return (
    <>
      <div className="flex-col flex-wrap w-max ml-[5%] mt-64 xxl:reveal conceal">
        <>
          <h1 className=" pb-[26px]">
            <SlideIn
              text="Jaden Ficklin, Website Developer"
              className="text-max text-[16px] xs:text-[20px] sm:text-[23px] xl:text-[26px] italic font-light tracking-tight"
              speed={20}
              initialDelay={normalDisplaySpeed ? 5800 : 0}
            />
          </h1>
          <div className="text-[30px] xs:text-[37px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[110px] xxl:text-[128px] text-max">
            <SlideIn
              text="Innovative web dev"
              className=""
              speed={20}
              initialDelay={normalDisplaySpeed ? 6000 : 0}
            />
            <SlideIn
              text="built to engage"
              className="xxl:-mt-8"
              speed={20}
              initialDelay={normalDisplaySpeed ? 6200 : 0}
            />
            <SlideIn
              text="and perform"
              className="xxl:-mt-8"
              speed={20}
              initialDelay={normalDisplaySpeed ? 6400 : 0}
            />
          </div>
        </>
      </div>
    </>
  )
}
