import React, { useEffect, useState } from 'react'

interface IRuleType {
  regex: string | RegExp
  message: string
  isPassed?: boolean
  [key: string]: any
}

interface IPasswordValidator extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  passwordValue: string
  ruleSet: Array<IRuleType>
  passedRuleClassName?: string
  failedRuleClassName?: string
  passIcon?: React.ReactNode
  failIcon?: React.ReactNode
}

const PasswordValidator = ({
  ruleSet,
  passwordValue,
  passedRuleClassName,
  failedRuleClassName,
  passIcon,
  failIcon,
  ...attributes
}: IPasswordValidator) => {
  const [password, setPassword] = useState<string>('')
  const [rules, setRules] = useState<Array<IRuleType> | []>([])

  useEffect(() => {
    setPassword(passwordValue)
  }, [passwordValue])

  useEffect(() => {
    const cloneArr = [
      ...ruleSet.map((item: IRuleType) => {
        return {
          ...item,
          isPassed: item.isPassed || false,
          regex: typeof item.regex === 'string' ? new RegExp(item.regex) : item.regex,
        }
      }),
    ]

    cloneArr.forEach((rule) => {
      if (rule.regex.test(password)) rule.isPassed = true
      else rule.isPassed = false
    })

    setRules(cloneArr)
  }, [password, ruleSet])

  return (
    <div {...attributes}>
      <ul>
        {rules.map((rule, index) => (
          <li
            key={index}
            className={`${
              !rule.isPassed ? failedRuleClassName || 'text-danger' : passedRuleClassName || 'text-success'
            }`}
          >
            {(passIcon || failIcon) && <i>{!rule.isPassed ? (failIcon ? failIcon : '') : passIcon ? passIcon : ''}</i>}
            <span className='ms-2'> {rule.message}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PasswordValidator
