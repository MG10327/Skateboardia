import React from 'react'
import { asImageSrc, Content } from "@prismicio/client";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import { PrismicNextLink } from '@prismicio/next';
import { Bounded } from '@/components/Bounded';
import { Heading } from '@/components/Heading';
import { ButtonLink } from '@/components/ButtonLink';


export type HeroProps = SliceComponentProps<Content.HeroSlice>


const Hero = ({slice}: HeroProps) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-brand-pink relative h-dvh overflow-hidden text-zinc-800 bg-texture"
    >
      <div className="grid absolute inset-0 mx-auto mt-24 max-w-6xl grid-rows-2 place-items-end px-6 ~py-10/16">

      </div>
      <Heading size="lg" className="relative max-w-2xl place-self-start">
        <PrismicRichText field={slice.primary.heading} />
      </Heading>

      <div className="flex relative w-full flex-col items-center justify-between ~gap-2/4 lg:flex-row">
      <div className="max-w-[45ch] font-semibold ~text-lg-xl">

      </div>
        <PrismicRichText field={slice.primary.body} />
      </div>

      <ButtonLink field={slice.primary.button} icon='skateboard' size='lg' className='z-20 mt-2 block' >
        {slice.primary.button.text}
      </ButtonLink>

    </Bounded>
  )
}

export default Hero