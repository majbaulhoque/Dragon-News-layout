import { Link, useLocation, useNavigate } from "react-router-dom";
import NavBar from "../Shared/Nav Bar/NavBar";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../Component/Provider/ContextAuthProvider";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { sendPasswordResetEmail } from "firebase/auth";
const Login = () => {
    // ! Use State
    const [success, setSuccess] = useState('');
    const [invalid, setInvalid] = useState('');
    const [show, setShow] = useState(false);
    const emailRef = useRef()

    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleFormSubmit = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        setSuccess('');
        setInvalid('');

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                setSuccess("Login Successfully")
                e.target.reset()

                // ! Navigate After Login
                navigate(location?.state ? location.state : '/')

            })
            .catch(error => {
                console.log(error)
                setInvalid(error.message)
                e.target.reset()
            })
    }
        const handleForgetPassword = () =>{
            console.log(handleForgetPassword)
            // const email = emailRef.current.value;
            // if(!email){
            //     return;
            // }
            // else(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            //     alert('please write a valid email')
            //     return;
            // }

            // // ! send validate email
            // sendPasswordResetEmail(auth, email)
            // .then(result =>{
            //     console.log(result.user)
            // })
        }
    return (
        <div>
            <NavBar></NavBar>
            <div className="max-w-5xl mx-auto">
                <h3 className="text-center mt-8 py-10 text-3xl font-semibold border-b">Login your account</h3>
                <form onSubmit={handleFormSubmit} className="card-body mx-auto md:w-3/4 lg:w-1/2">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input 
                        type="email" 
                        ref={emailRef}
                        name="email" 
                        placeholder="email"
                        className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type={show ? 'text' : 'password'}
                            name="password" placeholder="password" className="input input-bordered" required />
                        <span className="absolute mt-[52px] ml-[312px]  lg:ml-[425px]" onClick={() => setShow(!show)}>
                            {
                                show ? <FaRegEye /> : <FaRegEyeSlash />
                            }
                        </span>
                        <label className="label">
                            <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        
                    </div>
                    <div className="form-control mt-4">
                        <button className="btn bg-gray-700 text-white hover:text-black font-bold">Login</button>
                    </div>
                    {
                        success && <p className="text-green-600">{success}</p>
                    }
                    {
                        invalid && <p className="text-red-600">{invalid}</p>
                    }
                </form>
                <p className="text-center">Don't Have An Account ? <Link className="text-red-600" to='/register'>Register</Link></p>

            </div>
        </div>
    );
};

export default Login;