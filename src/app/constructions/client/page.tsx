"use client";
import AppContext from "@/contexts/AppContext";
import Head from "next/head";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import api from "../../../services/api";

export default function Constructions() {
  const { user } = useContext(AppContext);
  const [constructions, setConstructions] = useState([])

  useEffect(()=> {
    api.get("/constructions", {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    })
    .then(res => setConstructions(res.data))
  }, [])
  type Construction = {
    id: number,
    admin_id: number,
    client_id: number,
    name: string
  };
  console.log(constructions)
  return (
    <>
      <Head>
        <title>Construções</title>
      </Head>
        
      <div>Você esta na parte de obras do cliente</div>
      {constructions.map((c: Construction ) => <div>{c.name}</div>)}
    </>
  );
}
