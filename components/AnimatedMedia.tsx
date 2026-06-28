"use client";

import React, { useState, useRef, useEffect } from "react";

interface AnimatedMediaProps {
  webmSrc: string;
  fallbackImage: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

const AnimatedMedia: React.FC<AnimatedMediaProps> = ({
  webmSrc,
  fallbackImage,
  className = "",
  autoPlay = true,
  loop = true,
  muted = true,
}) => {
  const [showFallback, setShowFallback] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  // Сброс при смене src
  useEffect(() => {
    setShowFallback(false);
    setIsLoaded(false);

    // Очищаем старый таймаут
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Устанавливаем таймаут: если видео не загрузилось за 5 секунд — показываем картинку
    timeoutRef.current = setTimeout(() => {
      if (!isLoaded) {
        console.log("⏰ Таймаут: показываем картинку");
        setShowFallback(true);
      }
    }, 5000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [webmSrc, isLoaded]);

  // Обработчик успешной загрузки
  const handleLoadedData = () => {
    console.log("✅ Видео загружено");
    setIsLoaded(true);
    setShowFallback(false);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  // Обработчик ошибки
  const handleError = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    console.error("❌ Ошибка видео:", e);
    setShowFallback(true);
  };

  // Принудительный запуск после загрузки
  useEffect(() => {
    if (isLoaded && autoPlay) {
      videoRef.current?.play().catch((err) => {
        console.warn("⚠️ Автовоспроизведение заблокировано:", err);
        // Не показываем fallback, просто оставляем видео в паузе
      });
    }
  }, [isLoaded, autoPlay]);

  // Добавляем key для принудительного пересоздания видео
  const videoKey = webmSrc;

  return (
    <div className={`relative ${className}`}>
      {!showFallback ? (
        <>
          <video
            ref={videoRef}
            key={videoKey}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src="/images/photo-moshed.mp4" type="video/mp4" />
            <source src="/images/photo-moshed.webm" type="video/webm" />
            <img src={fallbackImage} alt="Не поддерживается" />
          </video>
          {/* Показываем заглушку, пока видео не загружено */}
          {!isLoaded && (
            <img
              src={fallbackImage}
              alt="Загрузка..."
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: 0.7,
              }}
            />
          )}
        </>
      ) : (
        <img
          src={fallbackImage}
          alt="Медиа недоступно"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      )}
    </div>
  );
};

export default AnimatedMedia;
