const path = require("path");

module.exports = {
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       data: `
  //         @import "@/styles/basics/grids.scss";
  //       `
  //     }
  //   }
  // },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, "./src/styles/main.scss")]
    }
  }
};
