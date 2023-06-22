"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import api from "../../../../services/api";
import { LogOutHeader } from "@/components/LogOutHeader";

export default function DiaryLog() {
  const router = useRouter();

  const pathname = usePathname();
  const pathArr = pathname.split("/");
  const id = pathArr[pathArr.length - 1];

  const [diaryLog, setDiaryLog] = useState<DiaryLog>();

  type DiaryLog = {
    activities: Activities[];
    construcion_id: number;
    employees_diary: Employees[];
  };

  type Employees = {
    id: number;
    quantity: number;
    construction_diary_id: number;
    job: string;
  };

  type Activities = {
    id: number;
    description: string;
    construction_diary_id: number;
  };

  useEffect(() => {
    api
      .get(`/constructions-diary/diary/${id}`)
      .then((res) => setDiaryLog(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(diaryLog);

  return (
    <>
      <LogOutHeader />
      <div className="w-full overflow-hidden rounded-lg shadow-xs flex p-20 mt-20">
        <div className="w-full overflow-x-auto flex flex-col gap-10">
          <table className="w-full whitespace-no-wrap">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                <th
                  className="px-4 py-3 border border-solid border-black border-1 text-center bg-gray-300 text-base"
                  colSpan="2"
                >
                  Mão de obra
                </th>
              </tr>
              <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                <th className="px-4 text-base py-3 border border-solid border-black border-1">
                  Função
                </th>
                <th className="px-4 text-base py-3 border border-solid border-black border-1">
                  Quantidade
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
              {diaryLog?.employees_diary.map((e, i) => (
                <tr
                  className="text-gray-700 dark:text-gray-400 border border-solid border-black border-1"
                  key={e.id}
                >
                  <td className="px-4 py-3 border border-solid border-black border-1">
                    {e.job}
                  </td>
                  <td className="px-4 py-3 border border-solid border-black border-1">
                    {e.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <table className="w-full whitespace-no-wrap">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                <th className="px-4 py-3 border border-solid border-black border-1 text-center bg-gray-300 text-base">
                  Atividades
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
              {diaryLog?.activities.map((e, i) => (
                <tr
                  className="text-gray-700 dark:text-gray-400 border border-solid border-black border-1"
                  key={e.id}
                >
                  <td className="px-4 py-3 border border-solid border-black border-1">
                    {e.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex items-center justify-center">
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
