import { useTheme } from 'next-themes'

export default ({ themeInput }) => {
  const { theme, setTheme } = useTheme()
  setTheme(theme == "system" ? themeInput : theme)
  return null
}
