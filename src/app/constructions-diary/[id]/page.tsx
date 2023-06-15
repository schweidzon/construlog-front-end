"use client";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import api from "../../../services/api";
import Link from "next/link";
import AppContext from "@/contexts/AppContext";

export default function Diary() {
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

  return (
    <>
      {user.user.user_type === "admin" && (
        <Link href={`/constructions-diary/diary/create/${id}`}>
          Registrar diário
        </Link>
      )}

      <div>
        {!constructionDiary ? (
          <div>N tem</div>
        ) : (
          <ul className="bg-gray-100 rounded w-6/12 divide-y divide-gray-900 divide-opacity-25 ">
            {constructionDiary.map((c: any) => (
              <li className="px-4 py-2 flex justify-between items-center mb-5 text-gray-800">
                <div className="flex justify-around gap-20 items-center space-x-4 w-full">
                  <div className="flex-shrink-0">
                    <p>{c.date.split("T")[0].replaceAll("-", "/")}</p>
                  </div>

                  {c.activities.length > 0 ? (
                    <Link href={`/constructions-diary/diary/${c.id}`}>
                      <svg
                        className="h-5 w-60"
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
                  ) : user.user.user_type !== "admin" ? (
                    <div>Sem log registrado no momento</div>
                  ) : (
                    <Link href={`/constructions-diary/signup/${c.id}`}>
                      Registrar log
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
