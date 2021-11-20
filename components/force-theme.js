import { useTheme } from 'next-themes'

export default ({ theme }) => {
  const { theme, setTheme } = useTheme()
  setTheme(theme)
  return null
}
