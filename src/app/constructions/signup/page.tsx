"use client";
import AppContext from "@/contexts/AppContext";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import api from "../../../services/api";
import { useRouter } from "next/navigation";

export default function ConstructionSignUp() {
  const { user } = useContext(AppContext);
  const [clients, setClients] = useState([]);
  const [clientId, setClientId] = useState(1);
  const [name, setName] = useState("");
  const router = useRouter();

  useEffect(() => {
    api
      .get("/clients/all")
      .then((res) => setClients(res.data))
      .catch((err) => console.log(err));
  }, []);

  type Client = {
    id: number;
    name: string;
    user_id: number;
  };
  console.log(user);
  async function registerConstruction(e: any) {
    e.preventDefault();
    console.log(clientId);
    await api.post(
      "/constructions/signup",
      {
        name,
        user_id: user.user.id,
        client_id: clientId,
      },
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    router.push("/constructions");
  }

  function handleSelect(event: any) {
    const idSelecionado = event.target.value;
    console.log(idSelecionado);
    setClientId(idSelecionado);
  }

  return (
    <>
      <Head>
        <title>Registrar construção</title>
      </Head>
      <form
        className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"
        onSubmit={registerConstruction}
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Nome da obra
          </label>
          <div className="mt-2">
            <input
              onChange={(e) => setName(e.target.value)}
              id="name"
              name="name"
              type="name"
              autoComplete="off"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <p className="mt-5"> Nome do cliente</p>
        <select
          onChange={handleSelect}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-5"
        >
          {clients.map((c: Client) => (
            <option value={c.id} key={c.user_id}>
              {c.name}
              {c.id}
            </option>
          ))}
        </select>
        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-5"
          >
            Registrar obra
          </button>
        </div>
      </form>
    </>
  );
}
