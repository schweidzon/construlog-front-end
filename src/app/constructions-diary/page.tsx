"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import api from "../../services/api"
import Link from "next/link";

export default function Diary() {
  const [constructionDiary, setConstructionDiary] = useState([]);

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
      <Link href={`/constructions-diary/signup/${id}`}>Registrar diário</Link>
      <div>{!constructionDiary ? <div>N tem</div> : 
       <ul className="bg-gray-100 rounded w-6/12 divide-y divide-gray-900 divide-opacity-25 ">
       {constructionDiary.map((c: any) => (
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

      }</div>
    </>
  );
}
