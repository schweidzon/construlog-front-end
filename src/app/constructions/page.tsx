"use client";
import AppContext from "@/contexts/AppContext";
import Head from "next/head";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import api from "../../services/api";
import { BiRightArrow } from "react-icons/bi";

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
      <Head>
        <title>Construções</title>
      </Head>

      <div className="flex justify-center items-center gap-10 flex-col mt-10 mb-10">
        <h1>Você esta na parte de obras</h1>
        <button>
          <Link
            href={"/constructions/signup"}
            className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            Registrar nova obra
          </Link>
        </button>
      </div>
      <div className="flex justify-center">
        <ul className="bg-gray-100 rounded w-6/12 divide-y divide-gray-900 divide-opacity-25 ">
          {constructions.map((c: Construction) => (
            <li className="px-4 py-2 flex justify-between items-center mb-5 text-gray-800">
              <div className="flex justify-around gap-20 items-center space-x-4 w-full">
                <div className="flex-shrink-0">
                  <p>{c.name}</p>
                </div>
                <div className=" min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Cliente
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {c.clients.name}
                  </p>
                </div>
                <Link href={`/constructions-diary/${c.id}`}>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
