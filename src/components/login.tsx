"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";

interface props {
  callbackUrl?: string;
  error?: string;
}

export default function Login(props: props) {
  const [element, setElement] = useState({ email: "", password: "" });
  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    signIn("credentials", {
      email: element.email,
      password: element.password,
      redirect: true,
      callbackUrl: "/",
    });
  };
  return (
    <div className="p-1 sm:px-10 w-full">
      <h2 data-cy="title" className="font-bold text-2xl text-[#184191]">
        Login
      </h2>
      <form className="flex flex-col gap-4" onSubmit={onSubmitForm}>
        {!!props.error && (
          <div className="text-red-500 mt-1 font-bold">
            failed in login please try again...
          </div>
        )}
        <input
          className="p-2 mt-8 rounded-xl border w-[130px] sm:w-full"
          value={element.email}
          data-cy="emailInput"
          onChange={(e) =>
            setElement((prev) => ({ ...prev, email: e.target.value }))
          }
        />

        <div className="relative mt-4">
          <input
            className="sm:w-full p-2  border rounded-xl w-[130px]"
            value={element.password}
            data-cy="passwordInput"
            onChange={(e) =>
              setElement((prev) => ({ ...prev, password: e.target.value }))
            }
          />
        </div>

        <button
          data-cy="submit"
          className="mt-4 border-none rounded-xl bg-[#184191] text-white p-2 sm:p-4  w-[130px] sm:w-full"
        >
          Login
        </button>
      </form>
      <div className="grid grid-cols-3 items-center text-gray-500 mt-2">
        <hr className="border-gray-500" />
        <p data-cy="or" className="text-center text-sm">
          OR
        </p>
        <hr className="border-gray-500" />
      </div>

      <Link
        className="mt-5 text-[15px] sm:text-sm border-b border-gray-400 sm:py-2 "
        href={"/sign"}
        data-cy="toSign"
      >
        Create a new account
      </Link>
    </div>
  );
}
// important and completed is boolean and name=important.tostring() type="date e.target.chckerd/date:E.tragetr.vaklue

// title decriaotoion date completed important
// "
