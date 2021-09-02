const sonarqubeScanner = require('sonarqube-scanner');
require('dotenv').config()

sonarqubeScanner({
    serverUrl: process.env.SONAR_HOST_URL,
    token: process.env.SONAR_TOKEN,
    options: {
        'sonar.sources': 'src',
        'sonar.tests': 'src/tests',
        'sonar.inclusions': 'src/**/*.js',
        'sonar.exclusions': 'src/tests/**, src/setupTests.js',
        'sonar.testExecutionReportPaths': 'test-report.xml',
        'sonar.eslint.reportPaths':'eslint-report.json',
        'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info'
    },
}, () => {
    console.log('Scanner Shutdown');
});
