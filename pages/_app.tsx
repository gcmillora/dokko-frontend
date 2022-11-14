import '../styles/globals.css'
import { Typography } from "@mui/material";
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
