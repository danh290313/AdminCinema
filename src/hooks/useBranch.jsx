
import { toastError, toastSuccess } from "@/utils/toast";
import { useEffect, useState, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "./useAuth";
export function useBranch() {
  const nav = useNavigate();
  const { token } = useAuth();
  const getBranch = async (id) => await getBranchServices(id, token);
  const getBranches = async (page) => {
    const res = await getBranchesServices(page, token);
    return res;
  };
  const editBranch = async (id,value) => {
    const res = await editBranchServices(id, value, token);
    res.status === "success" ? toastSuccess(res.msg) : toastError(res.msg);
  };
  const deleteBranch = async (id) => {
    const res = await deleteBranchServices(id, token);
    res.status === "success" ? toastSuccess(res.msg) : toastError(res.msg);
  };
  const addBranch = async (val) => {
    const res = await addBranchServices(val, token);
    if (res.status === "success") {
      toastSuccess(res.msg);
      nav("/dashboard/branches");
    } else toastError(res.msg);
  };
 
  return {
    getBranches,
    getBranch,
    editBranch,
    deleteBranch,
    addBranch,
  };
}

export default useBranch;
