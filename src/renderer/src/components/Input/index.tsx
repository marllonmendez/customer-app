import { ReactElement } from 'react'

import { StyledInput, StyledInputTitle, StyledInputData } from './styles'

type InputProps = {
  label: string
  placeHolder: string
  value: string
  updateValue(value: any): void
  maxLength?: number
}

function Input({
  label,
  placeHolder,
  value,
  updateValue,
  maxLength,
}: InputProps): ReactElement {
  return (
    <StyledInput>
      <StyledInputTitle>{label}</StyledInputTitle>
      <StyledInputData
        placeholder={placeHolder}
        value={value}
        onChange={(e) => updateValue(e.target.value)}
        maxLength={maxLength}
      ></StyledInputData>
    </StyledInput>
  )
}

export { Input }
