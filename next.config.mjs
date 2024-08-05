/** @type {import('next').NextConfig} */
import bundleAnalyzer from '@next/bundle-analyzer';
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true' // 当环境变量ANALYZE为true时开启
});
const nextConfig = {
  // 关闭严格模式
  reactStrictMode: false,
  sassOptions: {
    additionalData: '@import "@/styles/index.scss";'
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https', // 图片资源的协议
        hostname: 'bkimg.cdn.bcebos.com' // 图片资源的域名
      }
    ]
  }
};

// export default nextConfig;
export default withBundleAnalyzer(nextConfig);
