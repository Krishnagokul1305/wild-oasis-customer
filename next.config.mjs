/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wild-oasis-ltls.onrender.com",
        port: "",
        pathname: "/api/v1/public/img/cabins/**",
      },
    ],
  },
};

export default nextConfig;
