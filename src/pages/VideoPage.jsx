import SuggestedVideos from "../components/SuggestedVideos";
import YoutubeEmbed from "../components/Video";
import { useParams } from "react-router-dom";
import { videos, categoriesVideo, getSuggestedVideos } from "../constants";

export default function VideoPage() {
  const { category, id } = useParams();
  const videoID = categoriesVideo[category][id];
  function getSuggestedVideos(category) {
    const categoryVideos = categoriesVideo[category];
    if (categoryVideos) {
      const videoCount = categoryVideos.length;
      if (videoCount <= 4) {
        return categoryVideos;
      } else {
        const randomIndexes = [];
        while (randomIndexes.length < 4) {
          const randomIndex = Math.floor(Math.random() * videoCount);
          if (!randomIndexes.includes(randomIndex)) {
            randomIndexes.push(randomIndex);
          }
        }
        const randomVideos = randomIndexes.map(
          (index) => categoryVideos[index]
        );
        return randomVideos;
      }
    } else {
      return [];
    }
  }
  const suggestedVideo = getSuggestedVideos(category);
  console.log(suggestedVideo);
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
      {<SuggestedVideos videoList={suggestedVideo} />}
    </div>
  );
}
