import AllTask from "@/components/allTask";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full p-4 overflow-y-auto  h-full rounded-md">
      <div className="w-full p-6 flex flex-col overflow-y-auto  h-full rounded-md">
        <div className="block sm:flex items-center justify-between">
          <h1 className="font-bold text-2xl mb-3 ml-3">AllTask</h1>
          <Link
            className="font-bold rounded-[15px] ml-3 mb-3   bg-black text-cyan-100 w-[100px] p-2"
            href={"/newTask"}
            data-cy="createTask"
          >
            add Task
          </Link>
        </div>

        <AllTask />
      </div>
    </div>
  );
}
