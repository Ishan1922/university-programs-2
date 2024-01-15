
// import { UserButton, currentUser } from "@clerk/nextjs";
import Image from "next/image";
import { fetchAllPrograms } from "./lib/data";
import Link from "next/link";
import AllProgs from '../app/ui/all-progs';

export default async function Home() {
  const progs = await fetchAllPrograms();

  // const currentUser = currentUser;

  return (
    <div className="m-10 min-h-screen">
      <AllProgs progs={progs}/>
    </div>
  );
}
