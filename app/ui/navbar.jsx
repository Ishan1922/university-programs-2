"use client";

import Link from "next/link";
import { MenuIcon, UserIcon } from "./Icons";
import { useEffect, useState } from "react";

export default function Navbar() {
  
  return (
    <div className="top-0 flex flex-wrap justify-between items-center bg-blue-900 text-white py-2">
      <div className="flex px-6 items-center">
        <div className="p-2">
          <MenuIcon />
        </div>
        <div className="font-semibold p-2"><Link href={'/'}>Home</Link></div>
      </div>
      <div className="flex px-6 items-center">
        <div className="p-2">
        <UserIcon />
        </div>
        <div className="font-semibold p-2">Admin</div>
      </div>
    </div>
  );
}