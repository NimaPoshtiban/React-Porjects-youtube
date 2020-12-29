const VideoDetail = (props) => {
  if (!props.video) {
    return (
      <div className="ui segment">
        <div className="ui active green elastic loader"></div>
        <br />
        <br />
        <br />
        <br />
        <p className="ui content">Waiting For You To Search For Something...</p>
      </div>
    );
  }
  const videoSrc= `https://www.youtube.com/embed/${props.video.id.videoId}`
  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} title="video player"/>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{props.video.snippet.title}</h4>
        <p>{props.video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
