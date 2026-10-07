const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'k2eh6m',
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome-report',
    overwrite: true,
    html: true,
    json: true,
  },
  e2e: {
    baseUrl: 'https://automationexercise.com',
    blockHosts: ['*googlesyndication.com', '*doubleclick.net', '*googleadservices.com'],
    retries: {
      runMode: 2,
      openMode: 1,
    },
  },
});