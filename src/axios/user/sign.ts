import { IPayloadUser, IResponseUser } from "@/types";
import { http } from "..";

export async function registerApi(
  payload: IPayloadUser
): Promise<IResponseUser> {
  return await http.post("/user", payload);
}
