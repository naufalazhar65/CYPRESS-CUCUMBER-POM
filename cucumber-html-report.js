// *** Let name it cucumber-html-report.js **
const report = require('multiple-cucumber-html-reporter')
report.generate({
	jsonDir: 'cypress/cucumber-json', // ** Path of .json file **//
	reportPath: './reports/cucumber-html-report',
	metadata: {
		browser: {
			name: 'chrome',
			version: '119',
		},
		device: 'Local test machine',
		platform: {
			name: 'mac',
			version: 'Mac OS Sonoma',
		},
	},
	customData: {
		title: "Run info",
		data: [
		  { label: "Project", value: "Custom project" },
		  { label: "Release", value: "1.2.3" },
		  { label: "Cycle", value: "B11221.34321" },
		  { label: "Execution Start Time", value: "Nov 19th 2017, 02:31 PM EST" },
		  { label: "Execution End Time", value: "Nov 19th 2017, 02:56 PM EST" },
		],
	  },
})
