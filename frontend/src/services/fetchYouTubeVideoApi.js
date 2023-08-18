import axios from "axios";

const API_KEY = process.env.REACT_APP_YOUTUBE_API
const SEARCH_QUERY = '금융 상식'
const MAX_RESULTS = 5;
const fetchYouTubeVideos = async () => {
    try {
        const response = await axios.get(
            `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${SEARCH_QUERY}&maxResults=${MAX_RESULTS}&part=snippet&type=video`
        );

        return response.data.items;
    } catch(error) {
        console.error('Error fetching Youtube videos:', error);
        return [];
    }
};

export default fetchYouTubeVideos;
