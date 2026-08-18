import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    // output:'export' no permite el optimizador en runtime; las variantes se
    // pregeneran en build. deviceSizes debe coincidir con WIDTHS del script.
    loader: 'custom',
    loaderFile: './image-loader.js',
    deviceSizes: [640, 828, 1200, 1600],
    imageSizes: [256, 384],
  },
  trailingSlash: true,
};

export default nextConfig;
