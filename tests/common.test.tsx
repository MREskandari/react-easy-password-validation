import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import { PasswordValidator } from '../src'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(
      <PasswordValidator
        ruleSet={[
          {
            regex: '^.{8,32}$',
            message: 'Must be 8 to 32 character',
          },
          {
            regex: '(?=.*[a-z])',
            message: 'At least one lower case letter exists',
          },
          {
            regex: '(?=.*[A-Z])',
            message: 'At least one upper case letter exists',
          },
          {
            regex: '(?=.*\\d)',
            message: 'At least one digit exists',
          },
        ]}
        passwordValue=''
      />,
    )
  })
})
