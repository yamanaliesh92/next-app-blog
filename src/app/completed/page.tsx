import AddNewTask from "@/components/addNewTask";
import Completed from "@/components/completed";
import Task from "@/components/task";
import { taskData } from "@/constant/task.data";
import Link from "next/link";
import React from "react";

export default function TaskPage() {
  return (
    <div className="w-full p-2 sm:p-6 flex flex-col overflow-y-auto h-full rounded-md">
      <div className="block sm:flex items-center justify-between">
        <h1 className="font-bold text-2xl mb-3 ml-3">completed</h1>
        <Link
          className="font-bold rounded-[15px] ml-3 mb-3   bg-black text-cyan-100 w-[100px] p-2"
          href={"/newTask"}
        >
          add Task
        </Link>
      </div>
      {/* <div className="flex items-center"> */}
      <Completed />
    </div>
  );
}
