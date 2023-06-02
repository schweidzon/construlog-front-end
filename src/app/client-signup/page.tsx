import AppContext from "@/contexts/AppContext";
import Head from "next/head";
import { useContext } from "react";

export default function Home() {
  const { user } = useContext(AppContext);
  <Head>
    <title>Diários</title>
  </Head>;
  return <div>Cadastre seus dados de cliente</div>;
}
