import { Link } from "react-router";

const Register = () => {
    return (
        <div className="flex justify-center items-center min-h-screen ">
            <div className=" bg-base-100 w-full max-w-sm shrink-0 shadow-2xl rounded-2xl pb-10" >
                <h1 className="text-center p-5 font-semibold text-2xl">Register Your Account</h1>
                <div className="card-body">
                    <fieldset className="fieldset">
                        {/* Name */}

                        <label className="label">Your Name</label>
                        <input type="text" className="input" placeholder="Your Name" />

                        {/* photo url */}

                        <label className="label">Photo URL</label>
                        <input type="text" className="input" placeholder="Photo URL" />

                        {/* email */}

                        <label className="label">Email Address</label>
                        <input type="email" className="input" placeholder="Email" />

                        {/* password */}

                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />

                        <button className="btn btn-neutral mt-4 text-">Register</button>
                        <p className="pt-5 text-[14px]">Already have an account? Please <Link className="text-secondary hover:underline" to='/auth/login'>Login</Link></p>
                    </fieldset>
                </div>
            </div>
        </div>
    );
};

export default Register;