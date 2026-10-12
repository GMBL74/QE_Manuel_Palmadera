const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: 'report.json',
  output: 'cucumber-report.html',
  reportSuiteAsScenarios: true,
  launchReport: true,

  metadata: {
    "Tester": "Manuel Palmadera Ramos",
    "Role": "QA Automation Engineer",
    "Project": "Playwright Cucumber",
    "Browser": "Chromium",
    "Platform": "Windows"
  }
};

reporter.generate(options);