import React from 'react'

// Importing images
import awwwards from '~/assets/images/about/awwwards.png'
import botw from '~/assets/images/about/botw.png'
import palworld from '~/assets/images/about/palworld.png'
import minecraft from '~/assets/images/about/minecraft.png'
import firefly from '~/assets/images/about/firefly.png'
import queensGambit from '~/assets/images/about/queensGambit.png'
import family from '~/assets/images/about/family2.png'
import dogs from '~/assets/images/about/dogs.png'

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
    <div>
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
      <InterestSpan name="dogs" image={dogs} />, cooking, drawing or training.
    </div>
  )
}
