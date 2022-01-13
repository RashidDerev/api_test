import React, {useEffect, useState} from "react";
import { getStoryIds } from "../services/hnApi";
import { Story } from "../components/Story";
import { GlobalStyle, StoriesContainerWrapper } from "../styles/StoriesContainerStyles";
import '../styles/Style.css';

export const StoriesContainer = () => {
    const [storyIds, setStoryIds] = useState([]);

    useEffect(() => {
        getStoryIds().then(data => setStoryIds(data))
    }, []);

    return( 
        <>
            <GlobalStyle/>
                <div className="top-shadow"></div>
                <StoriesContainerWrapper data-test-id="stories-container">
                <h1 className="main-title">Hacker News Stories</h1>
                {storyIds.map((storyId, index) => index < 10 ? <Story key={storyId} storyId={storyId}/> : null )};
                
                </StoriesContainerWrapper>
        </>
    );
};