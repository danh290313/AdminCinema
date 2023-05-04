import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Tooltip,
  Progress,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import {
  ArrowPathIcon,
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
  TrashIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
// import { authorsTableData, projectsTableData } from "@/data";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { Pagination } from "@mui/material";
import ConfirmDialog from "@/components/ConfirmDialog";
import useCus from "@/hooks/useCus";
import { data } from "autoprefixer";
export function Customer() {
  const [idChoosing, setIdChoosing] = useState(null);
  const [open, setOpen] = useState(false);
  const [type, setType] = useState(false);
  const [customer, setCustomer] = useState();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState(null);
  const { getAllCus, deleteCus } = useCus();
  useEffect(() => {
    (async () => {
    const res = await getAllCus(page, search);
      console.log({ res });
      setCustomer(res);
    })();
  }, [page, search]);

  const handleSearch = (search) => { 
    setSearch(search);
  }

  const handleOpen = (id) => {
    setOpen(true);
    setIdChoosing(id);
  };
  const handleOK = () => {
    setOpen(false);
    (async () => {
      await deleteCus(idChoosing);
      let npage;
      console.log({ customer });
      if (customer?.data?.length === 1) {
        npage = page - 1;
      } else npage = page;
      const res = await getAllCus(npage);
      setCustomer(res);
      setPage(npage);
    })();
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChangePage = (e, npage) => {
    setPage(npage);
  };
  return (
    customer && (
      <div className="mt-12 mb-8 flex flex-col gap-8">
        <div className="flex justify-between">
          <div>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon className="h-5 w-5" />
              </div>
              <input
                type="search"
                id="default-search"
                className="primary-search"
                placeholder="Search customer"
                onChange={() => {
                  handleSearch(event.target.value);
                }}
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
                Add Customer
              </Typography>
            </Button>
          </Link>
        </div>
        <Card>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr className="bg-cyan-600 ">
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
                {customer?.data.map(
                  (
                    {  id,
                      name,
                      birthday,
                      phone_number,
                      address,
                      user, },
                    key
                  ) => {
                    const className = `py-3 px-5 whitespace-nowrap bg-cyan-50  ${
                      key === customer.length - 1
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
                            <button onClick={() => handleOpen(id)}>
                              <Tooltip content="delete">
                                <TrashIcon className="h-5 w-5 text-red-500" />
                              </Tooltip>
                            </button>

                            <Link to={`${String(id)}`}>
                              <Tooltip content="Edit">
                                <PencilSquareIcon className="h-9 w-5 cursor-pointer text-light-blue-600" />
                              </Tooltip>
                            </Link>
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
            count={Math.ceil(customer?.meta?.totalElements / customer?.meta?.pageSize)}
            page={page}
            onChange={handleChangePage}
          />
        </div>
        <ConfirmDialog
          title={"Delete this customer ?"}
          handleClose={handleClose}
          open={open}
          handleOK={handleOK}
        />
      </div>
    )
  );
}

export default Customer;
