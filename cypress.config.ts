import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    env: {
      username: "admin",
      password: "admin",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
