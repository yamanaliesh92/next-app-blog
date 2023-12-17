import {
  IPayloadCreateTask,
  IPayloadDeleteTask,
  IPayloadUpdateTask,
  IResponseTask,
} from "@/types";
import { http } from "..";

interface IUpdate {
  _id: string;
  payload: IPayloadUpdateTask;
}

export async function updateTaskApi(dto: IUpdate) {
  return await http.patch(`/task/${dto._id}`, dto.payload);
}
