import { Link, NavLink } from "react-router";
import userIcon from '../assets/user.png'
import { AuthContext } from "../Provider/AuthProvider";
import { use } from "react";

const Navbar = () => {
    const { user, logOut } = use(AuthContext)

    const handleLogOut = () => {

        logOut()

        logOut()
            .then(() => {
                alert("You Logged out Successfully")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className="flex justify-between items-center py-5">
            <div className="">{user && user.email}</div>
            <div className="nav flex gap-3 text-accent ml-50">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className="login_btn flex gap-3">
                <img src={userIcon} alt="" />
                {
                    user ? <Link onClick={handleLogOut} to='/auth/login' className="btn btn-outline btn-primary px-10">LogOut</Link > :
                        <Link to='/auth/login' className="btn btn-outline btn-primary px-10">Login</Link >

                }
            </div>
        </div>
    );
};

export default Navbar;