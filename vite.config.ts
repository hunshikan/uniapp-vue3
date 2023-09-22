import process from 'node:process'
import type { ConfigEnv } from 'vite'
import { loadEnv } from 'vite'
import { defineConfig } from 'vitest/config'
import { createViteProxy } from './build/config'
import { setupVitePlugins } from './build/plugins'
import { convertEnv, getRootPath, getSrcPath } from './build/utils'

// https://vitejs.dev/config/
export default defineConfig((configEnv: ConfigEnv) => {
  const srcPath = getSrcPath()
  const rootPath = getRootPath()
  const isBuild = configEnv.command === 'build'
  const viteEnv = convertEnv(loadEnv(configEnv.mode, process.cwd()))
  const { VITE_PORT, VITE_USE_PROXY, VITE_PROXY_TYPE } = viteEnv
  return {
    plugins: setupVitePlugins(viteEnv, isBuild),
    server: {
      host: '0.0.0.0',
      port: VITE_PORT,
      open: false,
      proxy: createViteProxy(VITE_USE_PROXY, VITE_PROXY_TYPE as ProxyType),
    },
    envPrefix: ['VITE_', 'UNI_'],
    build: {
      target: 'es6',
      cssTarget: 'chrome61',
      reportCompressedSize: false,
      sourcemap: false,
      chunkSizeWarningLimit: 1024, // chunk 大小警告的限制（单位kb）
      commonjsOptions: {
        ignoreTryCatch: false,
      },
    },
    optimizeDeps: {
      exclude: ['vue-demi'],
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "nutui-uniapp/styles/variables.scss";',
        },
      },
    },
    resolve: {
      alias: {
        '~': rootPath,
        '@': srcPath,
      },
    },
    test: {
      environment: 'jsdom',
      singleThread: true,
    },
  }
})
