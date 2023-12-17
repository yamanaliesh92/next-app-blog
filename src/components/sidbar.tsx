"use client";
import { menu } from "@/constant/menu.data";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import ph from "../../public/woman.jpeg";

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

export default function Sidebar() {
  const { data } = useSession();

  // console.log("useSesion", data);

  // s.data?.user?.email;
  const [state, setState] = useState("All Tasks");
  const router = useRouter();

  const on = (item: string) => {
    router.push(item);
    setState(item);
  };
  return (
    <div className="w-full h-full rounded-md p-3  flex justify-between flex-col">
      <div className="flex  items-center justify-center flex-col mt-4 p-4  w-[110px] h-[110px]">
        <Image
          src={ph}
          width={100}
          height={100}
          className="w-[65px] h-[65px] md:w-full md:h-full rounded-full mb-4    shadow-m cursor-pointer  object-cover"
          alt="ls"
        />
        <h1 data-cy="username" className="font-bold ml-2">
          Yaman
        </h1>
      </div>

      <div className="flex flex-col mt-10 items-start">
        {menu.map((item) => {
          return (
            <div
              key={item.id}
              data-cy={`test${item.id}`}
              // onClick={() => router.push(item.link)}
              onClick={() => on(item.link)}
              className="flex p-1  md:p-2  relative"
            >
              {state === item.link && (
                <div className="bg-slate-400 absolute top-[-4.48px] left-[0.5rem] w-[140px] duration-300 transition-all ease-in-out p-1 md:p-2 h-[50px]"></div>
              )}
              <item.icon className=" relative z-10" />
              <h1 className="ml-1 sm:ml-3 relative z-10">{item.title}</h1>
            </div>
          );
        })}
      </div>

      <div className="flex items-center hover:bg-gray-400 mb-4">
        <Link data-cy={"logout"} href={"/sign"} className="mr-2">
          Logout
        </Link>
        <BiLogOut size={20} />
      </div>
    </div>
  );
}
