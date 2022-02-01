module.exports = {
  env: {
    test: {
      presets: [
        ["@babel/preset-env", { targets: { node: "current" } }],
        "@babel/preset-typescript",
      ],
      plugins: [
        "rewire-ts",
        "import-glob",
        [
          "module-resolver",
          {
            alias: {
              "@main": "./main/src",
            },
          },
        ],
      ],
    },
  },
};
