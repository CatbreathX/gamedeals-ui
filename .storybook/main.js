module.exports = {
  "stories": [
    "../stories/**/*.stories.js",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  babel: async (options) => {
    options.plugins.push(
    [
      "module-resolver",
      {
        "root": [
          "./tests",
          "./src"
        ],
      }
    ]);
    return { ...options }
  },
}
