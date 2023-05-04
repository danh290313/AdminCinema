import {
  ArrowPathIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
  TrashIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import {
  Button,
  Card,
  CardBody,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
// import { authorsTableData, projectsTableData } from "@/data";
import ConfirmDialog from "@/components/ConfirmDialog";
import useStaff from "@/hooks/useStaff";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Pagination } from "@mui/material";
import { positions } from "@mui/system";
export function Staff() {
  const [idChoosing, setIdChoosing] = useState(null);
  const [open, setOpen] = useState(false);
  const [type, setType] = useState(false);
  const { deleteStaff, getStaffs, resetPassStaff } = useStaff();
  const [staffs, setStaffs] = useState();
  const [page, setPage] = useState(1);
  
  const handleChangePage = (e, npage) => {
    setPage(npage);
  };
  useEffect(() => {
    (async () => {
      const res = await getStaffs(page);
      console.log(res);
      setStaffs(res);
    })();
  }, [page]);

  const handleOpen = (id, type) => {
    setType(type);
    setOpen(!open);
    setIdChoosing(id);
  };

  const handleOK = () => {
    setOpen(false);
    if (type === "resetpass") {
      resetPassStaff(idChoosing);
      console.log('first', idChoosing);
    }
    else {
      (async () => {
        await deleteStaff(idChoosing);
        let npage;
        if (staffs?.data?.length === 1) npage = page - 1;
        else npage = page;
        const res = await getStaffs(npage);
        setStaffs(res);
        if (npage !== page) setPage(npage);
      })();
    }
  };
  const handleClose = () => {
    setOpen(false);
  };
  return ( staffs &&
    <div className="mt-12 mb-8 flex flex-col gap-8">
      <div className="flex justify-between">
        <div>
          <div className="relative focus:outline-none">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MagnifyingGlassIcon className="h-5 w-5" />
            </div>
            <input
              type="search"
              id="default-search"
              className="primary-search"
              placeholder="Search staff"
              required
            />
          </div>
        </div>
        <Link to="add" className="">
          <Button
            variant={"gradient"}
            color={"blue"}
            className="flex items-center px-3 py-1 capitalize"
          >
            <Typography color="inherit" className="font-medium capitalize">
              Add Staff
            </Typography>
          </Button>
        </Link>
      </div>
      <Card>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead className="bg-cyan-600 ">
              <tr>
                {[
                  "id",
                  "name",
                  "birthday",
                  "phone_number",
                  "address",
                  "",
                ].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[15px] font-bold uppercase text-white"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {staffs?.data.map(
                (
                  {
                    id,
                    name,
                    birthday,
                    phone_number,
                    address,
                    user,
                  },
                  key
                ) => {
                  const className = `py-3 px-5 whitespace-nowrap bg-cyan-50  ${
                    key === staffs.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={key}>

                      <td className={className}>
                        <div>{id}</div>
                      </td>
                      <td className={className}>
                        <div>{name}</div>
                      </td>
                      {/* <td className={className}>
                        <div>{gender === 0 ? "Nam" : "Nữ"}</div>
                      </td> */}
                      <td className={className}>
                        <div>{phone_number}</div>
                      </td>

                      <td className={className}>
                        <div>{birthday}</div>
                      </td>

                      <td className={className}>
                        <div>{address}</div>
                      </td>
                      <td className={className}>
                        <div className="flex items-center space-x-3">
                          {/* <Link to={`delete/${id}`}>
                          <Tooltip content="Edit">
                            <TrashIcon className="h-5 w-5 text-red-500" />

                          </Link> */}

                          <Link to={`edituser/${id}`}>
                            <Tooltip content="AddUser">
                              <UserIcon className="h-9 w-5 cursor-pointer text-light-blue-600" />
                            </Tooltip>
                          </Link>

                          <Link to={`${id}`}>
                            <Tooltip content="Edit">
                              <PencilSquareIcon className="h-9 w-5 cursor-pointer text-light-blue-600" />
                            </Tooltip>
                          </Link>
                          <button onClick={() => handleOpen(user?.username, "resetpass")}>
                            <Tooltip content="Reset password">
                              <ArrowPathIcon className="h-5 w-5 cursor-pointer text-red-500" />
                            </Tooltip>
                          </button>
                          <button onClick={() => handleOpen(id, "delete")}>
                            <Tooltip content="delete">
                              <TrashIcon className="h-5 w-5 cursor-pointer text-red-500" />
                            </Tooltip>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
      <div className="m-auto w-fit">
        <Pagination
          count={Math.ceil(staffs?.meta?.totalElements / staffs?.meta?.pageSize)}
          page={page}
          onChange={handleChangePage}
        />
      </div>
      <ConfirmDialog
        title={
          type === "resetpass"
            ? "Reset this staff's password ?"
            : "Delete this staff ?"
        }
        handleClose={handleClose}
        open={open}
        handleOK={handleOK}
      />
    </div>
  );
}

export default Staff;
