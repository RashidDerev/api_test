import React, {useState, useEffect} from "react";
import { getStory, getUser } from "../services/hnApi";
import '../styles/Style.css';

export const Story = ({storyId}) => {

    const [story, setStory] = useState({});
    const [user, setUser] = useState({});

    useEffect(()=>{
        getStory(storyId).then(data => data && data.url && setStory(data));
    },[]);
    useEffect(()=>{
        getUser(story.by).then(data => setUser(data));
    },[user.karma]);

    return story && story.url ? (
        <div className="story">
                <div className="story-title">
                    <img className="user-icon" src={`https://picsum.photos/id/${Math.floor(Math.random() * 50)}/50/50`} />
                    <a className="title" href={story.url}>{story.title}</a>
                </div>
                <div className="story-info">
                    <div className="story-by info">
                        By: <span>{story.by}</span> 
                    </div>

                    <div className="story-time info">
                        Karma: <span>{user.karma}</span>
                    </div>

                    <div className="story-time info">
                        Posted: <span>{story.time}</span>
                    </div>

                    <div className="story-score info">
                        Score: <span>{story.score}</span>
                    </div>
                </div>
        </div>
    ):null;
}