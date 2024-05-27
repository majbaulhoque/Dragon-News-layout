import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/Left Side Nav/LeftSideNav";
import NavBar from "../Shared/Nav Bar/NavBar";
import RightSideNav from "../Shared/Right Side Nav/RightSideNav";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div >
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2">
                    <h2 className="text-4xl">News Coming Soon...</h2>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;