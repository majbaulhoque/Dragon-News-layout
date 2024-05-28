import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/Left Side Nav/LeftSideNav";
import NavBar from "../Shared/Nav Bar/NavBar";
import RightSideNav from "../Shared/Right Side Nav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCards from "../../Component/News/NewsCards";


const Home = () => {
    const news = useLoaderData();
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <NavBar></NavBar>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div >
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2">
                    {/* News Card */}
                    <NewsCards news={news}></NewsCards>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;