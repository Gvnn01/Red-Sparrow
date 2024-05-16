import type Url from "@/interfaces/url"

export const useShowMessage = () => {
  return useState('showMessage', () => false)
}

export const useShortenedUrl = () => {
  return useState<Url | {}>("useShortenedUrl", () => ({}))
}

export const useError = () => {
  return useState('error', () => ({active: false, errorMessage: ''}))
}