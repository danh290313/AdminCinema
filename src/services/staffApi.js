import { post, deletereq, get, put } from "@/utils/request";

const staffs = {
  data: [
    {
      id: 1,
      name: "testing api",
      phoneNumber: "0123123123",
      gender: 1,
      address: "Test",
      hometown: "An Giang",
      dob: "2001-04-01",
      branch: {
        id: 1,
        name: "Chi nhánh Lê Văn Việt",
        address:
          "22 Lê Văn Việt, phường Tăng Nhơn Phú B, tp Thủ Đức, tp Hồ Chí Minh",
        phoneNumber: "0822341222",
        dateOpened: "2015-02-02",
        active: 1,
      },
      positionId: {
        id: 1,
        name: "Quản lí",
      },
      active: 1,
    },
    {
      id: 2,
      name: "Nguyen Thanh N",
      phoneNumber: "0223344222",
      gender: 1,
      address: "Test",
      hometown: "An Giang",
      dob: "2001-04-01",
      branch: {
        id: 1,
        name: "Chi nhánh Lê Văn Việt",
        address:
          "22 Lê Văn Việt, phường Tăng Nhơn Phú B, tp Thủ Đức, tp Hồ Chí Minh",
        phoneNumber: "0822341222",
        dateOpened: "2015-02-02",
        active: 1,
      },
      positionId: {
        id: 2,
        name: "Thu ngân",
      },
      active: 1,
    },
    {
      id: 3,
      name: "Trần Thị Thùy L",
      phoneNumber: "0888222333",
      gender: 1,
      address: "Test",
      hometown: "Tp Hồ CHí Minh",
      dob: "2002-01-01",
      branch: {
        id: 1,
        name: "Chi nhánh Lê Văn Việt",
        address:
          "22 Lê Văn Việt, phường Tăng Nhơn Phú B, tp Thủ Đức, tp Hồ Chí Minh",
        phoneNumber: "0822341222",
        dateOpened: "2015-02-02",
        active: 1,
      },
      positionId: {
        id: 3,
        name: "Bếp",
      },
      active: 1,
    },
    {
      id: 4,
      name: "Lê Hoàng K",
      phoneNumber: "0999224621",
      gender: 1,
      address: "Test",
      hometown: "Tp Hồ CHí Minh",
      dob: "2001-04-01",
      branch: {
        id: 1,
        name: "Chi nhánh Lê Văn Việt",
        address:
          "22 Lê Văn Việt, phường Tăng Nhơn Phú B, tp Thủ Đức, tp Hồ Chí Minh",
        phoneNumber: "0822341222",
        dateOpened: "2015-02-02",
        active: 1,
      },
      positionId: {
        id: 4,
        name: "Kế toán",
      },
      active: 1,
    },
    {
      id: 5,
      name: "Đinh Văn B",
      phoneNumber: "0998712322",
      gender: 1,
      address: "Test",
      hometown: "Tp Hồ CHí Minh",
      dob: "2001-04-01",
      branch: {
        id: 1,
        name: "Chi nhánh Lê Văn Việt",
        address:
          "22 Lê Văn Việt, phường Tăng Nhơn Phú B, tp Thủ Đức, tp Hồ Chí Minh",
        phoneNumber: "0822341222",
        dateOpened: "2015-02-02",
        active: 1,
      },
      positionId: {
        id: 5,
        name: "Quản lí kho",
      },
      active: 1,
    },
  ],
  links: {
    first: "http://127.0.0.1:8000/api/admin/staffs?page=1",
    last: "http://127.0.0.1:8000/api/admin/staffs?page=1",
    prev: null,
    next: null,
  },
  meta: {
    current_page: 1,
    from: 1,
    last_page: 1,
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://127.0.0.1:8000/api/admin/staffs?page=1",
        label: "1",
        active: true,
      },
      {
        url: null,
        label: "Next &raquo;",
        active: false,
      },
    ],
    path: "http://127.0.0.1:8000/api/admin/staffs",
    per_page: 5,
    to: 5,
    total: 5,
  },
};
const pos = {
  status: "success",
  positions: [
    {
      id: 1,
      name: "Quản lí",
    },
    {
      id: 2,
      name: "Thu ngân",
    },
    {
      id: 3,
      name: "Bếp",
    },
    {
      id: 4,
      name: "Kế toán",
    },
    {
      id: 5,
      name: "Quản lí kho",
    },
  ],
};
const staff = {
  data: {
    id: 6,
    name: "Nguyen Van abxd",
    phoneNumber: "0234586753",
    gender: 0,
    address: "Man Thiện",
    hometown: "Bến Tre",
    dob: "1989-01-01",
    branch: {
      id: 1,
      name: "Chi nhánh Lê Văn Việt",
      address:
        "22 Lê Văn Việt, phường Tăng Nhơn Phú B, tp Thủ Đức, tp Hồ Chí Minh",
      phoneNumber: "0822341222",
      dateOpened: "2015-02-02",
      active: 1,
    },
    position: {
      id: 4,
      name: "Bếp",
    },
    active: 1,
  },
};
export const getStaffs = async (page, token) => {
  const res = await get("/api/staff?page=" + page, { token });
  return res;
};
export const addStaff = async (val, token) => {
  const res = await post("/api/staff", val, { token });
  return res;
};
export const getStaff = async (id, token) => {
  const res = await get("/api/staff/" + id, { token });
  // const res = {};
  // res.data = staff;
  return res;
};
export const getAllPositions = async (token) => {
  const res = await get("/admin/positions", { token });
  return res;
};

export const editStaff = async (id, data, token) => {
  console.log({ data });
  const res = await put("/api/staff/" + id, data, { token });
  return res;
};
export const deleteStaff = async (id, token) => {
  console.log({ token, id });
  const res = await deletereq(`/api/staff/${id}`, {}, { token });
  return res;
};

export const resetPassStaff = async (username, token) => {
  const res = await post(`/api/reset-password?userName=${username}`,{}, { token });
  return res;
};
