const { defineConfig } = require('cypress')

module.exports = defineConfig({
    reporter: 'junit',
    reporterOptions: {
        mochaFile: 'cypress/results/output.xml',
    },
    fixturesFolder: false,
    e2e: {
        supportFile: false,
        specPattern: "spec/*.cy.js",
        defaultBrowser: 'chrome',
    },
})
