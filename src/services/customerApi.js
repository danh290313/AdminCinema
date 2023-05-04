import { post, deletereq, get, put } from "@/utils/request";
export const getAllCus = async (page,search, token) => {
  const res = await get("/api/customer-page?page=" + page +"&q=" + search, { token });
  return res;
};
export const addCus = async (val, token) => {
  const res = await post("/api/customer", val, { token });
  return res;
};
export const getCus = async (id, token) => {
  const res = await get("/api/customer" + id, { token });
  return res;
};
export const editCus = async (id, data, token) => {
  const res = await put(`/api/customer/${id}`, data, { token });
  return res;
};
export const deleteCus = async (id, token) => {
  const res = await deletereq(`/api/customer/${id}`, {}, { token });
  return res;
};
