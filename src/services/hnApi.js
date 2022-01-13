import axios from "axios";

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const topStoriesUrl = `${baseUrl}topstories.json`;
export const storyUrl = `${baseUrl}item/`;
export const userUrl = `${baseUrl}user/`;

export async function getStories(){
    const storyIds = await axios.get(topStoriesUrl).then(({data}) => data);
    const storyIdsToLoad = storyIds.slice(0, 10);
    const storyUrls = storyIdsToLoad.map(id => `${storyUrl + id}.json`);
    const stories = await axios.all(storyUrls.map((endpoint) => axios.get(endpoint).then(({data}) => data)));
    const userIds = new Set(stories.map(story => story.by));
    const userUrls = [...userIds].map(id => `${userUrl + id}.json`);
    const users = await axios.all(userUrls.map((endpoint) => axios.get(endpoint).then(({data}) => data)));
    const karmaByUserId = new Map();
    users.forEach(user => karmaByUserId.set(user.id, user.karma));
    stories.forEach(story => story.karma = karmaByUserId.get(story.by));
    return stories.sort((a,b) => a.score - b.score);
}; 

