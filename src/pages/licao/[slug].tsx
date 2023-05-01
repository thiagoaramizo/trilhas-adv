'use client';

import { Person } from "@/components/Person";
import { SectionContainer } from "@/components/SectionContainer";
import { LessonType, lessons } from "@/data/lessons";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { CircleNotch } from "@phosphor-icons/react";
import ReactPlayer from "react-player/youtube";

export default function LessonPage () {
  
  const router = useRouter()
  const [loadState, setLoadState] = useState(false)
  const slug = router.query['slug'] as string
  const [lesson, setLesson] = useState<LessonType>()
  
  async function loadVideo() {
    const time = await new Promise((t)=>{setTimeout(t, 500)})
    setLoadState(true)
  }

  function getLesson( slug: string ) {
    const allLessons = [...lessons]
    const lessonIndex = allLessons.findIndex((lesson)=> lesson.slug === slug )
    setLesson(allLessons[lessonIndex])
  }

  useEffect( ()=>{
    getLesson(slug)
    loadVideo()
  },[slug])

  
  return (
    <>
      <Head>
        <title>{}</title>
      </Head>
      
      {lesson &&
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
          <div className="flex justify-center items-center rounded-lg px-6 py-8 border border-primary-500">
            {loadState ? <ReactPlayer url={lesson.youtubeVideoLink} /> : <div className="h-96 flex justify-center items-center"><CircleNotch size={32} weight="bold" className="animate-spin" /></div>}
          </div>
        }

        <button onClick={()=> router.back()} className='block bg-secondary-500 w-fit px-6 py-2 text-sm rounded-md text-slate-100 transition-all hover:scale-105'>Voltar</button>

        </SectionContainer>
      </article>
      }
      
    </>
    
  )
}