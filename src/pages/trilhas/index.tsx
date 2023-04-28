import { PathFullCard } from "@/components/PathFullCard";
import { SectionContainer } from "@/components/SectionContainer";
import { learnPaths } from "@/data/learnPaths";
import Head from "next/head";

export default function TrilhasPage () {

  const paths = learnPaths

  return (
    <>
      <Head>
        <title>Trilhas - Trilhas da Advocacia</title>
      </Head>

       <SectionContainer className='px-4 py-12'>
        <div className='flex-1 flex flex-col gap-8 pb-12'>
          <h1 className='text-3xl font-bold'>Conheça as trilhas</h1>
          <div>
            <div className='grid gap-8'>

              {paths.map((path) => <PathFullCard key={path.id} name={path.name} link={'./trilhas/' + path.slug} steps={path.name.length} />)}

            </div>
          </div>
        </div>
      </SectionContainer>
    
    </>

  )
}