/** @type {import('next').NextConfig} */
const path = require("path");
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
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

module.exports = withBundleAnalyzer(nextConfig);
