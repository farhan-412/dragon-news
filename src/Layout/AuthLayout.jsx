import { Outlet } from "react-router";
import Navbar from "../component/Navbar";

const AuthLayout = () => {
    return (
        <div className=" bg-base-200 min-h-screen mx-auto">
            <header className="w-11/12 ">
                <Navbar></Navbar>
            </header>
            <main className="w-11/12 mx-auto">
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;