"use client";
import React, { ChangeEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { IPayloadCreateTask } from "@/types";
import DateTimePicker from "react-datetime-picker";

import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import "react-datetime-picker/dist/DateTimePicker.css";

import { createTaskApi } from "@/axios/task/create.task.api";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const init = {
  title: "",

  desc: "",
  important: false,
};

export default function CreateTask() {
  const [element, setElement] = useState(init);
  const [date, setDate] = useState<Date>(new Date());
  const router = useRouter();
  const { mutateAsync, error } = useMutation({
    mutationFn: createTaskApi,
    onSuccess: () => {
      toast.success("create task is done ");
      router.push("/");
    },
  });

  const onChange = (
    e: ChangeEvent<HTMLInputElement>,
    key: keyof IPayloadCreateTask
  ) => {
    const value = e.target.value;
    setElement((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("da", date);
    const body = {
      title: element.title,
      date: date,
      desc: element.desc,
      important: element.important,
    };
    await mutateAsync(body);
  };
  return (
    <div className="w-[500px] h-[500px]  overflow-hidden">
      <div className="w-full h-full  bg-[#352961]  rounded-[20px] p-4">
        <form className="p-4 items-center flex flex-col" onSubmit={submit}>
          {error && (
            <h1 className="text-2xl text-red-500 font-bold">{error.message}</h1>
          )}
          <h1
            data-cy="title"
            className="text-2xl font-bold items-center  border-b-4 border-b-red"
          >
            Create new Task
          </h1>

          <div className="w-full mt-4">
            <input
              onChange={(e) => onChange(e, "title")}
              value={element.title}
              required
              type="text"
              data-cy="titleInput"
              placeholder="write the title"
              className="w-full p-6 h-[35px] border-none rounded-md outline-none bg-white"
            />
          </div>

          <div className="w-full mt-4">
            <DateTimePicker
              data-cy="dateInput"
              onChange={setDate as any}
              value={date}
              required
            />

            {/* <input
              // onChange={(e) => onChange(e, "title", false)}
              // value={date}
              onChange={(e) => setDate(e.target.valueAsDate)}
              required
              type="date"
              placeholder="write the title"
              className="w-full p-6 h-[35px] border-none rounded-md outline-none bg-white"
            /> */}
          </div>
          {/* 
          <div className="w-full mt-4">
            <input
              onChange={(e) => onChange(e, "date", true)}
              value={element.date}
              type="number"
              // required
              placeholder="write the date you need it"
              className="w-full p-6 h-[35px] border-none rounded-md outline-none bg-white"
            />
          </div> */}

          <div className="w-full mt-4">
            <textarea
              onChange={(e) =>
                setElement((prev) => ({ ...prev, desc: e.target.value }))
              }
              value={element.desc}
              rows={4}
              data-cy="descInput"
              required
              placeholder="write the description"
              className="w-full p-6 h-fit border-none rounded-md outline-none bg-white"
            />
          </div>

          <div className="w-[450px]  flex items-center mt-4 self-start  ">
            <h4 className="text-[16px] mr-3">
              if this task important click here
            </h4>
            <input
              data-cy="importantInput"
              onChange={(e) =>
                setElement((prev) => ({ ...prev, important: e.target.checked }))
              }
              type="checkbox"
              value={element.important.toString()}
            />
          </div>

          <button
            data-cy="createButton"
            className="w-fit place-self-start mt-2  h-fit border-none rounded-md outline-none  text-[#352961]  bg-white p-2"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
}
