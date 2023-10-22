#react-easy-password-validation

[![NPM version][npm-image]][npm-url]
[![Build][github-build]][github-build-url]
![npm-typescript]
[![License][github-license]][github-license-url]

## Installation:

```bash
npm install react-easy-password-validation --save-dev
```

or

```bash
yarn add -D react-easy-password-validation
```

## Usage :

Add `PasswordValidator` to your component:

```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import { PasswordValidator } from 'react-easy-password-validation'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <PasswordValidator />
    </React.StrictMode>,
)

```

[npm-url]: https://www.npmjs.com/package/react-easy-password-validation
[npm-image]: https://img.shields.io/npm/v/react-easy-password-validation
[github-license]: https://img.shields.io/github/license/gapon2401/react-easy-password-validation
[github-license-url]: https://github.com/MREskandari/react-easy-password-validation/blob/master/LICENSE
[github-build]: https://github.com/MREskandari/react-easy-password-validation/actions/workflows/publish.yml/badge.svg
[github-build-url]: https://github.com/MREskandari/react-easy-password-validation/actions/workflows/publish.yml
[npm-typescript]: https://img.shields.io/npm/types/react-easy-password-validation