import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

const SERVER_PORT = 3000;
const LIVE_URL = "https://antoniiosc7.github.io";
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  server: { port: SERVER_PORT },
  site: LIVE_URL
});