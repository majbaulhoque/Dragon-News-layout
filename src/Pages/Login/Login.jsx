import { Link, useLocation, useNavigate } from "react-router-dom";
import NavBar from "../Shared/Nav Bar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../Component/Provider/ContextAuthProvider";

const Login = () => {

    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleFormSubmit = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        signIn(email, password)
        .then(result =>{
            console.log(result.user);

            // ! Navigate After Login
            navigate(location?.state ? location.state : '/')
            
        })
        .catch(error =>{
            console.log(error)
        })
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
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-4">
                        <button className="btn bg-gray-700 text-white hover:text-black font-bold">Login</button>
                    </div>
                </form>
                <p className="text-center">Don't Have An Account ? <Link className="text-red-600" to='/register'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;