
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://www.gettyimages.com/photos/nigeria-elections',
        port: '',
        pathname: '/photos/nigeria-elections/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
