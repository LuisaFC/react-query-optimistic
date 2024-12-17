import { sleep } from "../lib/utils";
import { IUser } from "../types/IUser";

type ICreateUserDTO = Omit<IUser, 'id'>

export async function createUser({name, username, blocked}: ICreateUserDTO){
  await sleep()

  const response = await fetch("http://localhost:5000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      blocked,
      name,
      username
    })
  })
  const body = await response.json()

  return body as IUser;
}
