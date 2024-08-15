import { Metadata } from "next";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Sign Up",
};

const Layout = (props: Props) => {
  return props.children;
};

export default Layout;
