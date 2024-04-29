const report = require('multiple-cucumber-html-reporter')

function getCurrentTime() {
	const now = new Date()
	return now.toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })
}

function getUniqueCycle() {
	const now = new Date()
	return `Cycle_${now.getFullYear()}${(now.getMonth() + 1)
		.toString()
		.padStart(2, '0')}${now.getDate().toString().padStart(2, '0')}_${now
		.getHours()
		.toString()
		.padStart(2, '0')}${now.getMinutes().toString().padStart(2, '0')}${now
		.getSeconds()
		.toString()
		.padStart(2, '0')}`
}

report.generate({
	jsonDir: 'cypress/cucumber-json',
	reportPath: './reports/cucumber-html-report',
	metadata: {
		browser: {
			name: 'chrome',
			version: '124',
		},
		device: 'Local test machine',
		platform: {
			name: 'mac',
			version: 'Mac OS Sonoma',
		},
	},
	customData: {
		title: 'Run info',
		data: [
			{ label: 'Project', value: 'Custom project' },
			{ label: 'Release', value: '1.2.3' },
			{ label: 'Cycle', value: getUniqueCycle() },
			{ label: 'Execution Start Time', value: getCurrentTime() },
			{ label: 'Execution End Time', value: getCurrentTime() },
		],
	},
})
