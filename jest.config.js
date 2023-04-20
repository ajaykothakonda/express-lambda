module.exports = {
    testEnvironment: 'node',
    roots: ['<rootDir>/test'],
    testMatch: ['**/*.test.ts'],
  
    reporters: [
      "default",
      [
        "jest-junit",
        {
          outputDirectory: "test-reports",
          outputName: "test-report.xml",
        },
      ],
    ],
  };