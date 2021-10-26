import React from "react";
const SignUp = React.lazy(() => import("../Views/Auth/SignUp/index"));
const Admin =  React.lazy(()=> import("../Views/Auth/Components/Admin"));
const SuperAdminR = React.lazy(()=> import("../Views/Screen/user/SuperAdminR"))
const AdminR = React.lazy(()=> import("../Views/Screen/user/AdminR"))
const CustomerR = React.lazy(()=> import("../Views/Screen/user/CustomerR"))
const List = React.lazy(()=> import("../Views/Screen/List"))
const Option1 = React.lazy(()=> import("../Views/Screen/Option1"))
const Option2 = React.lazy(()=> import("../Views/Screen/Option2"))
const MainTrade = React.lazy(()=> import("../Views/Screen/Trading/MainTrade"))
const Trading = React.lazy(()=> import("../Views/Screen/Trading/Trading"))
const Wallet = React.lazy(()=> import("../Views/Screen/Trading/Wallet"))
const Profile = React.lazy(()=> import("../Views/Screen/Trading/Profile"))


export { SignUp , Admin, SuperAdminR, AdminR, CustomerR, List,Option1, Option2, MainTrade, Profile,Trading, Wallet, };
