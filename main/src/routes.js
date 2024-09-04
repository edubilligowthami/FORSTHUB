import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import AC from "./AC";
import Home from "./home";
import Filter from "./filter";
import Fridge from "./fridge";
import ContactUs from "./contactUs";
import Login from "./login";
import Form from "./form";
import AdminHome from "./adminHome";
import NewDataInsertion from "./newDataInsertion";
import NewRequests from "./newrequestsadmin";
import Maintenanceinfo from "./maintenanceinfo";
import Inventory from "./inventoryAdmin";
import AdminLogin from "./adminLogin";
import Logout from "./userlogout";
import AdminLogout from "./adminLogout";
import PastTransactions from "./pastTransactions";
import AssignedTaks from "./assignedTasks";
import WorkersTasks from "./WorkersTasks";
import AdminWorker from "./adminWorker";
import WorkerLogin from "./workerLogin";
import WorkerLogout from "./workerLogout";

const Routers = () => {
  return (
        <Routes>
      {/* <Route path="/home" element={<Navigate to="/home" />} /> */}
            <Route path="/home" element={<Home/>}/>
            <Route path="/ac" element={<AC />} />
            <Route path="/filters" element={<Filter/>}/>
            <Route path="/fridges" element={<Fridge/>}/>
            <Route path="/contactus" element={<ContactUs/>}/>
            <Route path="/" element={<Login/>}/>
            <Route path="/form" element={<Form/>}/>
            <Route path="/adminhome" element={<AdminHome/>}/>
            <Route path="/newdatainsertion" element={<NewDataInsertion/>}/>
            <Route path="/newrequests" element={<NewRequests/>}/>
            <Route path="/maintenanceinfo/:id" element={<Maintenanceinfo/>}/>
            <Route path="/inventory" element={<Inventory/>}/>
            <Route path="/adminlogin" element={<AdminLogin/>}/>
            <Route path="/userlogout" element={<Logout/>}/>
            <Route path='/adminlogout' element={<AdminLogout/>}/>
            <Route path='/pasttransactions' element={<PastTransactions/>}/>
            <Route path='/assignedtasks' element={<AssignedTaks/>}/>
            <Route path="/workerstasks" element={<WorkersTasks/>}/>
            <Route path="/adminworker" element={<AdminWorker/>}/>
            <Route path='/workerlogin' element={<WorkerLogin/>}/>
            <Route path="/workerlogout" element={<WorkerLogout/>}/>
        </Routes>
    
  );
};

export default Routers;
