import { defineConfig } from 'cypress';
import reportingSetup from './reportingSetup'; // Import the reporting setup

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // Set the base URL for your app
    specPattern: 'cypress/e2e/**/*.cy.ts', // Location of test files
    supportFile: 'cypress/support/e2e.ts', // Support file (if any)
    
    setupNodeEvents(on, config) {
      reportingSetup(on); // Use the reporting setup
      console.log('Cypress configuration:', config); // Log config for troubleshooting
    },
  },
  
  video: true,  // Enable video recording
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
  videoCompression: 32,  // Compress video to save space
  videoUploadOnPasses: false,  // Prevent video upload for passing tests
  screenshotOnRunFailure: true,  // Take screenshot on test failure
});
