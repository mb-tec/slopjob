const { defineConfig } = require('cypress')

module.exports = defineConfig({
    reporter: 'teamcity',
    fixturesFolder: false,
    e2e: {
        supportFile: false,
        specPattern: "spec/*.cy.js",
        defaultBrowser: 'chrome',
    },
})
