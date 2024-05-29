import Header from "../Shared/Header/Header";
import NavBar from "../Shared/Nav Bar/NavBar";

const Career = () => {
    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>
            <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Join Our Team</h1>
                    <h2 className="text-xl text-gray-700 mb-6">We are always looking for talented individuals</h2>
                    <p className="text-gray-600 mb-4">No job posts are currently available. Please check back later or send us your resume at <a href="mailto:careers@example.com" className="text-blue-500 hover:underline">careers@example.com</a>.</p>
                    <p className="text-gray-600 mb-8">Meanwhile, explore our website and learn more about us!</p>
                    <button className="btn btn-outline">
                        Learn More About Us
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Career;
