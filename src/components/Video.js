import { useEffect, useRef, useState } from "react";

function Video({ component }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.src = component.file;
    video.loop = component.info.repeat;
    if (isPlaying) {
      video.play();
    }
  }, [component, isPlaying]);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const videoStyles = {
    position: component.style["position"],
    width: component.style["width"],
    height: component.style["height"],
    top: component.style["top"],
    left: component.style["left"],
    borderRadius: component.style["border-radius"],
    backgroundColor: component.style["background-color"],
    backgroundPosition: component.style["background-position"],
    backgroundRepeat: component.style["background-repeat"],
    backgroundSize: component.style["background-size"],
    fontFamily: component.style["font-family"],
    opacity: component.style["opacity"],
    filter: component.style["filter"],
    lineHeight: component.style["line-height"],
    boxShadow: component.style["box-shadow"],
    zIndex: component.style["z-index"],
    objectFit: component.style["object-fit"],
    right: component.style["right"],
    bottom: component.style["bottom"],
  };

  return (
    <div>
      <video
        ref={videoRef}
        style={videoStyles}
        controls
        preload="auto"
        autoPlay={isPlaying}
      />
      {!isPlaying && (
        <button
          style={{
            position: "relative",
            top: "768px",
            left: "200px",
            marginBottom: "20px",
          }}
          onClick={handlePlay}
        >
          Play Video
        </button>
      )}
    </div>
  );
}

export default Video;
