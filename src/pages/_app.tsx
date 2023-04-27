import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='bg-background w-full min-h-screen text-slate-100 grid grid-rows-layout'>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
