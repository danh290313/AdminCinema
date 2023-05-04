import {
  getAllCus as getAllCusService,
  deleteCus as deleteCusService,
  addCus as addCusService,
  getCus as getCusService,
  editCus as editCusService,
} from "@/services/customerApi";
import { toastError, toastSuccess } from "@/utils/toast";
import { useEffect, useState, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "./useAuth";
export function useCus() {
  const nav = useNavigate();
  const { token } = useAuth();
  // const [staffs, setStaffs] = useState([]);
  // const [positions, setPositions] = useState([]);
  const getCus = async (id) => await getCusService(id, token);
  const editCus = async (id, value) => {
    const res = await editCusService(id, value, token);
    if (res?.status === "success") {
      toastSuccess(res.msg);
      nav("/dashboard/customer");
    } else toastError(res?.msg);
  };
  const getAllCus = async (page, search) => {
    const res = await getAllCusService(page,search, token);
    return res;
  };
  const deleteCus = async (id) => {
    const res = await deleteCusService(id, token);
    if (res?.status === "success") {
      toastSuccess(res?.msg);
      return res;
    } else {
      toastError(res?.msg);
      return res;
    }
  };
  const addCus = async (value) => {
    try {
      const res = await addCusService(value, token);
      if (res?.status === "success") {
        toastSuccess(res?.msg);
        nav("/dashboard/customer");
      }
     
    } catch (e) {
      console.error(e);
      toastError(e?.response?.data?.errors || e.message);
    }

  };
  return {
    getAllCus,
    deleteCus,
    addCus,
    getCus,
    editCus,
  };
}

export default useCus;
