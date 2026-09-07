import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The GitHub Pages workflow deploys the contents of out/, and previously
  // relied on actions/configure-pages injecting these two settings at build
  // time. Declaring them here means a local `npm run build` reproduces exactly
  // what CI builds, so export-only failures surface before they reach main.
  output: "export",
  images: {
    // Static export has no image optimization server.
    unoptimized: true,
  },
};

export default nextConfig;
