"use client";
import { menu } from "@/constant/menu.data";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BiLogOut } from "react-icons/bi";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { setCookie } from "@/utils/cookie";

export default function Sidebar() {
  const { data, status } = useSession();

  const token = data?.user.token;

  // if (status === "authenticated") {
  //   return <p>Signed in as {data.user.email}</p>;
  // }

  setCookie("token", token as string);
  const [state, setState] = useState("All Tasks");
  const router = useRouter();

  const on = (item: string) => {
    router.push(item);
    setState(item);
  };
  return (
    <div className="w-full h-full rounded-md p-3  flex justify-between flex-col">
      {data?.user && (
        <h1 className="text-center font-bold text-2xl">{data.user.name}</h1>
      )}
      {data?.user && (
        <div className="flex flex-col mt-10 items-start">
          {menu.map((item) => {
            return (
              <div
                key={item.id}
                data-cy={`test${item.id}`}
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
      )}

      <div className="flex items-center hover:bg-gray-400 mb-4">
        {data?.user && (
          <Link
            data-cy={"logout"}
            // onClick={() => LogOut()}
            href={"/sign"}
            className="mr-2"
          >
            Logout
          </Link>
        )}
        <BiLogOut size={20} />
      </div>
    </div>
  );
}
