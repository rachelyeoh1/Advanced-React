import React from "react";
import Link from "next/link";
// import { useUser } from "./User";
// import NavStyles from "./styles/NavStyles";

const Nav = () => {
  // const user = useUser();

  return (
    // <NavStyles>
    <nav>
      <Link href="/products">products</Link>
      <Link href="/sell">sell</Link>
      <Link href="/orders">orders</Link>
      <Link href="/account">account</Link>
    </nav>
  );
};

export default Nav;
