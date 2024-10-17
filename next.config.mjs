/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "utfs.io" }, { hostname: "img.clerk.com" }],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
