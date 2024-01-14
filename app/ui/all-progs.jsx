import Link from "next/link";
import EditIcon from "../ui/Icons";
import UpdateButton from '../ui/update-button';

export default function AllProgs(props) {
  const progs = props.progs;

  return (
    <div className="flex flex-col gap-2 min-h-screen">
      <div className="w-1/4 p-2 border">
        <h2 className="my-2 w-full">Program list</h2>
        <div className="border p-1 my-2">
          {progs?.map((p) => (
            <div key={p.id} className="flex justify-between my-2 px-2 py-1">
              <h1>{p.name}</h1>
              <UpdateButton id={p.id}/>
            </div>
          ))}
        </div>
        <div className="my-3 w-full">
          <Link
            href="/create"
            className="border p-1 w-full text-center hover:bg-white hover:text-white my-2"
          >
            <button>Create</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
