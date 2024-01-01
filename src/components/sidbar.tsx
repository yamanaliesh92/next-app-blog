"use client";
import { menu } from "@/constant/menu.data";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BiLogOut } from "react-icons/bi";

import { signOut, useSession } from "next-auth/react";

import { removeCookie, setCookie } from "@/utils/cookie";

export default function Sidebar() {
  const { data } = useSession();
  const router = useRouter();

  const [state, setState] = useState("All Tasks");

  const logout = () => {
    removeCookie("token");
    router.push("/login");
    signOut();
  };

  const onPush = (item: string) => {
    router.push(item);
    setState(item);
  };
  return (
    <>
      {data?.user && (
        <div className="w-full h-full rounded-md p-3  flex justify-between flex-col">
          <h1 className="text-center font-bold text-2xl">{data.user.name}</h1>

          <div className="flex flex-col mt-10 items-start">
            {menu.map((item) => {
              return (
                <div
                  key={item.id}
                  data-cy={`test${item.id}`}
                  onClick={() => onPush(item.link)}
                  className="flex p-1  md:p-2  relative"
                >
                  {state === item.link && (
                    <div className="bg-slate-400 absolute top-[-4.48px] left-[0.1rem] w-[140px] duration-300 transition-all ease-in-out p-1 md:p-2 h-[35px] md:h-[50px]"></div>
                  )}
                  <item.icon className=" relative z-10" />
                  <h1 className="ml-1 sm:ml-3 relative z-10">{item.title}</h1>
                </div>
              );
            })}
          </div>

          <div
            className="flex items-center hover:bg-gray-400 mb-4"
            onClick={logout}
          >
            <h1 className="mr-2" data-cy={"logout"}>
              logout{" "}
            </h1>
            <BiLogOut size={20} />
          </div>
        </div>
      )}
    </>
  );
}
