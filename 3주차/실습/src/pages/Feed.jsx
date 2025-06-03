import { FeedAction } from '../components/FeedAction';
import { FeedHeader } from '../components/FeedHeader';
import { FeedImage } from '../components/FeedImage';
import {useState} from 'react';
import feedImage from '../assets/feedimg.jpg';
import storyImage from '../assets/storyimg.jpg';



export const Feed = () => {
    const [feedData,setFeedData] = useState([
      {
        "name": "junhee",
        "profile" : feedImage,
        "feedImg" : storyImage,
        "date": "2일",
        "likes" : 5,
    }]
    )

    const handleLike=()=>{
      setFeedData(([feed])=>[{
        ...feed,
        likes:feed.likes +1
    }]);
    }

    return (
      <main className="w-full h-[602px] bg-white flex flex-col border-t border-b border -[#AEAEAE]">
        <FeedHeader profile={feedData[0].profile} name={feedData[0].name} date={feedData[0].date}/>
        <FeedImage feedImg={feedData[0].feedImg} />
        <FeedAction likes={feedData[0].likes} onLike={handleLike}/>
      </main>
    );
};
