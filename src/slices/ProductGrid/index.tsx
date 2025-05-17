import { Content, isFilled } from "@prismicio/client";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";

import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { SkateboardProduct } from "./SkateboardProduct";
import { SlideIn } from "@/components/SlideIn";


export type ProductGridProps = SliceComponentProps<Content.ProductGridSlice>

const ProductGrid = ({slice} : ProductGridProps) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Heading className='text-center bg-grand-gray' >
        <PrismicRichText field={slice.primary.heading} />
      </Heading>

      <div className="text-center ~mb-6/10">
        <PrismicRichText field={slice.primary.body} />
      </div>

      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {slice.primary.product.map(
          ({ skateboard }) =>
            isFilled.contentRelationship(skateboard) && (
              <SkateboardProduct key={skateboard.id} id={skateboard.id} />
            )
        )}
      </div>


    </Bounded>
  )
}

export default ProductGrid