import React, { Suspense } from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return <Suspense>{props.children}</Suspense>;
};

export default Layout;
