import devmountain from '~/assets/images/about/devmountain.png'
import graduate from '~/assets/images/about/certificate.png'

type HowItStartedProps = {
  setImage: (image: string) => void
}

export const HowItStartedText: React.FC<HowItStartedProps> = (props) => {
  const { setImage } = props

  return (
    <>
      <div className="max-w-[600px] md:ml-12">
        Back in 2021, I searched heavily for a career I would feel passionate
        about. I really enjoy creative thinking and solving complex problems so
        when I tried my hand at website development it was a perfect fit.{' '}
        <br></br>
        <br></br>As a dedicated{' '}
        <span
          onMouseEnter={() => setImage(devmountain)}
          className="font-semibold cursor-pointer"
        >
          Devmountain
        </span>{' '}
        <span
          onMouseEnter={() => setImage(graduate)}
          className="font-semibold cursor-pointer"
        >
          Graduate
        </span>{' '}
        I have a passion for seeing data translated into beautiful UI. I thrive
        when I can see myself and team members achieve our shared professional
        goals.
      </div>
    </>
  )
}
