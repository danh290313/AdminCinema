import {
  getAllPositions,
  getStaffs as getStaffsServices,
  getStaff as getStaffServices,
  editStaff as editStaffServices,
  deleteStaff as deleteStaffServices,
  resetPassStaff as resetPassStaffServices,
  addStaff as addStaffServices,
} from "@/services/staffApi";
import { toastError, toastSuccess } from "@/utils/toast";
import { useEffect, useState, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "./useAuth";
export function useStaff() {
  const nav = useNavigate();
  const { token } = useAuth();
  // const [staffs, setStaffs] = useState([]);
  const [positions, setPositions] = useState([]);
  const getStaff = async (id) => await getStaffServices(id, token);
  const editStaff = async (id, value) => {
    const res = await editStaffServices(id, value, token);
    res.status === 200 ? toastSuccess(res.message) : toastError(res.message);
  };
  const resetPassStaff = async (id) => {
    const res = await resetPassStaffServices(id, token);
    res.status === 200 ? toastSuccess(res.message) : toastError(res.message);
  };
  const deleteStaff = async (id) => {
    const res = await deleteStaffServices(id, token);
    res.status === 200 ? toastSuccess(res.msg) : toastError(res.msg);
  };
  const addStaff = async (val) => {
    const res = await addStaffServices(val, token);
    if (res.status === 201) {
      toastSuccess(res.message);
      nav("/dashboard/staff");
    } else toastError(res.msg);
  };
  const getStaffs = async (page) => {
    const res = await getStaffsServices(page, token);
    return res;
  };
  const getPositions = async () => {
    const res = await getAllPositions(token);
    return res;
  };

  // useEffect(() => {
  //   const contr = new AbortController();
  //   const { signal } = contr;

  //   (async () => {
  //     const res = await getAllPositions(signal, token);
  //     setPositions(res?.positions);
  //   })();

  //   return () => contr.abort();
  // }, [token]);
  return {
    getStaffs,
    getPositions,
    getStaff,
    editStaff,
    deleteStaff,
    resetPassStaff,
    addStaff,
  };
}

export default useStaff;
