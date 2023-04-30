import { Person } from "@/components/Person";
import { SectionContainer } from "@/components/SectionContainer";
import { LessonType, lessons } from "@/data/lessons";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";


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
  
  const router = useRouter()
  const titleString = lesson.name + " - Trilhas da Advocacia"
  const lessonVideoUrl = lesson.youtubeVideoLink || ''

  const getYoutubeVideoId = (url: string) => {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
  }
  
  return (
    <>
      <Head>
        <title>{titleString}</title>
      </Head>
      
      <article>
        <SectionContainer className="pt-12 px-4 pb-24 flex flex-col gap-8">

        <div className="flex items-top gap-2 rounded-lg px-6 py-5 border border-primary-500">
          <div className="flex flex-col text-primary-500 gap-4 w-full">
            <span className="block text-slate-100 font-light">Trilha de aprendizagem: <strong className="text-primary-500 font-semibold"> {lesson.categories.map((item)=> item)} </strong></span>
            <strong className="block text-3xl">{lesson.name}</strong>
            <div className="flex justify-between">
              <div className="flex gap-4">
                {
                  lesson.autors && lesson.autors.map((author) => <Person key={author.name} person={author} size="xs"/>)
                }
              </div>
              {lesson.partner && 
                  <div className="w-fit ">
                    <span className="block text-xs font-light pb-1 text-center text-slate-50">Em parceira com</span>
                    <Link href={lesson.partner.link} target="_blank">
                      <Image src={'/partners/' + lesson.partner.logoSrc} alt='' width={100} height={25}/>
                    </Link>
                  </div>
              }
            </div>
            
          </div>
        </div>

        {lesson.youtubeVideoLink && 
          <div className="flex justify-center rounded-lg px-6 py-8 border border-primary-500">
            <div className="w-fit rounded-md overflow-hidden">
              <iframe 
                id="player" 
                width="640" height="360"
                src={"http://www.youtube.com/embed/"+getYoutubeVideoId(lessonVideoUrl)+"?enablejsapi=1&origin=https://trilhas.adv.br&rel=0"}
                className="w-full aspect-video"
              ></iframe>
            </div>
          </div>
        }

        <button onClick={()=> router.back()} className='block bg-secondary-500 w-fit px-6 py-2 text-sm rounded-md text-slate-100 transition-all hover:scale-105'>Voltar</button>

        </SectionContainer>
      </article>
      
      
    </>
    
  )
}