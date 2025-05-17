"use client";

import { ImageField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";
import React, { useEffect, useRef } from "react";

type Props = {
  foregroundImage: ImageField;
  backgroundImage: ImageField;
  className?: string;
};

export function ParallaxImage({
  foregroundImage,
  backgroundImage,
  className,
}: Props) {

  return (
    <div className={clsx("grid grid-cols-1 place-items-center", className)}>
      <div
        ref={backgroundRef}
        className="col-start-1 row-start-1 transition-transform"
      >
        <PrismicNextImage field={backgroundImage} alt="" className="w-11/12" />
      </div>

      <div
        ref={foregroundRef}
        className="col-start-1 row-start-1 transition-transform h-full w-full place-items-center"
      >
        <PrismicNextImage
          field={foregroundImage}
          alt=""
          imgixParams={{ height: 600 }}
          className="h-full max-h-[500px] w-auto"
        />
      </div>
    </div>
  );
}