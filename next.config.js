/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: "@svgr/webpack" }],
    });
    return config;
  },
  images: {
    domains: [process.env.NEXT_PUBLIC_AWS_S3_DOMAIN],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
