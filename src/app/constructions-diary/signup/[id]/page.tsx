"use client";
import { useEffect, useState } from "react";
import api from "../../../../services/api";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function ConstructionDiarySignUp() {

  const router = useRouter()

    const pathname = usePathname();
    const pathArr = pathname.split("/");
    const id = pathArr[pathArr.length - 1];

    console.log(id)
  type Client = {
    id: number;
    name: string;
    user_id: number;
  };
  const [clients, setClients] = useState([]);
  useEffect(() => {
    api
      .get("/clients/all")
      .then((res) => setClients(res.data))
      .catch((err) => console.log(err));
  }, []);

  const [jobInputCount, setJobInputCount] = useState(1);
  const [activityInputCount, setActivityInputCount] = useState(1);
  const [dayActivities, setDayActivities] = useState(
    Array(activityInputCount).fill("")
  );
  const [clientId, setClientId] = useState(1);
  const [jobInputValues, setJobInputValues] = useState(
    Array(jobInputCount).fill("")
  );
  const [jobQuantity, setJobQuantity] = useState(Array(jobInputCount).fill(""));

  function handleSelect(event: any) {
    event.preventDefault();
    const idSelecionado = event.target.value;
    console.log(idSelecionado);
    setClientId(idSelecionado);
  }

  const handleJobs = (index: any, value: any) => {
    const newInputValues = [...jobInputValues];
    newInputValues[index] = value;
    setJobInputValues(newInputValues);
  };

  const handleJobsQuantity = (index: any, value: any) => {
    const newInputValues = [...jobQuantity];
    newInputValues[index] = value;
    setJobQuantity(newInputValues);
  };

  const handleActivities = (index: any, value: any) => {
    const newInputValues = [...dayActivities];
    newInputValues[index] = value;
    setDayActivities(newInputValues);
  };

  const jobs = [];
  for (let i = 0; i < jobInputCount; i++) {
    jobs.push(
      <div className="flex flex-col" key={i}>
        <div className="flex justify-between">
          <label>Operário {i + 1}</label>
          <label>Quantidade</label>
        </div>
        <div className="flex justify-between gap-5">
          <input
            onChange={(e) => handleJobs(i, e.target.value)}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />

          <select onChange={(e) => handleJobsQuantity(i, e.target.value)}>
            <option></option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
      </div>
    );
  }

  const activities = [];
  for (let i = 0; i < activityInputCount; i++) {
    activities.push(
      <div key={i}>
        <label>Atividade {i + 1}</label>
        <input
          onChange={(e) => handleActivities(i, e.target.value)}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    );
  }

  const jobsObjt = jobInputValues.map((item, i) => {
    return {
      job: jobInputValues[i],
      quantity: jobQuantity[i],
    };
  });

  const data = {
    jobsObjt,
    dayActivities,
    clientId: clientId,
  };

  function createDiaryLog(e: any) {
    e.preventDefault();

    api.post(`/constructions-diary/signup/${id}`, {data})
    .then(res => router.back())
  }
  console.log(data)
  return (
    <>
      <form onSubmit={createDiaryLog} className="mt-10 sm:mx-auto sm:max-w-sm">
        <div className="border-solid border-2 border-indigo-600 p-5 w-11/12">
          <h1>Mão de obra</h1>

          {jobs}
          <h1
            className="cursor-pointer"
            onClick={() => setJobInputCount(jobInputCount + 1)}
          >
            +
          </h1>
          <h1
            onClick={() => setJobInputCount(jobInputCount - 1)}
            className="cursor-pointer"
          >
            -
          </h1>
        </div>
        <div className="border-solid border-2 border-indigo-600 p-5 mt-10">
          <h1>Atividades</h1>

          {activities}
          <h1
            onClick={() => setActivityInputCount(activityInputCount + 1)}
            className="cursor-pointer"
          >
            +
          </h1>
          <h1
            onClick={() => setActivityInputCount(activityInputCount - 1)}
            className="cursor-pointer"
          >
            -
          </h1>
        </div>

        {/* <p className="mt-5"> Nome do cliente</p> */}
        {/* <select
          onChange={handleSelect}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-5"
        >
          <option></option>
          {clients.map((c: Client) => (
            <option value={c.id} key={c.user_id}>
              {c.name}
              {c.id}
            </option>
          ))}
        </select> */}
        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-5"
          >
            Registrar log
          </button>
        </div>
      </form>
    </>
  );
}

