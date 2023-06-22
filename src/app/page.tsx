import { About } from "@/components/About";
import { Header } from "@/components/Header";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <body className="h-screen text-white gradient">
        <Header />
        <About />
      </body>
    </>
  );
}
