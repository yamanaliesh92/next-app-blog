import { IPayloadUser } from "@/types";
import { http } from ".";

export async function registerApi(payload: IPayloadUser) {
  return await http.post("/user", payload);
}
