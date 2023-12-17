"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function AddNewTask() {
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();

  const changeOpen = () => {
    setOpen((prev) => !prev);
    router.push("/newTask");
  };
  return (
    <>
      <div
        onClick={changeOpen}
        className="grid ml-2 w-[250px] h-[250px] bg-yellow-200 rounded-[15px] items-center justify-center cursor-pointer"
      >
        <h1 className="text-3xl font-bold text-red-400">add a new task</h1>
      </div>

      {open && (
        <div className="w-100% h-100% flex items-center justify-center bg-red-500 z-20">
          hello
        </div>
      )}
    </>
  );
}
