"use client";

import { IPayloadUpdateTask, IResponseTask } from "@/types";
import React, { FC, useState } from "react";
import DateTimePicker from "react-datetime-picker";

import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import "react-datetime-picker/dist/DateTimePicker.css";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTaskApi } from "@/axios/task/update.task.api";
import toast from "react-hot-toast";

interface Props {
  open: { open: boolean; id: string };
  data: IResponseTask;
  setOpen: React.Dispatch<
    React.SetStateAction<{
      open: boolean;
      id: string;
    }>
  >;
}

const Models: FC<Props> = ({ setOpen, open, data }) => {
  const queryClient = useQueryClient();
  const [element, setElement] = useState(data);
  const [date, setDate] = useState<Date>(data.date);

  const closeModel = () => {
    setOpen((prev) => ({ id: "", open: !prev.open }));
  };

  const { mutateAsync, error } = useMutation({
    mutationFn: updateTaskApi,
  });
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const body: IPayloadUpdateTask = {
      title: element.title,
      date: element.date,
      desc: element.desc,
    };
    await mutateAsync(
      { _id: element._id, payload: body },
      {
        onSuccess: () => {
          toast.success("update task is done ");
          closeModel();
          queryClient.invalidateQueries({ queryKey: ["all"] });
        },
      }
    );
  };
  return (
    <>
      <div className="w-[300px] bg-[#352961] rounded-md mt-4 ml-5 h-[340px] absolute left-2 overflow-hidden">
        <div className="w-full h-full  rounded-[20px] p-4">
          <form className="p-4 items-center flex flex-col" onSubmit={onSubmit}>
            {error && (
              <h1 className="text-red-500 text-center">{error.message}</h1>
            )}
            <h1
              data-cy="titleUpdate"
              className="text-1xl font-bold items-center text-cyan-50  border-b-4 border-b-red"
            >
              Update your task
            </h1>

            <div className="w-full mt-4">
              <input
                data-cy="inputTitleUpdate"
                value={element.title}
                onChange={(e) =>
                  setElement((prev) => ({ ...prev, title: e.target.value }))
                }
                className="w-full p-3 h-[35px] border-none rounded-md outline-none bg-white"
              />
            </div>
            <div className="w-full mt-3 mb-3 flex items-center my-4">
              <h1 className="text-[15px] text-white mr-1">
                if you want to change the important
              </h1>
              <input
                data-cy="importantUpdate"
                onChange={(e) =>
                  setElement((prev) => ({
                    ...prev,
                    important: e.target.checked,
                  }))
                }
                type="checkbox"
                value={element.important.toString()}
              />
            </div>

            <DateTimePicker onChange={setDate as any} value={date} required />
            <div className="w-full mt-4">
              <textarea
                data-cy="descUpdate"
                value={element.desc}
                onChange={(e) =>
                  setElement((prev) => ({
                    ...prev,
                    desc: e.target.value,
                  }))
                }
                rows={3}
                className="w-full p-3  border-none rounded-md outline-none bg-white"
              />
            </div>

            <div className="flex self-start mt-3  ">
              <button
                data-cy="cancelUpdate"
                onClick={closeModel}
                className="w-fit mr-8 place-self-start mt-2  h-fit border-none rounded-md outline-none text-[#352961] bg-white p-2"
              >
                cancel
              </button>
              <button
                data-cy="UpdateButton"
                className="w-fit place-self-start mt-2  h-fit border-none rounded-md outline-none text-[#352961] bg-white p-2"
              >
                update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Models;
