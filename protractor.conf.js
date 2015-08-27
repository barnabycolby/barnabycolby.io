exports.config = {
    allScriptsTimeout: 300000,
    capabilities: {
        browserName: 'phantomjs'
    },
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['test/e2e/**/*.js'],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 300000
    }
};
