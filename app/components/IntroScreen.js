import { useEffect, useRef, useState } from "react";

export default function IntroScreen({ onIntroComplete }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.play().catch((error) => console.error("Video play failed:", error));

      // When the video ends, transition to the homepage
      video.onended = () => {
        if (onIntroComplete) {
          onIntroComplete();
        }
      };
    }
  }, [onIntroComplete]);

  return (
    <div className="intro-screen">
      {/* Fullscreen Video */}
      <video ref={videoRef} autoPlay muted playsInline className="intro-video">
        <source src="/intro-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}