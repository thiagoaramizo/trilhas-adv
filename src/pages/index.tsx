
import { PathSmallCard } from '@/components/PathSmallCard'
import { SectionContainer } from '@/components/SectionContainer'
import { SectionFullBgContainer } from '@/components/SectionFullBgContainer'
import { learnPaths } from '@/data/learnPaths'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {

  const paths = learnPaths

  return (
    <>
    <Head>
      <title>Trilhas da Advocacia</title>
    </Head>
    <main className='scroll-smooth'>

      <SectionFullBgContainer className='px-4 pt-8' classNameBg="bg-[url('/bg-element.svg')] bg-no-repeat bg-top bg-contain overflow-x-hidden">
        <div className='flex'>
          <div className='flex flex-col justify-center items-center md:items-start pb-32 text-center md:text-left lg:text-left md:pb-0 lg:pd-0 '>
            <h1 className='text-4xl lg:text-5xl'>
              <strong className='block'>Seu caminho para</strong>evoluir na advocacia
            </h1>
            <span className='block text-lg mt-6 mb-8 text-secondary-300'>Aprenda os principais conceitos da advocacia moderna com profissionais experientes do mercado.</span>
            <Link className='block bg-primary-500 w-fit px-6 py-2 rounded-md text-slate-800 font-semibold transition-all hover:scale-105 hover:bg-slate-200' href={'/trilhas'}>Acessar trilhas</Link>
          </div>
          <div className='animate-slideInRight hidden md:block'>
            <Image src='/imagem_destaque.png' alt="" width={960} height={1155} priority/>
          </div>
        </div>
      </SectionFullBgContainer>

      <SectionFullBgContainer className='p-4 pb-8' classNameBg='bg-primary-500 text-slate-800' id='sobre'>
        <div className='flex flex-col items-center gap-3 md:flex-row text-center md:text-left lg:text-left'>
          <div className='md:-ml-20 lg:-ml-24 w-full md:w-1/2 lg:w-3/5'>
            <Image src='/computador_interface.png' className='' alt="" width={730} height={527} />
          </div>
          <div className='flex-1 flex flex-col gap-3 pt-4 pb-12 items-center md:items-start'>
            <h1 className='text-4xl font-light'><strong className='font-bold'>Sobre</strong> o projeto</h1>
            <p>O Trilhas da Advocacia é um portal aglutinador e promotor de todo o conhecimento gerado pela Comissão de Direito, Inovação e Tecnologia da 13ª subseção da OAB Minas Gerais.</p>
            <p>Nossa equipe é responsável pela curadoria de conteúdos próprios produzidos ao longo dos trabalhos da comissão, e de terceiros, possibilitando aos advogados um contato mais organizado e didático de temas como marketing jurídico, legal design e visual law, jurimetria e outras tecnologias do mercado jurídico.</p>
            <Link className='block mt-4 bg-secondary-500 w-fit px-6 py-2 rounded-md text-slate-100 font-semibold transition-all hover:scale-105' href={'/sobre'}>Saiba mais</Link>
          </div>
        </div>
      </SectionFullBgContainer>

      <SectionContainer className='px-4 pt-24'>
        <div className='flex-1 flex flex-col gap-8 pb-12'>
          <h1 className='text-3xl font-bold'>Conheça as trilhas</h1>
          <div>
            <div className='grid md:grid-cols-2 gap-8'>

              {paths.map((path) => <PathSmallCard key={path.id} name={path.name} link={'/trilhas/' + path.slug} />)}

            </div>
          </div>
        </div>
      </SectionContainer>

      <SectionFullBgContainer className='px-4 pb-24' classNameBg="bg-[url('/bg-element.svg')] bg-no-repeat bg-top bg-contain overflow-x-hidden">
        <div className='pt-52'> 
          <h1 className='text-3xl font-bold pb-8'>Mais conteúdo</h1>
          
          <div className='flex flex-col md:flex-row items-center gap-4'>

            <Image src='/censo_tecnologia.png' alt="" width={470} height={309} className='w-full md:w-2/5 lg:w-2/5' priority/>

            <div className='flex-1 flex flex-col justify-center items-center md:items-start pb-32 text-center md:text-left md:pb-0'>
              <h3 className='text-2xl font-bold mb-4'>Censo da Tecnologia da Advocacia</h3>
              <p className='mb-8'>Relatório da pesquisa realizada em 2022/2023 com os advogados mineiros sobre o uso e domínio das tecnologias pelos advogados.</p>
              <Link className='block bg-secondary-500 w-fit px-6 py-2 rounded-md text-slate-100 font-semibold transition-all hover:scale-105' href={'https://drive.google.com/file/d/1PvvNmu5lBFBuUCko0u6eN7pxyfK6DS9D/view?usp=share_link'} target='_blank'>Acessar relatório</Link>
            </div>  
          </div>

        </div>
      </SectionFullBgContainer>

    </main>
      
    </>
  )
}
