import {
  ArrowPathIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
  TrashIcon,
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
import useBranch from "@/hooks/useBranch";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Pagination } from "@mui/material";
import { positions } from "@mui/system";
export function Branch() {
  const [idChoosing, setIdChoosing] = useState(null);
  const [open, setOpen] = useState(false);
  const [branch, setBranch] = useState();
  const [page, setPage] = useState(branch?.meta?.current_page);
  const { getBranches, deleteBranch } = useBranch();
  
  useEffect(() => {
    (async () => {
      const res = await getBranches();
      // console.log(data);
      setBranch(res);
    })();
  }, []);
  const handleOpen = (id) => {
    setOpen(true);
    setIdChoosing(id);
  };
  const handleOK = () => {
    setOpen(false);
    (async () => {
      await deleteBranch(idChoosing);
      let npage;
      if (branch?.data?.length === 1) npage = page - 1;
      else npage = page;
      const res = await getBranches(npage);
      setBranch(res);
      if (npage !== page) setPage(npage);
    })();
    
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChangePage = (e, npage) => {
    setPage(npage);
  };
  return (
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
              Add Branch
            </Typography>
          </Button>
        </Link>
      </div>
      <Card>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead className="bg-cyan-600">
              <tr>
                {[
                  "name",
                  "address",
                  "phoneNumber",
                  "dateOpened",
                  "active",
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
              {branch?.data?.map(
                (
                  { id,
                    name,
                    address,
                    phoneNumber,
                    dateOpened,
                    active,
                  },
                  key
                ) => {
                  const className = `py-3 px-5 whitespace-nowrap bg-cyan-50  bg-cyan-50 ${
                    key === branch.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={key}>
                      <td className={className}>
                        <div>{name}</div>
                      </td>
                      <td className={className}>
                        <div>{address}</div>
                      </td>
                      <td className={className}>
                        <div>{phoneNumber}</div>
                      </td>
                      <td className={className}>
                        <div>{dateOpened}</div>
                      </td>
                      <td className={className}>
                        <div>{String(active)==="1"?"True":"False"}</div>
                      </td>
                      
                      <td className={className}>
                        <div className="flex items-center space-x-3">
                          {/* <Link to={`delete/${id}`}>
                          <Tooltip content="Edit">
                            <TrashIcon className="h-5 w-5 text-red-500" />

                          </Link> */}

                          <Link to={`${String(id)}`}>
                            <Tooltip content="Edit">
                              <PencilSquareIcon className="h-9 w-5 cursor-pointer text-light-blue-600" />
                            </Tooltip>
                          </Link>
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
          count={Math.ceil(branch?.meta?.total / branch?.meta?.per_page)}
          page={page}
          onChange={handleChangePage}
        />
      </div>
      <ConfirmDialog
        title={"Delete this Branch ?"}
        handleClose={handleClose}
        open={open}
        handleOK={handleOK}
      />
    </div>
  );
}

export default Branch;
