/** @type {import('next').NextConfig} */
// module.exports = {
//   output: 'export',
//   distDir: 'dist',
//   swcMinify: true,
//   trailingSlash: true,
//   skipTrailingSlashRedirect: true,
//   images: {
//     unoptimized: true,
//   },
//   reactStrictMode: true,
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   rewrites: async () => {
//     return [
//       {
//         source: '/',
//         destination: '/index.html',
//       },
//     ];
//   },
//   typescript: {
//     // !! WARN !!
//     // Dangerously allow production builds to successfully complete even if
//     // your project has type errors.
//     // !! WARN !!
//     ignoreBuildErrors: true,
//   },
//   eslint: {
//     // Warning: This allows production builds to successfully complete even if
//     // your project has ESLint errors.
//     ignoreDuringBuilds: true,
//   },
// };
module.exports = {
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  // swcMinify: true,
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

