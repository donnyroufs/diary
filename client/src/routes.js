import React from "react";
import { MdDashboard, MdList, MdDoneAll, MdDirectionsRun } from "react-icons/md";
import { FaBrain } from "react-icons/fa";

const routes = [
    { icon: <MdDashboard />, route: "overview" },
    { icon: <MdList />, route: "todos" },
    { icon: <MdDoneAll />, route: "habits" },
    { icon: <MdDirectionsRun />, route: "exercises" },
    { icon: <FaBrain />, route: "thoughts" },
];

export default routes;
