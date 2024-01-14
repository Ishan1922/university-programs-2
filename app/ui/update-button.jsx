'use client';

import Link from "next/link";
import {DeleteIcon, EditIcon} from "../ui/Icons";
import { useRouter } from "next/navigation";
import { DeleteProgramById } from "../lib/actions";

export default function UpdateButton(props) {
  const router = useRouter();
  const handleClick = () => {
    const id = props.id;
    // console.log(id);
    DeleteProgramById(id);
    router.refresh();
  }
  return (
    <div className="flex flex-row text-center justify-center gap-1">
    <Link href={`/update/${props.id}`} className="p-1 border rounded-full">
      <EditIcon />
    </Link>
    <button onClick={handleClick} className="p-1 border rounded-full">
      <DeleteIcon/>
    </button>
    </div>
  );
}
