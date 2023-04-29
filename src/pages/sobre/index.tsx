
import { Person } from '@/components/Person'
import { SectionContainer } from '@/components/SectionContainer'
import { SectionFullBgContainer } from '@/components/SectionFullBgContainer'
import { learnPaths } from '@/data/learnPaths'
import { persons } from '@/data/persons'
import Head from 'next/head'
import Image from 'next/image'


export default function AboutPage() {

  const paths = learnPaths

  return (
    <>
    <Head>
      <title>Sobre o projeto - Trilhas da Advocacia</title>
    </Head>
    <main className='scroll-smooth'>

      <SectionFullBgContainer className='px-4 pt-12 pb-12' classNameBg="bg-[url('/bg-element-light.svg')] bg-no-repeat bg-top bg-contain overflow-x-hidden">
        <div className='flex-1 flex flex-col gap-8 pb-12 leading-7'>
          <h1 className='text-3xl md:text-4xl uppercase font-bold'>Sobre o projeto</h1>
          <div className='grid gap-8 '>
            <p>O Trilhas da Advocacia é um portal aglutinador e promotor de todo o conhecimento gerado pela Comissão de Direito, Inovação e Tecnologia da 13ª subseção da OAB Minas Gerais.</p>
            <p>Nossa equipe é responsável pela curadoria de conteúdos próprios produzidos ao longo dos trabalhos da comissão, e de terceiros, possibilitando aos advogados um contato mais organizado e didático de temas como marketing jurídico, legal design e visual law, jurimetria e outras tecnologias do mercado jurídico.</p>
          </div>
        </div>
      </SectionFullBgContainer>

      <SectionFullBgContainer className='p-4 pb-8' classNameBg='bg-primary-500 text-slate-800 hidden md:block'>
        <div className='flex flex-col items-center gap-3 md:flex-row lg:flex-row text-center md:text-left lg:text-left'>
          <div className='flex-1 flex flex-col gap-3 leading-6'>
            <h2 className='text-2xl font-bold mb-4'>Interface progressiva de aprendizagem</h2>
            <ul className='flex flex-col gap-2 list-disc pl-4'>
              <li>Acesse os conteúdos por assunto em trilhas didaticamente planejadas.</li>
              <li>Conteúdos teóricos e práticos para o seu desenvolvimento em cada assunto.</li>
              <li>Acesse conteúdo em texto, vídeos, e-books e muito mais de forma fácil.</li>
              <li>Mensalmente novos conteúdos são disponibilizados na plataforma.</li>
              <li>Acesse e interaja com o perfil público dos instrutores.</li>
              <li>Em breve muito mais funcionalidades para você!</li>
            </ul>
          </div>
          <div className='md:-ml-20 lg:-ml-24 w-full md:w-1/2 lg:w-3/5'>
            <Image src='/computador_interface.png' className='' alt="" width={730} height={527} />
          </div>
        </div>
      </SectionFullBgContainer>

      <SectionContainer className='px-4 pb-24 mt-12'>
        <h2 className='text-2xl font-bold mb-8'>Integrantes da comissão</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          { persons.map((person) => <Person key={person.name} person={person} />) }
        </div>
      </SectionContainer>

      

    </main>
      
    </>
  )
}
