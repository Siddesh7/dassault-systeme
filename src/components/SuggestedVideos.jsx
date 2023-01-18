export default function SuggestedVideos({ videoList }) {
  return (
    <div className="flex flex-col flex-wrap -m-1 md:-m-2 w-full md:w-[22.5%]">
      <h3>Suggested Videos</h3>
      <div className="flex flex-wrap w-full ">
        {videoList.map((video) => (
          <div className="w-full p-[40px] md:p-1 md:p-2 rounded-lg">
            <a href={`${video.href}`} className="relative ">
              <img
                className="rounded-lg h-[180px] md:h-[150px] cover w-full"
                src={`http://drive.google.com/uc?export=view&id=${video.url}`}
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
      </div>
    </div>
  );
}
