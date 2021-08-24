const sonarqubeScanner = require('sonarqube-scanner');
require('dotenv').config()

sonarqubeScanner({
    serverUrl: `${process.env.SONAR_HOST_URL}`,
    token:`${process.env.SONAR_TOKEN}`,
    options: {
        'sonar.sources': 'src',
        'sonar.tests': 'src/tests',
        'sonar.inclusions': 'src/**/*.js', // Entry point of your code
        'sonar.exclusions': 'src/tests/**, src/setupTests.js',
        'sonar.testExecutionReportPaths': 'test-report.xml',
        'sonar.eslint.reportPaths':'eslint-report.json'
    },
}, () => {
    console.log('Scanner Shutdown');
});
