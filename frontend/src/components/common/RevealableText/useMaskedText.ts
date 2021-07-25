import { useMemo } from 'react'

export type useMaskedTextOptions = {
  text: string
  showingCharacters?: number
}

export const useMaskedText = ({ text, showingCharacters = 0 }: useMaskedTextOptions) => {
  return useMemo(() => {
    const hideCharLength = text.length - showingCharacters
    const showChars = text.substring(hideCharLength)
    return `${Array(hideCharLength).fill('*').join('')}${showChars}`
  }, [text, showingCharacters])
}