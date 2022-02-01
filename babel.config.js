module.exports = {
  env: {
    test: {
      presets: [
        ["@babel/preset-env", { targets: { node: "current" } }],
        "@babel/preset-typescript",
      ],
      plugins: [
        "import-glob",
        [
          "module-resolver",
          {
            // root: ["./src/main"],
            alias: {
              "@main": "./main/src",
            },
          },
        ],
      ],
    },
  },
};
