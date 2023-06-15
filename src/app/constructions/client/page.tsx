"use client";
import AppContext from "@/contexts/AppContext";
import Head from "next/head";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import api from "../../../services/api";
const imageUrl = "http://localhost:5000/files/test.jpg";

export default function Constructions() {
  const { user } = useContext(AppContext);
  const [constructions, setConstructions] = useState([]);

  useEffect(() => {
    api
      .get("/constructions", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setConstructions(res.data);
      });
  }, []);
  type Construction = {
    id: number;
    admin_id: number;
    client_id: number;
    name: string;
  };
  console.log(constructions);

  return (
    <>
      <Head>
        <title>Construções</title>
      </Head>

      <div>Você esta na parte de obras do cliente</div>

      {
        <ul className="bg-gray-100 rounded w-6/12 divide-y divide-gray-900 divide-opacity-25 ">
          {constructions.map((c: any) => (
            <Link href={`/constructions-diary/${c.id}`} >
            <li className="px-4 py-2 flex justify-between items-center mb-5 text-gray-800">
              <div className="flex justify-around gap-20 items-center space-x-4 w-full">
                <div className="flex flex-col">
                  <label>Obra</label>
                  {c.name}
                </div>
                <div className="flex flex-col items-center gap-2">
                  <label>Responsável</label>
                  {c.admins.name}
                </div>
              </div>
            </li>
            </Link>
          ))}
        </ul>
      }

      
    </>
  );
}
