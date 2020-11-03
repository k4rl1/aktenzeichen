const { defaults: tsjPreset } = require('ts-jest/presets');
const merge = require('merge');

module.exports = merge.recursive(tsjPreset, {
    collectCoverageFrom: [
        "**/*.ts",
        "!**/node_modules/**",
        "!**/*.config.js",
        "!**/coverage/**",
    ],
    moduleNameMapper: {
        "@\/(.*)$": "<rootDir>/src/$1",
    },

    roots: [
        "<rootDir>"
    ],
    testEnvironment: 'node',
    transform: {
        "^.+\\.ts?$": "ts-jest",
    },
});
