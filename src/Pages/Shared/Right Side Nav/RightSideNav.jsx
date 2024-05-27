import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'
import bg1 from '../../../assets/bg1.png'

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-5">
                <h3 className="text-3xl font-semibold">Login With</h3>
                <button className="btn btn-outline w-full">
                    <FaGoogle />
                    Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub />
                    Github
                </button>
            </div>
            {/* Find Us */}
            <div className="p-4 mb-5">
                <h3 className="text-3xl mb-4 font-semibold">Find Us On</h3>
                <a className="p-4 flex text-lg items-center border rounded-t-lg" href="">
                    <FaFacebook className="mr-3" />
                    <span>Facebook</span>
                </a>
                <a className="p-4 flex text-lg items-center border-x" href="">
                    <FaTwitter className="mr-3" />
                    <span>Twitter</span>
                </a>
                <a className="p-4 flex text-lg items-center border rounded-b-lg" href="">
                    <FaInstagram className="mr-3" />
                    <span>Instagram</span>
                </a>
            </div>
            {/* Q-zone */}
            <div className="p-4 space-y-3 mb-5 bg-slate-100">
                <h3 className="text-3xl font-semibold">Q-Zone</h3>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
            {/* Create an Amazing Newspaper */}
            <div className="p-4 space-y-3 mb-5 text-white py-14" style={{ backgroundImage: `url(${bg1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <h3 className="text-3xl font-semibold text-center">Create an Amazing Newspaper</h3>
                <p className="w-48 mx-auto text-center">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <div className="text-center">
                    <button className="px-4 py-2 bg-red-600 text-white">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;