import { Link, NavLink } from "react-router";
import userIcon from '../assets/user.png'
import { AuthContext } from "../Provider/AuthProvider";
import { use } from "react";

const Navbar = () => {
    const {user} = use(AuthContext)
    return (
        <div className="flex justify-between items-center py-5">
            <div className="">{user.email}</div>
            <div className="nav flex gap-3 text-accent ml-50">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className="login_btn flex gap-3">
                <img src={userIcon} alt="" />
                <Link to='/auth/login' className="btn btn-primary px-10">Login</Link >
            </div>
        </div>
    );
};

export default Navbar;