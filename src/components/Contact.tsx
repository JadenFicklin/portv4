import React, { useRef, useState, FormEvent } from 'react'
import { cn } from '~/utils/cn'
import emailjs from '@emailjs/browser'
import { BsFillCheckCircleFill } from 'react-icons/bs'

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null)
  const [success, setSuccess] = useState(false)
  const inputStyling =
    'w-full pt-2 pb-3 mt-5 text-custom duration-200 bg-opacity-0 border-b border-opacity-50 outline-none bg-accent border-custom hover:border-opacity-100 focus:border-opacity-100'

  const messageSent = () => {
    setSuccess(true)
    setTimeout(() => {
      setSuccess(false)
    }, 2000)
  }

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    // Use FormEvent<HTMLFormElement> here
    e.preventDefault()

    const { VITE_SERVICE_ID, VITE_TEMPLATE_ID, VITE_PUBLIC_KEY } = import.meta
      .env

    if (form.current) {
      emailjs
        .sendForm(
          VITE_SERVICE_ID!,
          VITE_TEMPLATE_ID!,
          form.current,
          VITE_PUBLIC_KEY!,
        )
        .then(
          (result) => {
            messageSent()
            console.log(result.text)
            console.log('message sent successfully!')
            e.currentTarget.reset() // Use currentTarget for type safety
          },
          (error) => {
            console.log('message did not send')
            console.log(error.text)
          },
        )
    }
  }

  return (
    <>
      <div
        className={cn(
          success
            ? 'bg-background border-green border-[1px]  w-96 h-20 shadow-xl rounded-lg fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-wrap content-center justify-center duration-300 z-50'
            : 'hidden',
        )}
      >
        <p className="text-[22px] text-green h-min">Successfully sent! </p>
        <div className="w-8 h-8 ml-6">
          <BsFillCheckCircleFill className="inline w-full h-full fill-green" />
        </div>
      </div>
      <div className="relative grid w-full border-t lg:grid-cols-2 bg-accent text-min border-custom min-h-[calc(100vh-64px)]">
        {/* Section for the catchy headline */}
        <div className="flex items-center py-20 pl-5 border-b md:pl-16 lg:pl-10 lg:border-r lg:border-b-0 border-custom">
          <h2 className="text-3xl text-custom xs:text-4xl sm:text-5xl md:text-8xl">
            Lets work
            <br />
            together
          </h2>
        </div>

        {/* Form section for user inputs */}
        <div className="w-full py-20 border-b border-custom h-max">
          <form
            className="flex flex-wrap w-10/12 mx-auto h-max"
            ref={form}
            onSubmit={sendEmail}
          >
            {/* Input fields for user details */}
            <input
              placeholder="Name"
              required
              type="text"
              name="user_name"
              className={inputStyling}
            />
            <input
              placeholder="Email"
              required
              type="email"
              name="email_address"
              className={inputStyling}
            />
            <input
              placeholder="Company"
              required
              name="message"
              type="text"
              className={inputStyling}
            />
            <textarea
              placeholder="Message"
              required
              name="message"
              className={cn(inputStyling, 'min-h-32 max-h-52 pb-20 ')}
            />
            <button
              type="submit"
              className="px-6 py-1 mt-10 rounded-full bg-accentLight text-max"
            >
              Submit Message
            </button>
          </form>
        </div>

        {/* contact information*/}
        <div className="right-0 w-max px-5 mx-auto lg:px-0 py-14 lg:py-0 lg:absolute bottom-5 lg:left-[53%] lg:mx-0">
          <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-start lg:items-end">
            <div className="flex justify-center cursor-pointer lg:justify-start text-custom">
              <a
                href="https://github.com/JadenFicklin"
                target="_blank"
                rel="noreferrer"
                className="mx-2 duration-150 text-custom hover:text-hover-accent"
              >
                Github
              </a>{' '}
              /
              <a
                href="https://www.linkedin.com/in/jaden-ficklin-b1686a21a/"
                target="_blank"
                rel="noreferrer"
                className="mx-2 duration-150 text-custom hover:text-hover-accent"
              >
                Linkedin
              </a>{' '}
              /
              <a
                href="https://docs.google.com/document/d/1QVo9-KNAfNvJGrWKi83bLLg9VnD8pmwkMbX9GV65tzc/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="mx-2 duration-150 text-custom hover:text-hover-accent"
              >
                Resume
              </a>
            </div>
            <a
              href="mailto:fullstackjaden@gmail.com"
              className="mt-4 duration-150 cursor-pointer lg:mt-0 lg:ml-10 text-custom hover:text-hover-accent"
            >
              FullstackJaden@gmail.com
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
