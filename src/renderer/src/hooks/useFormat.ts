import { useState } from 'react'

export const useFormat = (): {
  handleFormat: (format: string) => void
  currentFormat: string
} => {
  const [currentFormat, setCurrentFormat] = useState<string>('')

  const handleFormat = (format: string): void => {
    setCurrentFormat(format)
  }

  return { handleFormat, currentFormat }
}
