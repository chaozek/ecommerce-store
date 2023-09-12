import * as React from "react";
import { Container } from "./ui/Container";
import Link from "next/link";
import { MainNav } from "./MainNav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";

export interface INavBarProps {}

export async function NavBar(props: INavBarProps) {
  const categories = await getCategories();
  console.log(categories, "CATSS");
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p>STORE</p>
          </Link>
          <MainNav data={categories ? categories : []} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
}
