"use client";
import Link from "next/link";
import React, { ChangeEvent, useState } from "react";

import { useMutation } from "@tanstack/react-query";

import { IPayloadUser } from "@/types";
import { registerApi } from "@/axios/sign";
import { signIn } from "next-auth/react";

const init: IPayloadUser = {
  email: "",
  password: "",
  name: "",
};

export default function Sign() {
  const [element, setElement] = useState<IPayloadUser>(init);

  const { mutateAsync, error } = useMutation({
    mutationFn: registerApi,
    onSuccess: () => {
      signIn();
    },
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setElement((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const body: IPayloadUser = {
      email: element.email,

      password: element.password,
      name: element.name,
    };

    await mutateAsync(body);
  };
  return (
    <div className="w-[400px] h-[400px] bg-gray-200  overflow-hidden">
      <div className="w-full h-full  rounded-[20px]">
        <form className="p-4 items-center flex flex-col" onSubmit={onSubmit}>
          <h1 data-cy="title" className="text-2xl font-bold items-center">
            Sign In
          </h1>

          {error && (
            <h1 className="font-bold text-red-500">{error?.message}</h1>
          )}

          <div className="w-full mt-8">
            <input
              value={element.email}
              type={"email"}
              data-cy="emailInput"
              onChange={onChange}
              name="email"
              className="w-full p-6 h-[35px] border-none rounded-md outline-none"
            />
          </div>
          <div className="w-full mt-8">
            <input
              value={element.password}
              type={"password"}
              name="password"
              data-cy="passwordInput"
              onChange={onChange}
              className="w-full p-6 h-[35px] border-none rounded-md outline-none"
            />
          </div>

          <div className="w-full mt-8">
            <input
              value={element.name}
              type={"text"}
              name="name"
              data-cy="nameInput"
              onChange={onChange}
              className="w-full p-6 h-[35px] border-none rounded-md outline-none"
            />
          </div>
          <div className="flex place-self-start justify-between items-center mt-4">
            <button
              data-cy="submit"
              className="w-fit  h-fit border-none rounded-md outline-none bg-blue-500 text-white p-4"
            >
              sign
            </button>
            <Link
              className="font-bold ml-4 sm:ml-9  text-black"
              href={"/login"}
              data-cy="toLogin"
            >
              Do have account?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
