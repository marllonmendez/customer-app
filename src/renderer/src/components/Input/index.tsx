import { ReactElement } from 'react'
import { StyledInput, StyledInputTitle, StyledInputData } from './styles'

type InputProps = {
  label: string
  placeHolder: string
  value: string
  updateValue(value: string): void
  maxLength?: number
}

function Input({ label, placeHolder, value, updateValue, maxLength }: InputProps): ReactElement {
  const handleKeyDown = (event: any): void => {
    if (event.key === 'Enter') {
      event.preventDefault()
    }
  }

  return (
    <StyledInput>
      <StyledInputTitle>{label}</StyledInputTitle>
      <StyledInputData
        placeholder={placeHolder}
        value={value}
        onChange={(e) => updateValue(e.target.value)}
        maxLength={maxLength}
        onKeyDown={handleKeyDown}
      ></StyledInputData>
    </StyledInput>
  )
}

export { Input }
