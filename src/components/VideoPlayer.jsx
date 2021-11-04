// var VideoPlayer = (props) => (
//   <div className="video-player">
//     <div className="embed-responsive embed-responsive-16by9">
//       <iframe className="embed-responsive-item" src={"https://www.youtube.com/embed/".concat(props.id.videoId).concat("?autoplay=1")} ></iframe>
//     </div>
//     <div className="video-player-details">
//       <h3>{props.snippet.title}</h3>
//       <div>{props.snippet.description}</div>
//     </div>
//   </div>
// );

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.videoID = props.id.videoID;
    this.title = props.snippet.title;
    this.description = props.snippet.description;
  }

  render() {
    return (
      <div className="video-player">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={"https://www.youtube.com/embed/".concat(this.videoID).concat("?autoplay=1")} ></iframe>
        </div>
        <div className="video-player-details">
          <h3>{this.title}</h3>
          <div>{this.description}</div>
        </div>
      </div>
    );
  }
}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: PropTypes.object
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoPlayer;

// src="https://www.youtube.com/embed/"{props.id.videoId}"?autoplay=1"
// src={"https://www.youtube.com/embed/" + props.id.videoId + "?autoplay=1"}
