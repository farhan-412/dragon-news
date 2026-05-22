import { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {

    const{signInUser} = use(AuthContext)

    const location= useLocation();
    // console.log(location)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value
        const password = form.password.value

        signInUser(email, password)
        .then(result=>{
            console.log(result.user)
            navigate(`${location.state ? location.state : "/"}`)

        })
        .catch((error)=>{
            alert(error)
        })

    }
    return (
        <div className="flex justify-center items-center min-h-screen ">
            <div className=" bg-base-100 w-full max-w-sm shrink-0 shadow-2xl rounded-2xl pb-10" >
                <h1 className="text-center p-5 font-semibold text-2xl">Login Your Account</h1>
                <form onSubmit={handleSubmit} className="card-body">
                    <fieldset className="fieldset">
                        {/* email */}

                        <label className="label">Email Address</label>
                        <input type="email"
                            className="input"
                            name="email"
                            placeholder="Email" />

                        {/* password */}

                        <label className="label">Password</label>
                        <input type="password"
                            className="input"
                            name="password"
                            placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type="submit" className="btn btn-neutral mt-4 text-">Login</button>
                        <p className="pt-5 text-[14px]">Don't have an account? Please 
                            <Link className="text-secondary hover:underline" to='/auth/register'>Register</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login; 