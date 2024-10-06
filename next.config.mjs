/** @type {import('next').NextConfig} */
const nextConfig = {
  // Revalidate or refetch content after 30 seconds when requested.
  experimental: {
    staleTimes: {
      dynamic: 30,
    },
  },
};

export default nextConfig;
