// import Counter from "src/components/Counter";
import * as React from "react";
import { Outlet, Link } from "react-router-dom";
import "src/App.css"

const Sidebar = () => {

    return (
        <div>
            <div>
                <Link to="/home">Home </Link>
                <Link to="/counter">Counter</Link>
            </div>
            <Outlet />
        </div>
    )
}

export default Sidebar;