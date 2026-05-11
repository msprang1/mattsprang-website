/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/leadership-development",
        destination: "/talent-development",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
