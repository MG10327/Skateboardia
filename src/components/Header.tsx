import React from "react";
import { createClient } from "@/prismicio";

export async function Header() {
  const client = createClient();
  await client.getSingle("settings");

  return (
    <div className="header absolute left-0 right-0 top-0 z-50 ~h-32/48 ~px-4/6 ~py-4/6 hd:h-32" />
  );
}
