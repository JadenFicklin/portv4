import { SlideIn } from '~/utils/SlideIn'

export const HeroMobile = () => {
  return (
    <>
      <div className="flex-col flex-wrap ml-[5%] xxl:relative w-max pt-48 xxl:pt-0 xxl:ml-[0%] reveal xxl:conceal xxl:top-64 xxl:left-32">
        <>
          <h1 className=" pb-[26px]">
            <SlideIn
              text="Jaden Ficklin, Website Developer"
              className="text-text text-[16px] xs:text-[20px] sm:text-[23px] xl:text-[26px] italic font-light tracking-tight"
              speed={20}
              initialDelay={200}
            />
          </h1>
          <div className="text-[30px] xs:text-[37px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[110px] xxl:text-[128px] text-text">
            <SlideIn
              text="Innovative web dev"
              className=""
              speed={20}
              initialDelay={400}
            />
            <SlideIn
              text="built to engage"
              className="xxl:-mt-8"
              speed={20}
              initialDelay={600}
            />
            <SlideIn
              text="and perform"
              className="xxl:-mt-8"
              speed={20}
              initialDelay={800}
            />
          </div>
        </>
      </div>
    </>
  )
}
