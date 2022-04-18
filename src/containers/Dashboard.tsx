import React from "react"
import { Appbar } from "../components/Appbar"
import { Sidebar } from "../components/Sidebar"

export const Dashboard = () => {
    return (
        <div className="container-scroller">
            <Appbar />
            <Sidebar />
        </div>
    )
}