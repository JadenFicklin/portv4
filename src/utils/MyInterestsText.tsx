import React from 'react'

// Importing images
import awwwards from '~/assets/images/about/awwwards.jpg'
import botw from '~/assets/images/about/botw.jpg'
import palworld from '~/assets/images/about/palworld.jpg'
import minecraft from '~/assets/images/about/minecraft.jpg'
import firefly from '~/assets/images/about/firefly.jpg'
import queensGambit from '~/assets/images/about/queensGambit.jpg'
import family from '~/assets/images/about/family2.jpg'
import dogs from '~/assets/images/about/dogs.jpg'

type MyInterestsTextProps = {
  setImage: (image: string) => void
}

export const MyInterestsText: React.FC<MyInterestsTextProps> = ({
  setImage,
}) => {
  const InterestSpan = ({ name, image }: { name: string; image: string }) => (
    <span
      onMouseEnter={() => setImage(image)}
      className="font-semibold cursor-pointer"
    >
      {name}
    </span>
  )

  return (
    <div className="max-w-[600px] md:ml-12">
      Besides admiring websites on{' '}
      <InterestSpan name="Awwwards.com" image={awwwards} /> I enjoy playing open
      world games like <InterestSpan name="Breath of the Wild" image={botw} />,{' '}
      <InterestSpan name="Palworld" image={palworld} />, and{' '}
      <InterestSpan name="MineCraft" image={minecraft} /> or watching shows like{' '}
      <InterestSpan name="Firefly" image={firefly} /> and The{' '}
      <InterestSpan name="Queen’s Gambit" image={queensGambit} />.<br />
      <br />
      When I’m not at the computer you can find me spending time with my{' '}
      <InterestSpan name="family" image={family} /> and{' '}
      <InterestSpan name="dogs" image={dogs} />, cooking or drawing.
    </div>
  )
}
