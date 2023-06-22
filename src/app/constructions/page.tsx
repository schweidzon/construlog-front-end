"use client";
import AppContext from "@/contexts/AppContext";
import Head from "next/head";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import api from "../../services/api";
import { BiRightArrow } from "react-icons/bi";
import { LogOutHeader } from "@/components/LogOutHeader";

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
      .then((res) => setConstructions(res.data));
  }, []);
  type Construction = {
    id: number;
    admin_id: number;
    client_id: number;
    name: string;
    clients: Clients;
  };
  type Clients = {
    id: number;
    user: number;
    name: string;
  };
  console.log(constructions);
  return (
    <>
     <LogOutHeader/>

      <table className="w-6/12 whitespace-no-wrap m-auto min-w-[300px] mt-40 ">
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
              Nome
            </th>
            <th className="px-4 text-base py-3 border border-solid border-black border-1">
              Cliente
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
          {constructions.map((c: Construction) => (
            <tr className="text-gray-700 dark:text-gray-400 border border-solid border-black border-1">
              <td className="px-4 py-3 border border-solid border-black border-1">
                <Link href={`/constructions-diary/${c.id}`}>{c.name}</Link>
              </td>

              <td className="px-4 py-3 border border-solid border-black border-1">
                <Link href={`/constructions-diary/${c.id}`}>
                  {c.clients.name}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-center items-center gap-10 flex-col mt-10 mb-10">
        <button>
          <Link
            href={"/constructions/signup"}
            className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            Registrar nova obra
          </Link>
        </button>
      </div>
    </>
  );
}
