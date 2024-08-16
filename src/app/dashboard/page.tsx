"use client"

import React from "react";
import { SuspectTable } from "./suspect-table";
import { useGetSuspects } from "@/hooks/api/get-suspects";

type Props = {};

const Page = (props: Props) => {
  const { data } = useGetSuspects();

  return (
    <div className="w-full px-20 p-6">
      Page
      <SuspectTable data={data} />
    </div>
  );
};

export default Page;
