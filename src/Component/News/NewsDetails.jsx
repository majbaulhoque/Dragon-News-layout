import { useLoaderData, useParams } from "react-router-dom";
import Header from "../../Pages/Shared/Header/Header";
import RightSideNav from "../../Pages/Shared/Right Side Nav/RightSideNav";
import NewsData from "./NewsData";
import { useEffect, useState } from "react";
import NavBar from "../../Pages/Shared/Nav Bar/NavBar";

const NewsDetails = () => {
    const { id } = useParams(); // Get the ID from the URL
    const newsData = useLoaderData(); // Get the loaded news data

    const [currentNews, setCurrentNews] = useState(null); // State to store the current news item

    useEffect(() => {
        if(newsData && id){
            const foundNews = newsData.find(data => data._id === id)
            console.log(foundNews)
            setCurrentNews(foundNews)
        }
    }, [id, newsData]); // Run the effect whenever id or newsData changes

    if (!currentNews) { // If currentNews is null, show a loading message
        return <p>Loading...</p>;
    }

    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3 ">
                    <NewsData read={currentNews}></NewsData> {/* Pass the current news item to NewsData */}
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;
