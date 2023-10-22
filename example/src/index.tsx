import React from 'react'
import ReactDOM from 'react-dom/client'
import { PasswordValidator } from 'react-easy-password-validation'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <PasswordValidator />
  </React.StrictMode>,
)
