import { howItStartedData } from '~/data/about'
import { FAQDrawer } from '~/components/FAQDrawer'
// import { myInterestsData } from '~/data/about'
// import { skillsArray } from '~/data/Skills'

export const About = () => {
  type FAQProps = {
    title: string
    duration?: string
    content: React.ReactNode
  }

  const FAQs: FAQProps[] = [
    {
      title: 'How it all started',
      content: <span>{howItStartedData}</span>,
    },
    {
      title: 'My interests',
      content: <div>child 2</div>,
    },
    {
      title: 'Tech stack',
      content: <div>child 3</div>,
    },
  ]

  return (
    <>
      <div className="w-[90%] h-min mx-[5%] mt-32 xxl:mt-[650px] flex flex-wrap mb-96">
        <h2 className="w-full pb-3 border-b-2 border-opacity-50 text-7xl text-max border-max">
          About
        </h2>
        <div className="flex flex-wrap w-full h-96">
          <div className="items-center justify-center hidden h-full lg:w-4/12 lg:flex">
            <div className="w-11/12 h-11/12 "></div>
          </div>
          {/* FAQ section */}
          <div className="flex flex-col w-full lg:w-8/12 h-max">
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
