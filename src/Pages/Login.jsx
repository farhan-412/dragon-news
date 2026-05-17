import { Link } from "react-router";

const Login = () => {
    return (
        <div className="flex justify-center items-center min-h-screen ">
            <div className=" bg-base-100 w-full max-w-sm shrink-0 shadow-2xl rounded-2xl pb-10" >
                <h1 className="text-center p-5 font-semibold text-2xl">Login Your Account</h1>
                <div className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Email Address</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4 text-">Login</button>
                        <p className="pt-5 text-[14px]">Don't have an account? Please <Link className="text-secondary hover:underline" to='/auth/register'>Register</Link></p>
                    </fieldset>
                </div>
            </div>
        </div>
    );
};

export default Login; 