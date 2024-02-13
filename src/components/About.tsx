import { useState } from 'react'
import { FAQDrawer } from '~/components/FAQDrawer'
import { skillsArray } from '~/data/Skills'
import { cn } from '~/utils/cn'
import { HowItStartedText } from '~/utils/HowItStartedText'
import { MyInterestsText } from '~/utils/MyInterestsText'

export const About = () => {
  const [image, setImage] = useState('')

  type FAQProps = {
    title: string
    duration?: string
    content: React.ReactNode
  }

  const FAQs: FAQProps[] = [
    {
      title: 'How it all started',
      content: (
        <div className="py-10" onMouseLeave={() => setImage('')}>
          <HowItStartedText setImage={setImage} />
        </div>
      ),
    },
    {
      title: 'My interests',
      content: (
        <div className="py-10" onMouseLeave={() => setImage('')}>
          <MyInterestsText setImage={setImage} />
        </div>
      ),
    },
    {
      title: 'Tech stack',
      content: (
        <div className="flex flex-wrap py-10">
          {skillsArray.map((skill) => (
            <div className="p-2 m-1 rounded bg-max">
              <div className="w-6 h-6 mx-auto ">{skill.icon}</div>
              <div className="w-full text-sm text-center text-min">
                {skill.name}
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: 'My Experience',
      content: (
        <div className="py-10" onMouseLeave={() => setImage('')}>
          <MyInterestsText setImage={setImage} />
        </div>
      ),
    },
  ]

  return (
    <>
      <div className="w-[90%] h-min mx-[5%] mt-32 xxl:mt-[650px] flex flex-wrap ">
        <h2 className="w-full pb-3 text-3xl border-b-2 border-opacity-50 xs:text-4xl sm:text-6xl md:text-7xl text-max border-max">
          ABOUT
        </h2>
        <div className="flex flex-wrap w-full h-max">
          <div className="items-center justify-center hidden overflow-hidden lg:w-5/12 lg:flex">
            <div
              className={cn(
                'grid w-10/12  h-5/6 place-content-center relative duration-300 left-[-100%]',
                image && 'left-0',
              )}
            >
              <img src={image} alt={image} className="w-full" />
            </div>
          </div>
          {/* FAQ section */}
          <div className="flex flex-col w-full lg:w-7/12 h-max">
            {FAQs.map((faqProps, index) => {
              const { title, duration, content } = faqProps
              const number = index + 1

              return (
                <FAQDrawer
                  showNumbers
                  title={title}
                  duration={duration}
                  number={number}
                >
                  {content}
                </FAQDrawer>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
