import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
    return (
        <div className="">
            <h1 className="font-bold text-xl">Find Us On</h1>
            <div className="mt-5">
                <button className="btn w-full justify-start p-6"><FaFacebook size={24}></FaFacebook> Facebook</button>
                <button className="btn w-full justify-start p-6"><FaTwitter size={24}></FaTwitter> Twitter</button>
                <button className="btn w-full justify-start p-6"><FaInstagram size={24}> </FaInstagram> Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;