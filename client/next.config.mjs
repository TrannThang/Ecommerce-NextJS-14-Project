/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "asset.example.com",
        port: "",
        pathname: "/account123/**",
      },
    ],
  },
};

export default nextConfig;
