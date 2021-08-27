
# Next.js project setup
## With TS, ESLint and Styled Components

- run `yarn create next-app app-name`
- run `yarn add typescript @types/react @types/node -D`
- remove styles folder
- rename `_app.js` to `_app.tsx`
- rename `index.js` to `index.tsx`
- cleanup `index.tsx` and `_app.tsx` files

- run `yarn dev`
- run `yarn add eslint -D`
- run `yarn eslint --init`
  - check syntax, find problems and enforce code style
  - Javascript modules
  - React
  - Typescript - Yes
  - Browser + Node (spacebar)
  - Use popular Styleguide
  - Airbnb
  - JSON format
  - install eslint dependencies
  - run `yarn`
- run `yarn add prettier eslint-plugin-prettier eslint-config-prettier -D`
- add `"jest": true` under `"env"` to `.eslintrc.json`
- extend `"plugin:@typescript-eslint/recommended"`, `"prettier:@typescript-eslint"`, `"prettier/airbnb"`, `"prettier/react"`
- add plugins `@typescript-eslint` and `prettier`
- add rules `"prettier": "error"` `"space-before-function-paren": "off"` `"react/prop-types": "off"`
- create file `.eslintignore` and add `node_modules`, `.next`, `/*.js`
- create file `prettier.config.js`
- create file `.editorconfig`
- run `yarn add styled-components`
- create file `babel.config.js`
- create file `_document.tsx`
- run `yarn add @types/styled-components -D`
- create folder `src` and move `pages` folder inside it
- create folder `styles` inside `src` folder
- create file `global.ts` and import it inside `_app.tsx`
- create file `theme.ts` and add the `ThemeProvider` inside `_app.tsx`
- create file `styled.d.ts`

```
√ How would you like to use ESLint? · style
√ What type of modules does your project use? · esm
√ Which framework does your project use? · react
√ Does your project use TypeScript? · No / Yes
√ Where does your code run? · browser, node
√ How would you like to define a style for your project? · guide
√ Which style guide do you want to follow? · airbnb
√ What format do you want your config file to be in? · JSON
```
