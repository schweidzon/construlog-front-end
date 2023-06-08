"use client";

import Head from "next/head";
import { useContext, useState } from "react";
import axios from "axios";
import api from "../../services/api";
import { useRouter } from "next/navigation";
import AppContext from "@/contexts/AppContext";
import Link from "next/link";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const context = useContext(AppContext);

  async function login() {
    try {
      const resp = await api.post(`/signin`, { email, password });

      const user = resp.data;
      context.setUser(user);

      alert("Login feito com sucesso");
      await checkClientOrAdm(resp.data.user.id, resp.data.user.user_type);
      console.log("poi");
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === `Request failed with status code 409`)
          alert("Email ou senha incorretos");
        if (error.message === "Request failed with status code 404")
          alert("Email ou senha incorretos");
        setPassword("");
        setEmail("");
      }
    }
  }

  async function checkClientOrAdm(userId: number, userType: string) {
    try {
      if (userType === "admin") {
        await api.get("/admins", {
          params: { user_id: userId },
        });
        
        router.push("/constructions");
      } else {
        await api.get("/clients", {
          params: { user_id: userId },
        });
       console.log('io')
        router.push("/constructions/client");
      }
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Request failed with status code 404") {
          if (userType === "admin") {
            router.push("/admin-signup");
          } else {
            router.push("/client-signup");
          }
        }
      }
    }
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
            Bem vindo de volta!
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST" onSubmit={login}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
              <p>Não tem cadastro? </p>
              <Link
                href="/signup"
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-5"
              >
                Cadastre-se!
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
