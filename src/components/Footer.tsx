import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import React from "react";
import { asImageSrc } from "@prismicio/client";

import { createClient } from "@/prismicio";
import { Logo } from "@/components/Logo";
import { Bounded } from "./Bounded";

export async function Footer() {
  const client = createClient()
  const settings = await client.getSingle('settings')

  return (
    <footer className="bg-texture bg-zinc-900 text-white overflow-hidden">
      <div className="relative h-[75vh] ~p-10/16 md:aspect-auto">
        <PrismicNextImage field={settings.data.footer_image} alt='' fill className="object-cover" width={1200} />
      {/* Image */}
      {/* Physics Boards */}
      </div>

      {/* List of links */}
    </footer>
  )


}
