import { IPayloadCreateTask, IResponseTask } from "@/types";
import { http } from "..";

export async function createTaskApi(
  payload: IPayloadCreateTask
): Promise<IResponseTask> {
  return await http.post("/task", payload);
}
