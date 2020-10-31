const path = require('path');

module.exports = {
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [
      path.resolve(__dirname, ".."),
      "node_modules",
    ]

    config.resolve.alias = {
      ...config.resolve.alias,
      "~/components": path.resolve(__dirname, "../src/components"),
      "~/utils": path.resolve(__dirname, "../src/utils")
    };

    const resourcesLoader = {
      loader: "sass-resources-loader",
      options: {
        resources: [
          path.resolve(__dirname, "../src/components/bosons/colors.scss"),
          path.resolve(__dirname, "../src/components/bosons/typografy.scss"),
          path.resolve(__dirname, "../src/components/quarks/layout.scss")
        ]
      }
    };
    
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });
    config.module.rules.map(rule => {
			if (
				rule.test.source.includes("scss") ||
				rule.test.source.includes("sass")
			) {
				rule.use.push(resourcesLoader);
			}
    });
    
    return config;
  },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-knobs"
  ]
}