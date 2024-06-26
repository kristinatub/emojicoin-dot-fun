// @ts-check

const DEBUG = process.env.BUILD_DEBUG === "true";
const styledComponentsConfig = {
  displayName: true,
  ssr: true,
  fileName: true,
  minify: false,
};
const debugConfigOptions = {
  productionBrowserSourceMaps: true,
  outputFileTracing: true,
  swcMinify: false,
  cleanDistDir: true,
  experimental: {
    serverMinification: false,
    serverSourceMaps: true,
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  crossOrigin: "use-credentials",
  typescript: {
    tsconfigPath: "tsconfig.json",
  },
  compiler: {
    styledComponents: DEBUG ? styledComponentsConfig : true,
  },
  ...(DEBUG ? debugConfigOptions : {}),
  transpilePackages: ["@sdk"],
};

export default nextConfig;
