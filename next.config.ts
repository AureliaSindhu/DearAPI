import type { NextConfig } from "next";


const nextConfig = {
  output: "export", 

  images: {
    unoptimized: true,
  },
  assetPrefix: "./",
};

module.exports = nextConfig;
