import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  distDir: 'docs',  // 静的出力先をdocsに変更
};

export default nextConfig;
