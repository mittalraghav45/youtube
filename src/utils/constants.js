//credentials page:https://console.cloud.google.com/apis/credentials?project=youtube-project-481512  
const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export const YOUTUBE_VIDEOS_API =
  "https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=GB&maxResults=50&key=" +
  GOOGLE_API_KEY;
