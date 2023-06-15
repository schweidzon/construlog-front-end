"use client";

import Head from "next/head";
import { useContext, useState } from "react";
import api from "../../../../../services/api";
import { usePathname, useRouter } from "next/navigation";
import AppContext from "@/contexts/AppContext";
import Link from "next/link";

export default function createDiaryLog() {

  const router = useRouter();
  const [date, setDate] = useState("")
  const pathname = usePathname();
  const pathArr = pathname.split("/");
  const id = pathArr[pathArr.length - 1];

 function createDiary(e:any) {
  console.log(date)
  e.preventDefault()
   api.post(`/constructions-diary/${id}`,{date})
   .then(res => router.back())
 }

  return (
    <>
      <Head>
        <title>Construlog</title>
      </Head>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://image.pngaaa.com/510/205510-small.png"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Cadastre uma nova data no seu dia!
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST" onSubmit={createDiary} >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Escolha a data
              </label>
              <div className="mt-2">
                <input
                onChange={(e) => setDate(e.target.value)}
                  id="email"
                  name="email"
                  type="date"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  
                />
              </div>
            </div>

            

            <div>
              <button
                
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-5"
              >
                Cadastrar diário
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
