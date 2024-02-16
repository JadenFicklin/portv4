import { cn } from '~/utils/cn'

export const Contact = () => {
  const inputStyling =
    'w-full pt-2 pb-3 mt-5 duration-200 bg-opacity-0 border-b border-opacity-50 outline-none bg-max border-min hover:border-opacity-100 focus:border-opacity-100'

  return (
    <div className="relative grid w-full border-t lg:grid-cols-2 bg-max text-min border-min min-h-[calc(100vh-64px)]">
      {/* Section for the catchy headline */}
      <div className="flex items-center py-20 pl-5 border-b md:pl-16 lg:pl-10 lg:border-r lg:border-b-0 border-min">
        <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-8xl">
          Let's make a <br />
          winning team
        </h2>
      </div>

      {/* Form section for user inputs */}
      <div className="w-full py-20 border-b border-min h-max">
        <form className="flex flex-wrap w-10/12 mx-auto h-max">
          {/* Input fields for user details */}
          <input placeholder="Name" type="text" className={inputStyling} />
          <input placeholder="Email" type="email" className={inputStyling} />
          <input placeholder="Company" type="text" className={inputStyling} />
          <textarea
            placeholder="Message"
            className={cn(inputStyling, 'min-h-32 max-h-52 pb-20 ')}
          />
          <button className="px-6 py-1 mt-10 rounded-full bg-accentLight text-max">
            Submit Message
          </button>
        </form>
      </div>

      {/* contact information*/}
      <div className="right-0 w-max px-5 mx-auto lg:px-0 py-14 lg:py-0 lg:absolute bottom-5 lg:left-[53%] lg:mx-0">
        <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-start lg:items-end">
          <div className="flex justify-center cursor-pointer lg:justify-start">
            <a className="mx-2 duration-150 text-min hover:text-accentLight">
              Github
            </a>{' '}
            /
            <a className="mx-2 duration-150 text-min hover:text-accentLight">
              Linkedin
            </a>{' '}
            /
            <a className="mx-2 duration-150 text-min hover:text-accentLight">
              Resume
            </a>
          </div>
          <p className="mt-4 duration-150 cursor-pointer lg:mt-0 lg:ml-10 text-min hover:text-accentLight">
            FullstackJaden@gmail.com
          </p>
        </div>
      </div>
    </div>
  )
}
