//credentials page:https://console.cloud.google.com/apis/credentials?project=youtube-project-481512
//  https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=VIDEO_ID_HERE&maxResults=10&key=AIzaSyAE24zAYzCoLlKMXtV472yjfiwiK-e41nI-e41nI

export const OFFSET = 10;

const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export const SHORTS_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=shorts&type=video&videoDuration=short&key=" +
  GOOGLE_API_KEY;

  export const MUSIC_API =
  'https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&videoCategoryId=10&regionCode=GB&maxResults=10&key='+
  GOOGLE_API_KEY;
  // https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&videoCategoryId=10&regionCode=GB&maxResults=10&key=AIzaSyAE24zAYzCoLlKMXtV472yjfiwiK-e41nI

  export const GAMING_API=
  'https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&videoCategoryId=20&regionCode=GB&maxResults=10&key='+
  GOOGLE_API_KEY;
// https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&videoCategoryId=20&regionCode=GB&maxResults=10&key=AIzaSyAE24zAYzCoLlKMXtV472yjfiwiK-e41nI

  export const NEWS_API =
  'https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&videoCategoryId=25&regionCode=GB&maxResults=10&key='+
  GOOGLE_API_KEY;
  // https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&videoCategoryId=25&regionCode=GB&maxResults=10&key=AIzaSyAE24zAYzCoLlKMXtV472yjfiwiK-e41nI

  export const SPORTS_API =
  'https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&order=viewCount&regionCode=GB&maxResults=10&key='+GOOGLE_API_KEY+'&q=';
  
  export const PODCAST_API =
   'https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=podcast&order=viewCount&regionCode=GB&maxResults=10&key='+GOOGLE_API_KEY;

  // https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&videoCategoryId=25&regionCode=GB&maxResults=10&key=AIzaSyAE24zAYzCoLlKMXtV472yjfiwiK-e41nI

export const COMMENTS_API =
  "https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&maxResults=10&key=" +
  GOOGLE_API_KEY +
  "&videoId=";

export const SEARCH_API =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&key=" +
  GOOGLE_API_KEY +
  "&q=";
// export const SEARCH_API='https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&key=AIzaSyAE24zAYzCoLlKMXtV472yjfiwiK-e41nI&q=travel'

export const YOUTUBE_VIDEOS_API =
  "https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=GB&maxResults=50&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SUGGESTIONS_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const HAMBUR_LOGO =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAADPz89LS0uWlpb39/eCgoKQkJCxsbH29vZiYmI4ODh0dHTX19empqbFxcXr6+sQEBDh4eEbGxu7u7s0NDR6enpXV1egoKDJyclvb28ODg6IiIhcXFwfHx8ZGRnwNjATAAACZUlEQVR4nO3dCW7CMBCFYRdIw75vbSm9/y2rqKgUVRo72NJoxv93gveUkGBj7BAAAAAAAAAAAAAAAAAAoAKrdjq0Y9qu+tVbH1/sOa7TC7baYZ/UJvZrZtpJnzZrkgputHNm2KRUPGinzHKIF3zVzpjpNVZwq50w2zbScKodMNtULjjRzlfARGw41o5XwFhsONeOV8BcbGj3ZX83Extqpyui8oY77XQFXMWGJ+14BZzEhlbHTX/JY6iBdrwCFmJDD48auWBYaufLtow0NP803cUKhoV2xEyRT6H9+zR6j3bO2ikznFMKhrDSzvm05GnhxuYgap40l3izHlmbcpuNekx53y7kdmDHts/lAwAAAAAAAAAAxjRvy5Edy7e+P1zsh9q/JfU23PfoN7hqx33KdZBa0O5i9ugy9h+f2jkzfKYUfNdOmeU9XtD6Sm95lXfwsFhfXqofwkU7YLZLpKF2vgLkgnYXC93Jy4bsvgrv5JeivS9r/w3Fhh/a8QrYiA210xVR+TX0/zn0/yz1/z708KiRC1bwvdT+2CI6JeV+fFjBGL+CeRrLT5vEubYK5kuD/znvjvffLQAAAAAAAAAAgCHO94myt9fXoddeXxOj+7XFFkD/srtsKHHPPff7Jrrf+9L//qVf2hEzRfegtX2PdmL3qXa+AuSC/vfz9r8nu/999a3v5t2Rn6ba6YqovKH/c2ZsDpseyWcFWV/l3ZFXettfqh/9I7D7c9cqODvP/H+7EhazW5tke5RwhmVoLI+Bk84h9X+WbLA7hko9DzhUcKZzx/m53AAAAAAAAAAAAAAAAABg0zfn21Nf0tdOJAAAAABJRU5ErkJggg==";

export const YT_LOGO =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7PmCA18-IPKweXk2Jl7_fs0qdy5A-FhIaQg&s"; 

export const USER_ICON =
  "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png";
