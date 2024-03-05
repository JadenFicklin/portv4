import devmountain from '~/assets/images/about/devmountain.jpg'
import graduate from '~/assets/images/about/certificate.jpg'

type HowItStartedProps = {
  setImage: (image: string) => void
}

export const HowItStartedText: React.FC<HowItStartedProps> = (props) => {
  const { setImage } = props

  return (
    <>
      <div className="max-w-[900px] md:ml-12">
        Back in 2021, I searched heavily for a career I would feel passionate
        about. I really enjoy creative thinking and solving complex problems so
        when I tried my hand at website development it was a perfect fit.{' '}
        <br></br>
        <br></br>As a dedicated{' '}
        <a
          onMouseEnter={() => setImage(devmountain)}
          className="font-semibold cursor-pointer"
          href="https://devmountain.com/"
          target="_blank"
          rel="noreferrer"
        >
          Devmountain
        </a>{' '}
        <a
          href="https://www.linkedin.com/feed/update/urn:li:activity:6918308644237312000/"
          target="_blank"
          rel="noreferrer"
          onMouseEnter={() => setImage(graduate)}
          className="font-semibold cursor-pointer"
        >
          Graduate
        </a>{' '}
        I have a passion for seeing data translated into beautiful UI. I thrive
        when I can see myself and team members achieve our shared professional
        goals.
      </div>
    </>
  )
}
