import 'nextra-theme-docs/style.css';
import '../App.css';
import ForceTheme from '../components/force-theme'

export default function Nextra({ Component, pageProps }) {
  return(
    <>
      <ForceTheme theme="dark" />
      <Component {...pageProps} />
    </>
  )
}
