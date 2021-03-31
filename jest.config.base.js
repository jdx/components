const {
  default: umiConfig,
} = require('@umijs/test/lib/createDefaultConfig/createDefaultConfig');

const defaultConfig = umiConfig(process.cwd(), {});

const path = require('path');

module.exports = {
  ...defaultConfig,
  setupFiles: [...defaultConfig.setupFiles],
  moduleNameMapper: {
    '@arvinxu/image-gallery': '<rootDir>/packages/image-gallery/src',
    '@arvinxu/preloader': '<rootDir>/packages/preloader/src',
    '@arvinxu/macos-traffic-light':
      '<rootDir>/packages/macos-traffic-light/src',
    '@arvinxu/journal-map': '<rootDir>/packages/journal-map/src',
    '@arvinxu/float-label-input': '<rootDir>/packages/float-label-input/src',
    '@arvinxu/page-loading': '<rootDir>/packages/page-loading/src',
    '@arvinxu/mindflow': '<rootDir>/packages/mindflow/src',
    '@arvinxu/tag-selector': '<rootDir>/packages/tag-selector/src',
  },
  rootDir: path.resolve(__dirname, '.'),
};
