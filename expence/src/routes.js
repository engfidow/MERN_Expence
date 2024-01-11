// import React from "react";

// // Admin Imports
// // import MainDashboard from "views/admin/default";


// // Icon Imports
// import {
//   MdHome,
//   MdOutlineShoppingCart,
//   MdBarChart,
//   MdPerson,
//   MdLock,
//   MdLogout
// } from "react-icons/md";

// import DashboardPage from "pages/DashboardPage";
// import ExpencePage from "pages/ExpencePage";
// import LoginPage from "pages/LoginPage";
// import ProfilePage from "pages/ProfilePage";
// import IncomePage from "pages/IncomePage";

// // import {
  
// // } from "react-icons/fa";

// const routes = [
//   {
//     name: "Main Dashboard",
//     path: "/",
//     icon: <MdHome className="h-6 w-6" />,
//     component: <DashboardPage />,
//   },
//   {
//     name: "Expence",
//     path: "/expense",
//     icon: <MdOutlineShoppingCart className="h-6 w-6" />,
//     component: <ExpencePage/>,
//     // secondary: true,
//   },
//   {
//     name: "Income",
//     path: "/income",
//     icon: <MdBarChart className="h-6 w-6" />,
//     component: <IncomePage />,
//   },
//   {
//     name: "Profile",
//     path: "/profile",
//     icon: <MdPerson className="h-6 w-6" />,
//     component: <ProfilePage />,
//   },
//   // {
//   //   name: "Logout",
//   //   path: "/login",
//   //   icon: <MdLogout className="h-6 w-6" />,
//   //   component: <LoginPage />,
//   // },
 
 
// ];
// export default routes;

import React from "react";

// Admin Imports





// Auth Imports


// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
} from "react-icons/md";
import Dashboard from "views/admin/default/Dashboard";
import Expence from "views/admin/expence/Expence";
import Income from "views/admin/income";
import Login from "components/loging/Login";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <Dashboard />,
  },
  {
    name: "Expense",
    layout: "/admin",
    path: "expense",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <Expence />,
    secondary: true,
  },
  {
    name: "Income",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "income",
    component: <Income />,
  },
  
  {
    name: "Logout ",
    layout: "/auth",
    path: "login",
    icon: <MdLock className="h-6 w-6" />,
    component: <Login />,
  },
 
];
export default routes;

