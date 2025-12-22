const VideoCards = ({ info }) => {
  if (!info) return null;

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className=" mb-4 cursor-pointer">
      <div className="w-full rounded-xl overflow-hidden bg-gray-200">
        <img
          className="w-full h-40 md:h-44 lg:h-48 object-cover"
          alt="thumbnail"
          src={thumbnails.medium.url}
        />
      </div>
      <div className="mt-2 px-1">
        <h3 className="font-semibold text-sm md:text-base line-clamp-2 text-gray-900">
          {title}
        </h3>
        <p className="text-xs md:text-sm text-gray-600 mt-1">{channelTitle}</p>
        <p className="text-xs text-gray-500">{statistics?.viewCount} views</p>
      </div>
    </div>
  );
};

export default VideoCards;
