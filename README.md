## react-easy-password-validation

[![NPM version][npm-image]][npm-url]
[![Build][github-build]][github-build-url]
![npm-typescript]
[![License][github-license]][github-license-url]

[npm-url]: https://www.npmjs.com/package/react-easy-password-validation
[npm-image]: https://img.shields.io/npm/v/react-easy-password-validation
[github-license]: https://img.shields.io/github/license/gapon2401/react-easy-password-validation
[github-license-url]: https://github.com/MREskandari/react-easy-password-validation/blob/master/LICENSE
[github-build]: https://github.com/MREskandari/react-easy-password-validation/actions/workflows/publish.yml/badge.svg
[github-build-url]: https://github.com/MREskandari/react-easy-password-validation/actions/workflows/publish.yml
[npm-typescript]: https://img.shields.io/npm/types/react-easy-password-validation

## Installation

```bash
npm install react-easy-password-validation
```

or

```bash
yarn add react-easy-password-validation
```

## Demo

[Demo](https://mreskandari.github.io/react-easy-password-validation)

## Usage/Examples

```javascript
import { PasswordValidator } from 'react-easy-password-validation'

function App() {
  const [password, setPassword] = useState < string > ''

  // Try fetching rules from api or json or a const variable
  const rules = [
    { regex: '^.{8,32}$', message: 'Must be 8 to 32 character' },
    { regex: '(?=.*[a-z])', message: 'At least one lower case letter exists' },
    { regex: '(?=.*[A-Z])', message: 'At least one upper case letter exists' },
    { regex: '(?=.*d)', message: 'At least one digit exists' },
  ]

  return (
    <div>
      <div className='form-group'>
        <label htmlFor='input-password'>Password: </label>
        <input type='password' id='input-password' value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>

      <PasswordValidator
        className='react-easy-password-validator'
        ruleSet={rules}
        passedRuleClassName='passed'
        failedRuleClassName='failed'
        passwordValue={password}
        passIcon={
          <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>
            <path d='M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z' />
          </svg>
        }
        failIcon={
          <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>
            <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
          </svg>
        }
      />
    </div>
  )
}
```

## Features

- easy to use
- easy to customize
- custom hook (coming soon)

## API Reference

| Props                 | Type                                                                     | Description  |
| :-------------------- | :----------------------------------------------------------------------- | :----------- |
| `ruleSet`             | `Array<{regex: String \| RegExp, message: String}>`                      | **Required** |
| `passwordValue`       | `String`                                                                 | **Required** |
| `passedRuleClassName` | `String` representing passed rule class name (default is `text-success`) | **Optional** |
| `failedRuleClassName` | `String` representing failed rule class name (default is `text-danger`)  | **Optional** |
| `passIcon`            | `React.ReactNode`                                                        | **Optional** |
| `failIcon`            | `React.ReactNode`                                                        | **Optional** |

## Related

We are Pinkswan team developing all kinds on software projects

[Contact us](https://pinkswan.ch/)

## 🚀 About Me

I'm MohammadReza ESKANDARI full stack developer at Pinkswan. You can contact me via (mohammad-reza.eskandari@pinkswan.ch)
