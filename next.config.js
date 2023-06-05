/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const path = require("path");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const withPlugins = require("next-compose-plugins");
const withSvgr = require("next-plugin-svgr");

const nextConfig = {
  // experimental: {
  //   appDir: true,
  // },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "@/styles/variables.scss";
    @import "@/styles/mixins.scss";
  `,
  },
};

module.exports = withPlugins([withBundleAnalyzer, withSvgr], nextConfig);
