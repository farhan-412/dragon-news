import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { use } from "react";

const Register = () => {

    const { createUser, setUser, updateUser } = use(AuthContext)

    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                // console.log(result.user)
                const user = result.user

                updateUser({ displayName: name, photoUrl: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo })
                        navigate('/')
                    })
                    .catch((error) => {
                        console.log(error)
                    })

            })
            .catch(error => {
                console.log(error)
            })


        // console.log(name, photo, email, password)

    }
    return (
        <div className="flex justify-center items-center min-h-screen ">
            <div className=" bg-base-100 w-full max-w-sm shrink-0 shadow-2xl rounded-2xl pb-10" >
                <h1 className="text-center p-5 font-semibold text-2xl">Register Your Account</h1>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">
                        {/* Name */}

                        <label className="label">Your Name</label>
                        <input type="text"
                            className="input"
                            name="name"
                            placeholder="Your Name" />

                        {/* photo url */}

                        <label className="label">Photo URL</label>
                        <input type="text"
                            className="input"
                            name="photo"
                            placeholder="Photo URL" />

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

                        <button type="submit" className="btn btn-neutral mt-4 text-">Register</button>
                        <p className="pt-5 text-[14px]">Already have an account? Please
                            <Link className="text-secondary hover:underline" to='/auth/login'> Login</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;