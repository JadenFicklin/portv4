import { skillsArray } from '~/data/Skills'
import { HoverSwitch } from '~/utils/HoverSwitch'

export const About = () => {
  return (
    <>
      <div className="w-[90%] h-min mx-[5%] mt-32 flex flex-wrap mb-96">
        <h2 className="w-full pb-3 border-b-2 border-opacity-50 text-7xl text-max border-max">
          About
        </h2>
        <div className="flex flex-wrap w-full h-96">
          <div className="hidden lg:w-[40%] h-full lg:flex justify-center items-center">
            <div className="w-[90%] h-[90%] "></div>
          </div>
          <div className="w-full lg:w-[60%] h-full">
            <div>
              <p>01</p>
              <p>
                <HoverSwitch
                  textOne="How it"
                  textTwo=" all started"
                  className=""
                  speed={0}
                />
              </p>
              <div>+</div>
            </div>
            <div className="flex flex-wrap mt-5 h-max">
              {skillsArray.map((item) => (
                <div className="p-2 m-1 rounded bg-max ">
                  <div className="w-6 h-6 mx-auto ">{item.icon}</div>
                  <div className="w-full text-sm text-center text-min">
                    {item.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
