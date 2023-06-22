'use client'
import Link from "next/link";
import MenuSanduiche from "./MobileMenu";
import { useContext } from "react";
import AppContext from "@/contexts/AppContext";

export function LogOutHeader() {
    const { user } = useContext(AppContext);
  return (
    <nav id="header" className="fixed w-full z-30 top-0 text-white " >
      <div className="w-full mx-auto flex flex-wrap items-center justify-between mt-0 py-2 bg-gray-200 shadow-md" >
        <h1 className="text-black font-bold text-[40px]  font-sans">
            {user.user.user_type === 'admin' ? 
            <Link href={"/constructions"}>
          Construlog
            </Link>
            :
            <Link href={"/constructions/client"}>
            Construlog
              </Link>
            
            
        }
        </h1>

        <div
          className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <Link
                className="inline-block py-2 px-4 text-black font-bold no-underline"
                href="/"
              >
                Sair
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  );
}
