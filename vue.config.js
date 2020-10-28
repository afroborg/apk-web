module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/common/main.scss";`,
      },
    },
  },
};
