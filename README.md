# electron-template-next

## Quick to build a modern electron app！

### Features ✨

- 🏗️ bootstrap by [vite](https://vitejs.dev/) & [electron](https://www.electronjs.org/)
- 📸 ui-framework by [react](https://beta.reactjs.org/)
- 🔍 type-check by [typescript](https://www.typescriptlang.org/)
- 🏭 build by tsc & vite & electron-builder
- 🖼️ ui-component by [@mui/material](https://mui.com/)
- 🎛️ state-management by [zustand](https://zustand-demo.pmnd.rs/)
- ⚓ component-router by [react-router](https://reactrouter.com/)
- 🪝 react-hooks by [ahooks](https://ahooks.js.org/)
- 📡 http-client by [react-query](https://tanstack.com/query/v4)
- 🎭 create immutable-state by [immer](https://immerjs.github.io/immer/)
- 📅 date-tools by [dayjs](https://day.js.org/)
- 🏘️ test-framework by [vitest](https://vitest.dev/)
- 🐙 test by [@testing-library](https://testing-library.com/)
- 👀 lint-code by [eslint](eslint.org) & [prettier](https://prettier.io/)
- 📊 test-coverage by [c8](https://github.com/bcoe/c8)
- 🕵️ commit-check by [husky](https://typicode.github.io/husky/#/) & [lint-staged](https://github.com/okonet/lint-staged)
- 🗃️ package-management by [pnpm](https://pnpm.io/)

### About Env 🌌
- Node version need >=16
- You need install pnpm first!  
  > npm i -g pnpm

### How to use? 🤨

  Step1：clone this project  
  Step2：pnpm i  
  Step3：make your components in src/\*\*  
  Step4: make your test code  in test/\*\*  
  Step5: run scripts (dev/build/preview/test/lint)  

  that's all, happy hacking!  

### Script 🪃
- dev
- build
- preview
- test
- lint

### Catalog 📑

```txt
├─.vscode
├─dist
├─coverage
├─node_modules
├─public
├─.eslintrc
├─.eslintignore
├─.gitignore
├─.prettierrc
├─.prettierignore
├─index.html
├─package.json
├─pnpm-lock.yaml
├─README.md
├─tsconfig.json
├─vite.config.ts
├─electron
    ├─ipc_main
    ├─preloads
    ├─windows
    ├─electron-env.d.ts
    ├─env.ts
    └─index.ts
└─src
    ├─app
    | ├─@types
    | ├─apis
    | ├─components
    | ├─constants
    | ├─hooks
    | ├─pages
    | ├─routers
    | ├─stores
    | ├─theme
    | ├─utils
    | ├─App.tsx
    | └─index.ts
    ├─shared
    | ├─components
    | ├─hooks
    | └─utils
    ├─test
    | └─setup.ts
    ├─index.css
    ├─index.tsx
    └─env.d.ts
```
