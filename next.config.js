/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Включает статический экспорт
  images: {
    unoptimized: true, // GitHub Pages не поддерживает оптимизацию изображений Next.js
  },
};

module.exports = nextConfig;
