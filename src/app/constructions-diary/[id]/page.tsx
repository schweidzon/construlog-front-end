"use client";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import api from "../../../services/api";
import Link from "next/link";
import AppContext from "@/contexts/AppContext";
import { LogOutHeader } from "@/components/LogOutHeader";

export default function Diary() {
  const router = useRouter();
  const [constructionDiary, setConstructionDiary] = useState([]);
  const { user } = useContext(AppContext);

  const pathname = usePathname();
  const pathArr = pathname.split("/");
  const id = pathArr[pathArr.length - 1];

  useEffect(() => {
    api
      .get(`/constructions-diary/${id}`)
      .then((res) => setConstructionDiary(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(constructionDiary);

  return (
    <>
    <LogOutHeader/>
    <div className="mt-20 flex flex-col items-center w-6/12 justify-center m-auto min-w-[300px] mt-40">
      <>
        {constructionDiary.length === 0 ? (
          <div>Não tem nenhum resgistro de diário</div>
        ) : (
          <table className="w-full whitespace-no-wrap">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                <th className="px-4 py-3 border border-solid border-black border-1 text-center bg-gray-300 text-base">
                  Diário de obra
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
              {constructionDiary.map((d: any) => (
                <tr
                  className="text-gray-700 dark:text-gray-400 border border-solid border-black border-1"
                  key={d.id}
                >
                  <td className="px-4 py-3 border border-solid border-black border-1 flex justify-between">
                    {d.date.split("T")[0].replaceAll("-", "/")}
                    {d.activities.length > 0 ? (
                      <Link href={`/constructions-diary/diary/${d.id}`}>
                        <h1>Abrir diário</h1>
                      </Link>
                    ) : user.user.user_type !== "admin" ? (
                      <div>Sem log registrado no momento</div>
                    ) : (
                      <Link
                        className="cursor"
                        href={`/constructions-diary/signup/${d.id}`}
                      >
                        Registrar diário
                      </Link>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </>

      {user.user.user_type === "admin" && (
        <Link
          className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          href={`/constructions-diary/diary/create/${id}`}
        >
          Registrar novo diário
        </Link>
      )}
      <button
        className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
        onClick={() => router.back()}
      >
        Voltar
      </button>
    </div>
    </>
    
  );
}
