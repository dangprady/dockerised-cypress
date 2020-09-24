const report = require('multiple-cucumber-html-reporter');

report.generate({
	//jsonDir: 'E:\\CypressBDD\\cypress\\cucumber-json',
    //reportPath: 'E:\\CypressBDD\\cypress\\reports',
	jsonDir: '/app/cypress/cucumber-json',
    reportPath: '/app/cypress/reports',
    displayDuration: true,
	metadata:{
        browser: {
            name: 'chrome',
            version: '76'
        },
        device: 'Local test machine',
        platform: {
            name: 'Windows',
            version: '10'
        }
    },
    
});