import React from "react";
const SignUp = React.lazy(() => import("../Views/Auth/SignUp/index"));
const Admin =  React.lazy(()=> import("../Views/Auth/Components/Admin"));
const SuperAdminR = React.lazy(()=> import("../Views/Screen/user/SuperAdminR"))
const AdminR = React.lazy(()=> import("../Views/Screen/user/AdminR"))
const CustomerR = React.lazy(()=> import("../Views/Screen/user/CustomerR"))


export { SignUp , Admin, SuperAdminR, AdminR, CustomerR};
