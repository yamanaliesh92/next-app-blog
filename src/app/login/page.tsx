import Login from "@/components/login";
import Sign from "@/components/sign";
import photoLogin from "../../../public/woman.jpeg";
import React from "react";
import Image from "next/image";

interface props {
  searchParams: Record<"callbackUrl" | "error", string>;
}

export default function page(props: props) {
  console.log("prostdsddddd", { ss: props.searchParams.callbackUrl });
  console.log("error", { ss: props.searchParams.error });
  return (
    <div className="w-full min-h-screen items-center flex justify-center bg-gray-50">
      <div className="bg-gray-100 flex rounded-2xl p-1 shadow-lg sm:w-[400px] sm:p-5 items-center">
        <Login
          callbackUrl={props.searchParams?.callbackUrl}
          error={props.searchParams?.error}
        />
      </div>
    </div>
  );
}
