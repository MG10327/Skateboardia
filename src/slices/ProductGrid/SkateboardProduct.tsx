import { Content, createClient } from '@prismicio/client'
import React from 'react'

type Props = {
    id: string
}

export async function SkateboardProduct({id}: Props) {
    const client = createClient()
    const product = await client.getByID<Content.SkateboardDocument>(id)

    return (
    <div>SkateboardProduct</div>
  )
}

export default SkateboardProduct