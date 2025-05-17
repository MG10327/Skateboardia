import { Content, createClient, isFilled } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import React from 'react'
import { FaStar } from 'react-icons/fa6'

type Props = {
    id: string
}

export async function SkateboardProduct({id}: Props) {
    const client = createClient()
    const product = await client.getByID<Content.SkateboardDocument>(id)

    const price = isFilled.number(product.data.price) ? `${(product.data.price / 100).toFixed(2)}` : 'Price Not available'

    return (

    <div>
        <div className="flex items-center justicy-between ~text-sm/2xl">
            <span>{price}</span>
            <span className="inline-flex items-center gap-1">
                <FaStar className="text-yellow-400" /> 37
            </span>
        </div>

        <div className="-mb-1 overflow-hidden py-4">
            <PrismicNextImage alt="" field={product.data.image} width={150} />
            
        </div>
    </div>
  )
}

export default SkateboardProduct