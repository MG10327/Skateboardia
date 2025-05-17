import React from "react";
import { createClient } from "@/prismicio";
import Link from "next/link";
import { ButtonLink } from "./ButtonLink";

export async function Header() {
  const client = createClient();
  await client.getSingle("settings");

  return (
    <div className="header absolute left-0 right-0 top-0 z-50 ~h-32/48 ~px-4/6 ~py-4/6 hd:h-32">
      <Link href="/" >Logo</Link>
      <nav>
        <ul>
          <li>
            Boards
          </li>
        </ul>
      </nav>

      <div>
        <ButtonLink href="" icon="cart" color="purple" aria-label="Cart (1)">
          Cart (1)
        </ButtonLink>
      </div>
    </div>
  );
}
