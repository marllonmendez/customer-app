import React, { ReactElement } from 'react'

import { StyledInput, StyledTitle } from './styles'

type InputProps = {
  label: string
  placeHolder: string
  value?: string
  handle?: (format: string) => void
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  maxLength?: number
}

function Input({
  label,
  placeHolder,
  value,
  handle,
  onChange,
  maxLength
}: InputProps): ReactElement {
  return (
    <div>
      <StyledTitle>{label}</StyledTitle>
      <StyledInput
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
        onBlur={() => (handle ? handle(value as string) : '')}
        maxLength={maxLength}
      ></StyledInput>
    </div>
  )
}

export { Input }
