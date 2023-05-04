import { useReducer } from "react";
import { get, post } from "../utils/request";
export const login = async (username, password, signal) => {
  const res = await post("/api/login", { username, password });
  return res;
};
