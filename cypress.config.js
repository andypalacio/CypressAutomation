const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
    require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;

module.exports = defineConfig({
  fixturesFolder: "cypress/fixtures",
  videosFolder: "cypress/videos",

  env: {
    BASEURL: "https://admin.getlobee.com",
    USERNAME: "andresepalacio+demo@gmail.com",
    PASSWORD: "123123",
  },

  projectId: "833t1z",
  screenshotsFolder: "./cypress/snapshots/actual",
  trashAssetsBeforeRuns: true,

  e2e: {
    async setupNodeEvents(on, config) {
        const bundler = createBundler({
            plugins: [createEsbuildPlugin(config)],
        });

        on("file:preprocessor", bundler);
        await addCucumberPreprocessorPlugin(on, config);

        return config;
    },
    specPattern: "cypress/e2e/features/*.feature"
  },
});
