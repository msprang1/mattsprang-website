/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/leadership-development",
        destination: "/",
        permanent: true,
      },
      {
        source: "/talent-development",
        destination: "/",
        permanent: true,
      },
      {
        source: "/newsletter",
        destination: "/",
        permanent: true,
      },
      {
        source: "/speaking",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
