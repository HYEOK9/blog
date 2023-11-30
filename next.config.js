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
  env: {
    AWS_CLOUDFRONT_URL: process.env.NEXT_PUBLIC_AWS_CLOUDFRONT_URL,
    AWS_CLOUDFRONT_DOMAIN: process.env.NEXT_PUBLIC_AWS_CLOUDFRONT_DOMAIN,
  },
  images: {
    domains: [`${process.env.NEXT_PUBLIC_AWS_CLOUDFRONT_DOMAIN}`],
    formats: ["image/webp", "image/avif"],
  },
};

module.exports = nextConfig;
