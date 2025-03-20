import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  distDir: 'docs',  // 静的出力先をdocsに変更
  basePath: '/helloworld-nextjs-ts-app-router-static',
  assetPrefix: '/helloworld-nextjs-ts-app-router-static/', // 静的ファイルのパス修正
};

export default nextConfig;
