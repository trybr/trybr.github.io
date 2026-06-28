/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Включает статический экспорт
  images: {
    unoptimized: true, // GitHub Pages не поддерживает оптимизацию изображений Next.js
  },
  // Для корректной отдачи .webm
  async headers() {
    return [
      {
        source: "/videos/:path*",
        headers: [
          { key: "Content-Type", value: "video/webm" },
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
