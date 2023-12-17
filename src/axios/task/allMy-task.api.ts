import { IPayloadCreateTask, IPayloadDeleteTask, IResponseTask } from "@/types";
import { http } from "..";

export interface I {
  data: IResponseTask[];
}

export async function allMyTaskApi(): Promise<I> {
  return await http.get("/task/all");
}
