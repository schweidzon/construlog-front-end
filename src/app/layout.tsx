'use client'

import AppContext from "@/contexts/AppContext";
import "./globals.css";
import { Inter } from "next/font/google";
import { useState } from "react";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] =  useState("") 
 
  return (
    <>
      <AppContext.Provider value= {{user, setUser}}>
        <html lang="pt-br">
          <body>{children}</body>
        </html>
      </AppContext.Provider>
    </>
  );
}
