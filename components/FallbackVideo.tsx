"use client";

import React, { useState } from "react";

interface FallbackVideoProps {
  src: string;
  fallbackImage: string;
  type?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
}

const FallbackVideo: React.FC<FallbackVideoProps> = ({
  src,
  fallbackImage,
  type = "video/webm",
  className = "",
  autoPlay = false,
  loop = false,
  muted = false,
  controls = false,
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={className}>
      {!hasError ? (
        <video
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          controls={controls}
          playsInline
          onError={() => setHasError(true)}
          style={{ width: "100%", height: "100%" }}
        >
          <source src={src} type={type} />
          {/* fallback прямо внутри video */}
          <img
            src={fallbackImage}
            alt="Видео недоступно"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </video>
      ) : (
        <img
          src={fallbackImage}
          alt="Видео недоступно"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      )}
    </div>
  );
};

export default FallbackVideo;
