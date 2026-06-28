"use client";

import React from "react";

interface AnimatedMediaProps {
  webmSrc: string;
  fallbackImage: string;
  className?: string;
}

const AnimatedMedia: React.FC<AnimatedMediaProps> = ({
  webmSrc,
  fallbackImage,
  className = "",
}) => {
  return (
    <div className={`relative ${className}`}>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        onError={(e) => {
          console.log("❌ Ошибка видео");
          // Скрываем видео и показываем картинку
          e.currentTarget.style.display = "none";
          const img = e.currentTarget.nextElementSibling as HTMLImageElement;
          if (img) img.style.display = "block";
        }}
      >
        <source src={webmSrc} type="video/webm" />
        <img src={fallbackImage} alt="Не поддерживается" />
      </video>
      <img
        src={fallbackImage}
        alt="Запасной вариант"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "none",
        }}
      />
    </div>
  );
};

export default AnimatedMedia;
