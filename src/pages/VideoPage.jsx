import SuggestedVideos from "../components/SuggestedVideos";
import YoutubeEmbed from "../components/Video";
import { useParams } from "react-router-dom";
import { videos, categoriesVideo } from "../constants";

export default function VideoPage() {
  const { category, id } = useParams();
  const videoID = categoriesVideo[category][id];

  return (
    <div className="w-[85%] mx-auto mt-[130px] flex flex-col md:flex-row  justify-between">
      <div className="w-full md:w-[75%]">
        <YoutubeEmbed embedId={videoID.embedID} title={videoID.title} />
        <div className="mt-[20px]">
          <div className="bg-gray-200 rounded-md p-[20px]">
            <h3 class="font-semibold leading-tight text-3xl mt-0 mb-2 text-black">
              {videoID.title}
            </h3>
            <p className="text-black">{videoID.description}</p>
          </div>
        </div>
      </div>
      <SuggestedVideos videoList={videoID.suggested} />
    </div>
  );
}
