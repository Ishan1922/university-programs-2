import { fetchAllPrograms } from "./lib/data";
import AllProgs from "../app/ui/all-progs";
import AddForm from "./ui/create-form";
import Navbar from "./ui/navbar";

export default async function Home() {
  const progs = await fetchAllPrograms();

  // const currentUser = currentUser;

  return (
    <div className="flex flex-col justify-center text-center font-black text-6xl h-full">
      <div>Welcome To</div>
      <div className="">Program Dashboard!</div>
    </div>
  );
}
