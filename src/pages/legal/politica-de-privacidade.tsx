import { SectionContainer } from '@/components/SectionContainer'

import Head from 'next/head'


export default function PoliticaDePrivacidadePage() {


  return (
    <>
    <Head>
      <title>Política de privacidade - Trilhas da Advocacia</title>
    </Head>
    <main className='scroll-smooth'>

      <SectionContainer className='px-4 pt-12'>
        <div className='flex-1 flex flex-col gap-8 pb-12 leading-7'>
          <h1 className='text-3xl font-bold md:text-4xl uppercase'>Política de privacidade</h1>
          <div className='grid gap-8 '>
            <p>Texto da política de privacidade.</p>
          </div>
        </div>
      </SectionContainer>

    </main>
      
    </>
  )
}