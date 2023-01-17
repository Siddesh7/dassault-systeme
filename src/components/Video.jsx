const YoutubeEmbed = ({ embedId, title }) => (
  <iframe
    width="100%"
    src={`https://www.youtube.com/embed/${embedId}`}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    title={title}
    className={"rounded-md h-[254px] md:h-[483px]"}
  />
);

export default YoutubeEmbed;
