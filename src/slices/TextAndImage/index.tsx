import { Bounded } from '@/components/Bounded'
import { ButtonLink } from '@/components/ButtonLink'
import { Heading } from '@/components/Heading'
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

      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-24">
        <div className={clsx(  "flex flex-col items-center gap-8 text-center md:items-start md:text-left",
            slice.variation === "imageOnLeft" && "md:order-2"  )} >

          <Heading size='lg' as="h2" >
            <PrismicRichText field={slice.primary.heading}/>
          </Heading>

          <div className="max-w-md text-lg leading-relaxed">
            <PrismicRichText field={slice.primary.body}/>
          </div>

          <ButtonLink field={slice.primary.button} color={theme === 'Lime' ? 'orange' : 'lime'}>
            {slice.primary.button.text}
          </ButtonLink>
        </div>


          <PrismicNextImage field={slice.primary.background_image}/>
          <PrismicNextImage field={slice.primary.foreground_image}/>

      </div>

    </Bounded>
  )
}

export default index