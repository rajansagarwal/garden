import 'nextra-theme-docs/style.css';
import '../App.css';
import { ThemeProvider } from 'next-themes'

export default function Nextra({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="dark">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
