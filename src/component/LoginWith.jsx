import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const LoginWith = () => {
    return (
        <div>
            <h1 className="font-bold text-xl">Login with</h1>
           <div className="space-y-2 mt-5">
             <button className="btn w-full btn-secondary btn-outline"><FcGoogle size={24} /> Login with google</button>
            <button className="btn w-full btn-primary btn-outline"><FaGithub size={24} />Login with github</button>
           </div>
        </div>
    );
};

export default LoginWith;