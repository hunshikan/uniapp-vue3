🚀🚀🚀 一个Uniapp的起始模版，Vite,Vue3,TypeScript

<br/>

<p align='center'>
<a href="https://uniapp-vue3.netlify.app">预览</a>
</p>

Inspired by [Vitesse](https://github.com/antfu/vitesse) ❤

### Features

- ⚡️ [Vue3](https://vuejs.org/), [Vite 4](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [ESBuild](https://github.com/evanw/esbuild) - 就是快！
- 🗂 [基于文件的路由](https://github.com/uni-helper/vite-plugin-uni-pages)
- 📦 [组件自动化加载](https://github.com/uni-helper/vite-plugin-uni-components)
- 🎨 [UnoCSS](https://github.com/antfu/unocss) - 高性能且极具灵活性的即时原子化 CSS 引擎
- 😃 [各种图标集为你所用](https://github.com/antfu/unocss/tree/main/packages/preset-icons)
- 🔥 使用 [新的 `<script setup>` 语法](https://github.com/vuejs/rfcs/pull/227)
- 🍍 [使用 Pinia 的状态管理](https://github.com/vuejs/pinia)
- 📥 [API 自动加载](https://github.com/antfu/unplugin-auto-import) - 直接使用 Composition API 与UniAPP API 无需引入
- 🦾 TypeScript, 当然

<br>

## 预配置

### UI 框架

- [UnoCSS](https://github.com/antfu/unocss) - 高性能且极具灵活性的即时原子化 CSS 引擎
- [UniAPP-NutUi](https://github.com/yang1206/uniapp-nutui) - 支持TS与 Uniapp的多端开发组件库
- Uni UI - 性能最好的UniApp组件库

### Icons

- [Iconify](https://iconify.design) - 使用任意的图标集，浏览：[🔍Icônes](https://icones.netlify.app/)
- [UnoCSS 的纯 CSS 图标方案](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

### 插件

- Router
  - [`vite-plugin-uni-pages`](https://github.com/uni-helper/vite-plugin-uni-pages) - 在 Vite 驱动的 uni-app 上使用基于文件的路由系统。
  - [`vite-plugin-uni-layouts`](https://github.com/uni-helper/vite-plugin-uni-layouts) - Vite 下 uni-app 的可定制布局框架。
- [Pinia](https://pinia.vuejs.org) - 直接的, 类型安全的, 使用 Composition API 的轻便灵活的 Vue 状态管理
- [`vite-plugin-uni-components`](https://github.com/uni-helper/vite-plugin-uni-components) - 自动加载组件
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - 直接使用 Composition API 等，无需导入
- [`vite-plugin-uni-manifest`](https://github.com/uni-helper/vite-plugin-uni-manifest#readme) - 使用 TypeScript 编写 uni-app 的 manifest.json
- [`alova`](https://uniajax.ponjs.com) - 轻量级的请求策略库
- [`unocss-applet`](https://github.com/unocss-applet/unocss-applet) - 在小程序中使用 unocss

## 使用

### 开发

```bash
pnpm i
```

```bash
pnpm dev:对应平台 如 pnpm dev:mp-weixin
```

### 构建

构建该应用只需要执行以下命令

```bash
pnpm build:对应平台 如 pnpm build:mp-weixin
```

## Variations

- [react-template](https://github.com/yang1206/react-template.git)

- [vue-template](https://github.com/yang1206/vue-template.git)
