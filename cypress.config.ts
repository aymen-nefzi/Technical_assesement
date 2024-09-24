import { defineConfig } from "cypress";
import { allureCypress } from "allure-cypress/reporter";

export default {
  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on, {
        resultsDir: "allure-results",
      });
      return config;
    },
  },
};