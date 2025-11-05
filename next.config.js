/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sketchfab.com',
      },
    ],
  },
  
  // Strict mode for development
  reactStrictMode: true,
  
  // Keep trailing slashes for compatibility
  trailingSlash: false,
  
  // Webpack config for video files
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm|mkv|avi)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/videos/',
          outputPath: 'static/videos/',
          name: '[name].[hash].[ext]',
        },
      },
    });
    
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/fonts/',
          outputPath: 'static/fonts/',
          name: '[name].[hash].[ext]',
        },
      },
    });
    
    return config;
  },
};

module.exports = nextConfig;

