/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify:true,
  optimizeFonts:true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
      
      },
      
    ],
    minimumCacheTTL:1500000,
  },
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.json$/,
      use: ['json-loader'],
      type: 'javascript/auto',
    });

    return config;
  },
};

module.exports = nextConfig