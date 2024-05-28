import NewsCard from "./NewsCard";


const NewsCards = ({news}) => {
    return (
        <div>
            <div>
                {
                    news?.map(aNews => <NewsCard key={aNews.id} aNews={aNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default NewsCards;