import AddNewTask from "@/components/addNewTask";
import Important from "@/components/important";
import Task from "@/components/task";
import { taskData } from "@/constant/task.data";
import Link from "next/link";
import React from "react";

export default function ImportantPage() {
  return (
    <div className="w-full  p-3  flex flex-col   h-full rounded-md">
      <div className="block sm:flex items-center justify-between">
        <h1 className="font-bold text-2xl mb-3 ml-3">Important</h1>
        <Link
          className="font-bold rounded-[15px] ml-3 mb-3   bg-black text-cyan-100 w-[100px] p-2"
          href={"/newTask"}
        >
          add Task
        </Link>
      </div>

      {/* <div className="flex items-center"> */}
      <Important />
    </div>
  );
}
