import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-color);
  padding: 30px;
  margin: 20px;
  border-radius: 24px;

  h1 {
    text-align: center;
    color: var(--secondary-color);
  }
`

export const StyledInput = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

export const StyledInputTitle = styled.p`
  color: var(--secondary-color);
  font-weight: 700;
  margin: 20px 0 0;
`

export const StyledInputData = styled.input`
  padding: 12px;
  border: 2px solid var(--border-color);
  color: var(--text-color);
  font-size: 18px;
  border-radius: 12px;
  margin-bottom: 12px;
  width: 97%;
`
