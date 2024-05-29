import Header from "../Shared/Header/Header";
import NavBar from "../Shared/Nav Bar/NavBar";


const About = () => {
    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>
            <div className="bg-gray-100 min-h-screen py-12">
                <div className="container mx-auto px-4">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h1 className="text-4xl font-bold mb-6 text-gray-800 text-center">About Us</h1>
                        <p className="text-gray-600 mb-6">
                            Welcome to our newspaper website! Established in 1980, our publication has been committed to delivering accurate, timely, and insightful news to our readers. With a strong emphasis on journalistic integrity, we strive to uphold the highest standards in reporting.
                        </p>
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h2>
                        <p className="text-gray-600 mb-6">
                            Our mission is to inform, educate, and engage our readers by providing comprehensive news coverage on local, national, and international events. We believe in the power of the press to foster a well-informed and active citizenry.
                        </p>
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our History</h2>
                        <p className="text-gray-600 mb-6">
                            From our humble beginnings as a small local paper, we have grown into a trusted source of news for millions. Over the decades, we have adapted to the changing media landscape, embracing digital platforms to reach a wider audience.
                        </p>
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Team</h2>
                        <p className="text-gray-600 mb-6">
                            Our editorial team consists of experienced journalists and editors dedicated to delivering the news with accuracy and fairness. Meet the people who bring you the stories that matter.
                        </p>
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contact Us</h2>
                        <p className="text-gray-600">
                            We value our readers' feedback and are here to answer any questions you may have. Feel free to reach out to us through our contact page or email us directly at contact@newspaper.com.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
