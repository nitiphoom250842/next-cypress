import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // Set the base URL for your app
    specPattern: 'cypress/e2e/**/*.cy.ts', // Location of test files
    supportFile: 'cypress/support/e2e.ts', // Support file (if any)
    setupNodeEvents(on, config) {
      // Add any setup logic for node events like tasks or custom commands
    },
  },
  video: false, // Disable video recording
  screenshotsFolder: 'cypress/screenshots', // Customize folder for screenshots
  videosFolder: 'cypress/videos', // Customize folder for videos
});
