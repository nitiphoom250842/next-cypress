// reportingSetup.js
const MochaJunitReporter = require('mocha-junit-reporter');

module.exports = (on) => {
  on('after:run', (results) => {
    // Here you need to ensure that the results are passed correctly
    const reporterOptions = {
        mochaFile: 'cypress/reports/junit-results.[hash].xml',
    };

    const reporter = new MochaJunitReporter(results, reporterOptions);
    reporter.write();
  });
};
