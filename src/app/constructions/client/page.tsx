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
  
     
      <table className="w-6/12 whitespace-no-wrap m-auto min-w-[300px] mt-20">
        <thead>
          <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
            <th
              className="px-4 py-3 border border-solid border-black border-1 text-center bg-gray-300 text-base"
              colSpan="2"
            >
              Obras
            </th>
          </tr>
          <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
            <th className="px-4 text-base py-3 border border-solid border-black border-1">
              Nome da obra
            </th>
            <th className="px-4 text-base py-3 border border-solid border-black border-1">
              Responsável
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
          {constructions.map((c: any) => (
            <tr className="text-gray-700 dark:text-gray-400 border border-solid border-black border-1">
              <td className="px-4 py-3 border border-solid border-black border-1">
                <Link href={`/constructions-diary/${c.id}`}>{c.name}</Link>
              </td>

              <td className="px-4 py-3 border border-solid border-black border-1">
                <Link href={`/constructions-diary/${c.id}`}>
                  {c.admins.name}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
