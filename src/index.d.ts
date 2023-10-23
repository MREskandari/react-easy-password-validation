declare module 'PasswordValidator' {
  import * as React from 'react'

  type RuleType = {
    regex: string
    message: string
    isPassed?: boolean
    [key: string]: any
  }

  export interface PasswordValidatorProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    passwordValue: string
    ruleSet: Array<RuleType>
    passedRuleClassName?: string
    failedRuleClassName?: string
    passIcon?: React.ReactNode
    failIcon?: React.ReactNode
  }

  export class PasswordValidator extends React.Component<PasswordValidatorProps, any> {}
}
