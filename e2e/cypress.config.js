const { defineConfig } = require('cypress')

module.exports = defineConfig({
    reporter: 'teamcity',
    // fixturesFolder: false,
    e2e: {
        supportFile: false,
        specPattern: '/app/e2e/spec.cy.js',
        defaultBrowser: 'chrome',
    },
})
