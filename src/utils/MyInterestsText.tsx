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
  const InterestSpan = ({
    name,
    image,
    link,
  }: {
    name: string
    image: string
    link: string
  }) => (
    <a
      onMouseEnter={() => setImage(image)}
      className="font-semibold cursor-pointer"
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      {name}
    </a>
  )

  return (
    <div className="max-w-[900px] md:ml-12">
      Besides admiring websites on{' '}
      <InterestSpan
        name="Awwwards.com"
        image={awwwards}
        link="https://www.awwwards.com/"
      />{' '}
      I enjoy playing open world games like{' '}
      <InterestSpan
        name="Breath of the Wild"
        image={botw}
        link="https://zelda.nintendo.com/breath-of-the-wild/"
      />
      ,{' '}
      <InterestSpan
        name="Palworld"
        image={palworld}
        link="https://www.pocketpair.jp/palworld"
      />
      , and{' '}
      <InterestSpan
        name="MineCraft"
        image={minecraft}
        link="https://www.minecraft.net/en-us"
      />{' '}
      or watching shows like{' '}
      <InterestSpan
        name="Firefly"
        image={firefly}
        link="https://www.imdb.com/title/tt0303461/"
      />{' '}
      and The{' '}
      <InterestSpan
        name="Queen’s Gambit"
        image={queensGambit}
        link="https://www.imdb.com/title/tt10048342/"
      />
      .<br />
      <br />
      When I’m not at the computer you can find me spending time with my{' '}
      <span onMouseEnter={() => setImage(family)} className="font-semibold">
        family
      </span>{' '}
      and{' '}
      <span onMouseEnter={() => setImage(dogs)} className="font-semibold">
        dogs
      </span>{' '}
      , cooking or drawing.
    </div>
  )
}
