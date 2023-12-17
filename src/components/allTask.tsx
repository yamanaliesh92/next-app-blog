"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { allMyTaskApi, I } from "@/axios/task/allMy-task.api";

import { deleteTaskApi } from "@/axios/task/delete.task.api";
import Task from "./task";
import { toast } from "react-hot-toast";
import { updateTaskApi } from "@/axios/task/update.task.api";

export default function AllTask() {
  const queryClient = useQueryClient();

  const { data: dataTask } = useQuery<I>({
    queryKey: ["all"],
    queryFn: allMyTaskApi,
  });

  const { mutateAsync } = useMutation({
    mutationFn: deleteTaskApi,
  });

  const deleteTask = async (_id: string) => {
    const filleter = dataTask?.data?.filter((item) => item._id !== _id);
    await mutateAsync(_id, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["all"] });
        toast.success("delete task is done");
      },
    });
  };
  return (
    <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4  mt-2 ">
      {dataTask &&
        dataTask.data.map((item) => (
          <Task data={item} deleteTask={deleteTask} />
        ))}
    </div>
  );
}
