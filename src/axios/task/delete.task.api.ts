import { IPayloadCreateTask, IPayloadDeleteTask, IResponseTask } from "@/types";
import { http } from "..";

export async function deleteTaskApi(id: string) {
  return await http.delete(`/task/${id}`);
}
