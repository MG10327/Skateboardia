import { Bounded } from '@/components/Bounded'
import { Content } from '@prismicio/client'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'
import clsx from 'clsx'
import React from 'react'

export type TextAndImageProps = SliceComponentProps<Content.TextAndImageSlice>



const index = ({slice}: TextAndImageProps): JSX.Element => {
  const theme = slice.primary.theme // easier to reference like this

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={clsx(
        slice.primary.theme === 'Blue' && 'bg-texture bg-brand-blue text-white',
        slice.primary.theme === 'Orange' && 'bg-texture bg-brand-orange text-white',
        slice.primary.theme === 'Navy' && 'bg-texture bg-brand-Navy text-white',
        slice.primary.theme === 'Lime' && 'bg-texture bg-brand-lime',
      )}
    >


      {slice.primary.theme}

      <PrismicRichText field={slice.primary.heading}/>
      <PrismicRichText field={slice.primary.body}/>
      <PrismicNextLink field={slice.primary.button}/>
      <PrismicNextImage field={slice.primary.background_image}/>
      <PrismicNextImage field={slice.primary.foreground_image}/>
    </Bounded>
  )
}

export default index