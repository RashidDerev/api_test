import React from "react";
import '../styles/Style.scss';

export const Story = ({story}) => {

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
                        Karma: <span>{story.karma}</span>
                    </div>

                    <div className="story-time info">
                        Posted: <span>{new Date(story.time*1000).toLocaleString()}</span>
                    </div>

                    <div className="story-score info">
                        Score: <span>{story.score}</span>
                    </div>
                </div>
        </div>
    ):null
}