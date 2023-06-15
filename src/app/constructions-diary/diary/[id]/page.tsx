"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import api from "../../../../services/api";



export default function DiaryLog() {
  const router = useRouter();

  const pathname = usePathname();
  const pathArr = pathname.split("/");
  const id = pathArr[pathArr.length - 1];

  const [diaryLog, setDiaryLog] = useState<DiaryLog>()

  type DiaryLog= {
    activities: Activities[],
    construcion_id: number,
    employees_diary: Employees[]
  }

  type Employees = {
    id: number,
    quantity: number,
    construction_diary_id: number,
    job: string

  }

  type Activities = {
    id: number,
    description: string,
    construction_diary_id: number
  }

  useEffect(() => {
    api
      .get(`/constructions-diary/diary/${id}`)
      .then((res) => setDiaryLog(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(diaryLog)

  return (
    <>
    <div>
        <h1>Mão de obra</h1>
        {diaryLog?.employees_diary.map((e) => <div>{e.job}</div>)}
     </div>
     <div>
        <h1>Atividades</h1>
        {diaryLog?.activities.map((a) => <div>{a.description}</div>)}
     </div>
     <button onClick={() => router.back()}>Voltar</button>
      
    </>
  );
}
