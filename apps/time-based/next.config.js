const path = require("path");

module.exports = {
  reactStrictMode: true,
  transpilePackages: ["@repo/cms", "@repo/ui"],
  output: "standalone",
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../../"),
  },
};
