import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuración para GitHub Pages
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Configuración base path para GitHub Pages (si tu repo no es username.github.io)
  // basePath: '/certivo-landingPage', // Descomenta si tu repo no es username.github.io
  // assetPrefix: '/certivo-landingPage/', // Descomenta si tu repo no es username.github.io
  
  // Deshabilitar indicadores de desarrollo
  devIndicators: {
    buildActivity: false,
  },
};

export default nextConfig;
