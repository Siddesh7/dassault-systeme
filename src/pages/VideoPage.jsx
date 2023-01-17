import SuggestedVideos from "../components/SuggestedVideos";
import YoutubeEmbed from "../components/Video";
import { useParams } from "react-router-dom";
import { videos } from "../constants";
export default function VideoPage() {
  const { id } = useParams();
  console.log(id);
  console.log(videos[id].SuggestedVideos);
  return (
    <div className="w-[85%] mt-[30px] m-auto flex flex-col md:flex-row  justify-between">
      <div className="w-full md:w-[75%]">
        <YoutubeEmbed embedId={videos[id].embedID} title={videos[id].title} />
        <div className="mt-[20px]">
          <div className="bg-gray-200 rounded-md p-[20px]">
            <h3 class="font-semibold leading-tight text-3xl mt-0 mb-2 text-black">
              {videos[id].title}
            </h3>
            <p>{videos[id].description}</p>
          </div>
        </div>
      </div>
      <SuggestedVideos videoList={videos[id].suggested} />
    </div>
  );
}
