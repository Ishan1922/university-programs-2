

import Image from "next/image";
import { fetchAllPrograms } from "./lib/data";
import Link from "next/link";

export default async function Home() {
  // const progs = await fetchAllPrograms();
  // console.log("web pe : ",progs);
  return (
    <div className="m-10 min-h-screen">
      <div className="flex flex-col gap-2 min-h-screen">
        <div className="w-1/4 p-2 border">
          <h2 className="my-2">Program list</h2>
          <div className="border p-1 my-2">
            {/* {progs?.map((p) => (
              <h1 key={p.id}>{p.name}</h1>
            ))} */}
          </div>
          <div className="my-3">
          <Link href='/create' className="border p-1 my-2">
            <button >Create</button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
