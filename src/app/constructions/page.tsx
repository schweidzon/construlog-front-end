"use client";
import AppContext from "@/contexts/AppContext";
import Head from "next/head";
import { useContext } from "react";

export default function Home() {
  const { user } = useContext(AppContext);
 
  return (
    <>
      <Head>
        <title>Diários</title>
      </Head>
      <div>Você esta na parte de obras {user.user.email}</div>
    </>
  );
}
