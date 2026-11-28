import baseConfig from '@halospv3/hce.shared-config/eslintConfig';
import { defineConfig, type ConfigObject } from 'eslint/config';

const config: ConfigObject[] = defineConfig(
  baseConfig,
);
export default config;
