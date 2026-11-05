// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig(({ command }) => ({
  site: 'https://groovesoul.github.io',
  base: command === 'dev' ? '/' : '/groove-soul',
  trailingSlash: 'always',
}));
