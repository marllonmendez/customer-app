import React, { ReactElement } from 'react'

import { StyledInput, StyledTitle } from './styles'

type InputProps = {
  label: string
  placeHolder: string
  value?: string
  handle?: (format: string) => void
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function Input({ label, placeHolder, value, handle, onChange }: InputProps): ReactElement {
  return (
    <div>
      <StyledTitle>{label}</StyledTitle>
      <StyledInput
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
        onBlur={() => (handle ? handle(value as string) : '')}
        maxLength={11}
      ></StyledInput>
    </div>
  )
}

export { Input }
