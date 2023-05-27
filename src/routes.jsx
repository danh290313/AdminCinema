import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  UserGroupIcon,
  HomeModernIcon,
  ReceiptPercentIcon,
  MapIcon,
  TruckIcon,
  BeakerIcon,
  UserIcon,
  AdjustmentsVerticalIcon
} from "@heroicons/react/24/solid";
import { Home, Profile, Notifications } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import { Staff, StaffEdit, StaffAdd } from "./pages/dashboard/staff";
import {
  Customer,
  CustomerAdd,
  CustomerEdit,
} from "@/pages/dashboard/customer";

import {
  Movie,
  MovieAdd,
} from "./pages/dashboard/movie";

import { BuildingStorefrontIcon } from "@heroicons/react/24/solid";




import { UserMinusIcon } from "@heroicons/react/24/outline";


const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      //staff
      {
        notOnSidebar: true,
        path: "/staff/add",
        element: <StaffAdd />,
      },

      {
        notOnSidebar: true,
        path: "/staff/:id",
        element: <StaffEdit />,
      },

   

      {
        icon: <UserIcon {...icon} />,
        name: "staff",
        path: "/staff",
        element: <Staff />,
      },
      //customer
      {
        notOnSidebar: true,
        path: "/customer/add",
        element: <CustomerAdd />,
      },

      {
        notOnSidebar: true,
        path: "/customer/:id",
        element: <CustomerEdit />,
      },

      {
        icon: <UserGroupIcon {...icon} />,
        name: "customer",
        path: "/customer",
        element: <Customer />,
      },

    
      {
        icon: <BeakerIcon {...icon} />,
        name: "movie",
        path: "/movie",
        element: <Movie />,
      },
      {
        notOnSidebar: true,
        path: "/movie/add",
        element: <MovieAdd />,
      },

      
      {
        icon: <AdjustmentsVerticalIcon {...icon} />,
        name: "size",
        path: "/size",
     
      },

      {
        icon: <HomeModernIcon {...icon} />,
        name: "room",
        path: "/warehouse",
     
      },
    
      //Orders
      {
        icon: <ReceiptPercentIcon {...icon} />,
        name: "Schedule",
        path: "/orders",
    
      },
   

      //Branch
   

      {
        icon: <MapIcon {...icon} />,
        name: "branch",
        path: "/branch",
      
      },

      //provider
      {
        icon: <TruckIcon {...icon} />,
        name: "seat",
        path: "/provider",

      },
   
    
      {
        icon: <BuildingStorefrontIcon {...icon} />,
        name: "bill",
        path: "/user",
     
      },
     

      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      },
      {
        icon: <BellIcon {...icon} />,
        name: "notifactions",
        path: "/notifactions",
        element: <Notifications />,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
