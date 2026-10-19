/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/learning",
        destination: "/topics",
        permanent: false,
      },
      {
        source: "/learning/:slug*",
        destination: "/topics/:slug*",
        permanent: false,
      },
      {
        source: "/blogs",
        destination: "/blog",
        permanent: false,
      },
      {
        source: "/blogs/:slug*",
        destination: "/blog/:slug*",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
