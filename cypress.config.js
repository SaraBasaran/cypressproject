const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'bahudg',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl : "https://www.google.com"
  },
});
