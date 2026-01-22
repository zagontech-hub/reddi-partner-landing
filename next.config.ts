import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimización para Docker - genera un bundle standalone mínimo
  output: 'standalone',
};

export default nextConfig;
