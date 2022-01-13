import React, {useEffect, useState} from "react";
import { getStories as getStories } from "../services/hnApi";
import { Story } from "../components/Story";
import { GlobalStyle, StoriesContainerWrapper } from "../styles/StoriesContainerStyles";
import '../styles/Style.scss';

export const StoriesContainer = () => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        getStories().then(data => setStories(data))
    }, []);

    return( 
        <>
            <GlobalStyle/>
                <div className="top-shadow"></div>
                <StoriesContainerWrapper data-test-id="stories-container">
                <h1 className="main-title">Hacker News Stories</h1>
                {stories.map((story) => <Story key={story.id} story={story}/>)}
                </StoriesContainerWrapper>
        </>
    );
};