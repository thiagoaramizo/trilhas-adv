
import { Header } from '@/components/Header'
import { SectionContainer } from '@/components/SectionContainer'
import { SectionFullBgContainer } from '@/components/SectionFullBgContainer'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>Trilhas da Advocacia</title>
    </Head>
    <main>

      <SectionContainer className='px-4 py-8'>
        Seção 1
      </SectionContainer>

      <SectionFullBgContainer className='px-4 py-8' classNameBg='bg-primary-500 text-slate-800'>
        Seção 2
      </SectionFullBgContainer>

      <SectionContainer className='px-4 py-8'>
        Seção 3
      </SectionContainer>

    </main>
      
    </>
  )
}
