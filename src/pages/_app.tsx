import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp
