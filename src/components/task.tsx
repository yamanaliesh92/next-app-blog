"use client";

import Models from "@/model/update";
import { IResponseTask } from "@/types";
import React, { FC, useEffect, useState } from "react";
import { MdDelete, MdOutlineSystemUpdate } from "react-icons/md";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTaskApi } from "@/axios/task/update.task.api";
import { toast } from "react-hot-toast";

interface props {
  data: IResponseTask;

  deleteTask: (id: string) => Promise<void>;
}

const Task: FC<props> = ({ data, deleteTask }) => {
  const queryClient = useQueryClient();
  const [edit, setEdit] = useState({ open: false, id: "" });

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const getTime = (deadLine: any) => {
    const time = Date.parse(deadLine) - Date.now();

    setHours(Math.floor((time / (1000 * 24 * 60)) % 24));
    setMinutes(Math.floor((time / (1000 * 60)) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  const { mutateAsync: updateMutate, error } = useMutation({
    mutationFn: updateTaskApi,
  });

  useEffect(() => {
    const interval = setInterval(() => getTime(data.date), 1000);

    return () => clearInterval(interval);
  }, []);

  const changeEdit = (id: string) => {
    setEdit((Prev) => ({ open: !Prev.open, id }));
  };
  return (
    <div>
      {error && <h1>{error.message}</h1>}
      <div
        key={data._id}
        data-cy={`task${data._id}`}
        className="flex flex-col bg-[#352961] w-[150px] sm:w-[250px] md:w-[230px] lg:w-[220px]  h-[250px] p-2 sm:p-4 text-yellow-100 overflow-hidden rounded-[15px]"
      >
        <h1
          data-cy={`taskTitle${data._id}`}
          className="md:text-[17px] font-bold w-full border-b-2  border-b-yellow-200"
        >
          {data.title}
        </h1>
        <div className="mt-2 flex items-center">
          <h4 data-cy={`finish${data._id}`} className="text-[14px]">
            finish after:
          </h4>
          <h4 className="font-bold text-[10px] ml-1 text-red-500">
            {(hours === 0 && minutes === 0) || (hours < 0 && minutes < 0) ? (
              <>
                <h1
                  onClick={async () =>
                    await updateMutate(
                      {
                        _id: data._id,
                        payload: { completed: !data.completed },
                      },
                      {
                        onSuccess: () => {
                          queryClient.invalidateQueries({
                            queryKey: ["allCar"],
                          });
                          toast.success("update completed is done");
                        },
                      }
                    )
                  }
                >
                  mission is done click
                </h1>
              </>
            ) : (
              <>
                {hours} hours / {minutes} minutes /{seconds} second
              </>
            )}
          </h4>
        </div>

        <h3
          data-cy={`taskDesc${data._id}`}
          className="b bg-[#352961] my-2 h-[155px] w-full overflow-y-auto"
        >
          {data.desc}
        </h3>

        {/* <h2 className="md:text-2xl font-bold mt-2 sm:mt-4">{data.firstObj}</h2> */}

        <div className="flex justify-between">
          <button
            onClick={async () =>
              await updateMutate(
                {
                  _id: data._id,
                  payload: { completed: !data.completed },
                },
                {
                  onSuccess: () => {
                    queryClient.invalidateQueries({ queryKey: ["allCar"] });
                    toast.success("update completed is done");
                  },
                }
              )
            }
            className="w-fit h-fit p-1 sm:p-2 outline-none border-none text-black rounded-md bg-white"
          >
            {data.completed ? "mission is done" : "Completed"}
          </button>
          <div className="block mt-2 sm:mt-0 sm:flex ml-2 md:ml-0 items-center">
            <MdDelete
              data-cy={`deleteTask${data._id}`}
              size={20}
              className="mx-[4px] mb-2 sm:mb-0 md:mr-[3px]"
              onClick={() => deleteTask(data._id)}
            />
            <MdOutlineSystemUpdate
              data-cy={`updateTask${data._id}`}
              size={20}
              onClick={() => changeEdit(data._id)}
            />
          </div>
        </div>
      </div>

      {edit.open && edit.id === data._id && (
        <div className="bg bg-white absolute  top-3 right-1 z-50 flex items-center justify-center  w-[1100px] h-screen">
          <Models setOpen={setEdit} data={data} open={edit} />
        </div>
      )}
    </div>
  );
};

export default Task;
