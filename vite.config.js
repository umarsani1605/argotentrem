import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from "url"
import svgLoader from 'vite-svg-loader'
import path from 'path'

// function viteIgnoreStaticImport(importKeys) {
//   return {
//     name: "vite-plugin-ignore-static-import",
//     enforce: "pre",
//     // 1. insert to optimizeDeps.exclude to prevent pre-transform
//     config(config) {
//       config.optimizeDeps = {
//         ...(config.optimizeDeps ?? {}),
//         exclude: [...(config.optimizeDeps?.exclude ?? []), ...importKeys],
//       };
//     },
//     // 2. push a plugin to rewrite the 'vite:import-analysis' prefix
//     configResolved(resolvedConfig) {
//       const VALID_ID_PREFIX = `/@id/`;
//       const reg = new RegExp(
//         `${VALID_ID_PREFIX}(${importKeys.join("|")})`,
//         "g"
//       );
//       resolvedConfig.plugins.push({
//         name: "vite-plugin-ignore-static-import-replace-idprefix",
//         transform: (code) =>
//           reg.test(code) ? code.replace(reg, (m, s1) => s1) : code,
//       });
//     },
//     // 3. rewrite the id before 'vite:resolve' plugin transform to 'node_modules/...'
//     resolveId: (id) => {
//       if (importKeys.includes(id)) {
//         return { id, external: true };
//       }
//     },
//   };
// }

export default defineConfig({
  base: './',
  plugins: [
    vue(),
    // viteIgnoreStaticImport(["vue"]),
    svgLoader({
      defaultImport: 'url',
      svgoConfig: {
        multipass: true
      }
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
