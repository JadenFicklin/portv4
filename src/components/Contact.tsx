import { cn } from '~/utils/cn'
import { Button } from '~/utils/Button'
import Swal from 'sweetalert2'

export const Contact = () => {
  const inputStyling =
    'w-full pt-2 pb-3 mt-5 text-custom duration-200 bg-opacity-0 border-b border-opacity-50 outline-none bg-accent border-custom hover:border-opacity-100 focus:border-opacity-100 placeholder-custom'

  const { VITE_EMAIL_ACCESS_KEY } = import.meta.env

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    formData.append('access_key', VITE_EMAIL_ACCESS_KEY)

    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then((res) => res.json())

    if (res.success) {
      Swal.fire({
        title: 'Success!',
        text: 'Message sent successfully!',
        icon: 'success',
      })
    }
  }

  return (
    <>
      <div className="relative grid w-full border-t lg:grid-cols-2 bg-accent z-20 text-min border-custom min-h-[calc(100vh-64px)]">
        {/* Section for the headline */}
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
            onSubmit={onSubmit}
            className="flex flex-wrap w-10/12 mx-auto h-max"
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
            <Button text="Submit Message" />
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
                className="relative top-0 mx-2 duration-150 hover:-top-1 text-custom hover:text-hover-accent"
              >
                Github
              </a>{' '}
              /
              <a
                href="https://www.linkedin.com/in/jaden-ficklin-b1686a21a/"
                target="_blank"
                rel="noreferrer"
                className="relative top-0 mx-2 duration-150 hover:-top-1 text-custom hover:text-hover-accent"
              >
                Linkedin
              </a>{' '}
              /
              <a
                href="https://docs.google.com/document/d/1QVo9-KNAfNvJGrWKi83bLLg9VnD8pmwkMbX9GV65tzc/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="relative top-0 mx-2 duration-150 hover:-top-1 text-custom hover:text-hover-accent"
              >
                Resume
              </a>
            </div>
            <a
              href="mailto:fullstackjaden@gmail.com"
              className="relative top-0 mt-4 duration-150 cursor-pointer hover:-top-1 lg:mt-0 lg:ml-10 text-custom hover:text-hover-accent"
            >
              FullstackJaden@gmail.com
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
