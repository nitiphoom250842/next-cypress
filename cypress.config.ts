import { defineConfig } from 'cypress';
import reportingSetup from './reportingSetup'; // Import the reporting setup

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // Set the base URL for your app
    specPattern: 'cypress/e2e/**/*.cy.ts', // Location of test files
    supportFile: 'cypress/support/e2e.ts', // Support file (if any)
    setupNodeEvents(on, config) {
      reportingSetup(on); // Use the reporting setup
    },
  },
  video: false, // Disable video recording
  screenshotsFolder: 'cypress/screenshots', // Customize folder for screenshots
  videosFolder: 'cypress/videos', // Customize folder for videos
});
