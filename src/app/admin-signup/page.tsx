"use client";
import AppContext from "@/contexts/AppContext";
import Head from "next/head";
import Link from "next/link";
import { useContext, useState } from "react";
import api from "../../services/api";
import { useRouter } from "next/navigation";

export default function Home() {
  const { user } = useContext(AppContext);
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const router = useRouter()
  console.log(user)

  async function registerAdmmin() {
    const result = await api.post("/admins/signup", {name, function: job, user_id: user.id})
    router.push("/constructions")

  }

  return (
    <>
      <Head>
        <title>Diários</title>
      </Head>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://image.pngaaa.com/510/205510-small.png"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Bem vindo de volta!
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={registerAdmmin}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="name"
                  autoComplete="name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="job"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Sua profissão
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="job"
                  name="job"
                  type="job"
                  autoComplete="current-job"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setJob(e.target.value)}
                  value={job}
                />
              </div>
              <div className="mt-2"></div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Registrar
              </button>
          
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
