"use client";

import React, { useRef } from "react";

type FooterPhysicsProps = {
  boardTextureURLs: string[];
  className?: string;
};

export function FooterPhysics({ className }: FooterPhysicsProps) {
  const scene = useRef<HTMLDivElement>(null);

  return <div ref={scene} className={className} />;
}
