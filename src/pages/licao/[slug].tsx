import { Person } from "@/components/Person";
import { SectionContainer } from "@/components/SectionContainer";
import { LessonType, lessons } from "@/data/lessons";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";


export const getStaticPaths: GetStaticPaths = () => {
  
  const paths = lessons.map( (lesson:LessonType) => {
    return ({ params: {slug: lesson.slug}})
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<any, {slug: string}> = ({params}) => {

  // @ts-ignore
  const lessonSlug = params.slug

  const allLessons = [...lessons]
  const lessonIndex = allLessons.findIndex((lesson)=> lesson.slug === lessonSlug )
  const lesson = allLessons[lessonIndex]

  return {
    props: {
      lesson
    },
    //revalidate: 60 * 60 * 2 // 2 hours
    revalidate: 1
  }
}

interface LessonPageProps {
  lesson: LessonType
}

export default function LessonPage ( { lesson }:LessonPageProps) {
  
  const titleString = lesson.name + " - Trilhas da Advocacia"
  const lessonVideoUrl = lesson.youtubeVideoLink || ''
  
  return (
    <>
      <Head>
        <title>{titleString}</title>
      </Head>
      
      <article>
        <SectionContainer className="pt-12 px-4 pb-24 flex flex-col gap-8">

        <div className="flex items-top gap-2 rounded-lg px-6 py-5 border border-primary-500">
          <div className="flex flex-col text-primary-500 gap-4">
            <span className="block text-slate-100 font-light">Trilha de aprendizagem: <strong className="text-primary-500 font-semibold"> {lesson.categories.map((item)=> item)} </strong></span>
            <strong className="block text-3xl">{lesson.name}</strong>
            <div className="flex gap-4">
              {
                lesson.autors && lesson.autors.map((author) => <Person key={author.name} person={author} size="xs"/>)
              }
            </div>
          </div>
        </div>

        {lesson.youtubeVideoLink && 
          <div className="flex justify-center rounded-lg px-6 py-8 border border-primary-500">
            <div className="w-fit rounded-md overflow-hidden">
              
            </div>
            
          </div>
        }

        </SectionContainer>
      </article>
      
      
    </>
    
  )
}