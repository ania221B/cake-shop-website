import { useLocation } from 'react-router-dom'

export function usePageLocation () {
  return useLocation().pathname
}
