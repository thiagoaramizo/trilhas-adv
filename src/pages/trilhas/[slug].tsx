import { SectionContainer } from "@/components/SectionContainer";
import { LearnPathsType, learnPaths } from "@/data/learnPaths";
import { Path } from "@phosphor-icons/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [
      { params: { slug: 'legal-design' } },
      { params: { slug: 'marketing' } },
      { params: { slug: 'controladoria' } },
      { params: { slug: 'jurimetria' } }
    ],
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<any, {slug: string}> = ({params}) => {

  // @ts-ignore
  const pathSlug = params.slug

  const paths = [...learnPaths]
  const pathIndex = paths.findIndex((path)=> path.slug === pathSlug )
  const path = paths[pathIndex]

  return {
    props: {
      path
    },
    //revalidate: 60 * 60 * 2 // 2 hours
    revalidate: 1
  }
}

interface PathDinamicPageProps {
  path: LearnPathsType
}

export default function PathPage ( { path }:PathDinamicPageProps) {
  
  const IconOfPath = Path
  const titleString = "Trilha " + path.name + " - Trilhas da Advocacia"
  
  return (
    <>
      <Head>
        <title>{titleString}</title>
      </Head>
      
      <SectionContainer className="py-12">
        <div className="flex items-center gap-6 text-primary-500">
          <IconOfPath size={100} weight="thin"/>
          <div className="flex flex-col ">
            <span className="block text-slate-100 font-light">Trilha de aprendizagem</span>
            <strong className="block text-5xl uppercase">{path.name}</strong>
          </div>
        </div>
      </SectionContainer>
      
      
    </>
    
  )
}