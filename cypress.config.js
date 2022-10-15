const { defineConfig } = require("cypress");

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
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
