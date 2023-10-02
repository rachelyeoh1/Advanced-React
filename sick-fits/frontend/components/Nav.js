import React from "react";
import Link from "next/link";
import Products from "./Products";
// import { useUser } from "./User";
// import NavStyles from "./styles/NavStyles";

const Nav = () => {
  // const user = useUser();

  return (
    // <NavStyles>
    <nav>
      <Link href="/products">Products</Link>
      <Link href="/sell">Sell</Link>
      <Link href="/orders">Orders</Link>
      <Link href="/account">Account</Link>
    </nav>
  );
};

export default Nav;
