export default function SuggestedVideos({ videoList }) {
  return (
    <div className="flex flex-col flex-wrap -m-1 md:-m-2 w-full md:w-[22.5%] mt-[20px] md:mt-0">
      <h3>Suggested Videos</h3>
      <div className="grid grid-cols-2 md:flex flex-wrap w-full ">
        {videoList.length > 0 &&
          videoList.map((video) => (
            <div className="w-full p-[10px] md:p-1 md:p-2 rounded-lg">
              <a
                href={`${
                  video.href.startsWith("mech/")
                    ? video.href.substring(5)
                    : video.href.startsWith("phy/")
                    ? video.href.substring(4)
                    : video.href.startsWith("math/")
                    ? video.href.substring(5)
                    : video.href
                }`}
                className="relative "
              >
                <img
                  className="rounded-lg h-[180px] md:h-[150px] cover w-full"
                  src={`http://drive.google.com/uc?export=view&id=${video.thumbnail}`}
                  alt=""
                />{" "}
                <div className="absolute bottom-0 w-full py-[6px] px-[12px] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 rounded-b-lg ">
                  <h5 className="text-black text-medium font-medium mb-2">
                    {video.title}
                  </h5>
                </div>
              </a>
            </div>
          ))}
        {videoList.length == 0 && <p>No videos</p>}
      </div>
    </div>
  );
}
