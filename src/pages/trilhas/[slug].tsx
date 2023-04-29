import { LessonCard } from "@/components/LessonCard";
import { SectionContainer } from "@/components/SectionContainer";
import { LearnPathsType, learnPaths } from "@/data/learnPaths";
import { Path } from "@phosphor-icons/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

export const getStaticPaths: GetStaticPaths = () => {
  
  const paths = learnPaths.map( (path) => {
    return ({ params: {slug: path.slug}})
  })

  return {
    paths,
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
      
      <SectionContainer className="pt-12">
        <div className="flex items-center gap-6 text-primary-500">
          <IconOfPath size={100} weight="thin"/>
          <div className="flex flex-col ">
            <span className="block text-slate-100 font-light">Trilha de aprendizagem</span>
            <strong className="block text-5xl uppercase">{path.name}</strong>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="flex flex-col gap-8 pt-12 pb-24 px-4">
        {path.lessons.map((lesson)=>{
          return (
            <LessonCard key={lesson.id} lesson={lesson}/>
          )
        })}
        <div className="relative">
          <div className="">
              <div style={{height: 'calc(100% + 2rem)', left: '2.125rem'}} className="absolute top-6  w-1 bg-background"></div>
              <div className="absolute top-6 left-6 w-6 h-6 bg-background rounded-full border-solid border-4 border-secondary-300"></div>
          </div>
          <div className="flex items-top gap-2 rounded-lg px-6 pl-16 py-6">
            <div>
              <strong className="block text-xl">Mais lições em breve...</strong>
            </div>
          </div>
        </div>
      </SectionContainer>
      
      
    </>
    
  )
}