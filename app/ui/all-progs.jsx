'use client';

import Link from "next/link";
import UpdateButton from "../ui/update-button";
import { AddIcon, SearchIcon, StopIcon } from "./Icons";
import { useEffect, useState } from "react";

export default function AllProgs(props) {
  let progs = props.progs;
  // progs = [...progs].reverse();
  const [search , setSearch] = useState("");
  const [filteredPrograms, setFilteredPrograms] = useState([]);
  useEffect(() => {
    const filtered = progs.filter(progs => progs.name.toLowerCase().includes(search.toLowerCase()));
    setFilteredPrograms(filtered);
    return () => {
    }
  }, [search,progs] );

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="w-full ">
      <div className="h-1/6">
        <div className="flex justify-between my-10 px-6">
          <h2 className="text-3xl font-bold w-full">Program list</h2>
          <Link
            href="/create"
            className="rounded-full p-2 bg-blue-600 text-white text-center hover:bg-black hover:text-white hover:shadow-md my-auto "
          >
            <AddIcon />
          </Link>
        </div>
        <div className=" flex border-2 border-gray-300 rounded mx-5 items-center bg-gray-300">
          <div className="px-3">
            <SearchIcon className="" />
          </div>
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            className=" w-3/4 focus:outline-none text-lg rounded-r p-1 px-2"
            style={{ width: "440px" }}
          ></input>
        </div>
        <div className={`mt-8`}>
          {filteredPrograms?.map((p) => (
            <Link key={p.id} href={`/view/${p.id}`} >
              <div
              className=" border flex justify-between py-3 items-center px-6 hover:bg-blue-200 hover:border-r-2"
            >
              <div className="flex">
                <StopIcon/>
              <h1 className=" px-1 font-semibold">{p.name}</h1>
              </div>
              <UpdateButton id={p.id} />
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
