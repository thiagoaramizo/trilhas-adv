import { LessonType } from "@/data/lessons"
import Image from "next/image"
import Link from "next/link"

interface LessonCardProps {
  lesson: LessonType
}

export function LessonCard ({ lesson }:LessonCardProps) {

  return (
    <div className="relative">
      <div className="">
          <div style={{height: 'calc(100% + 2rem)', left: '2.125rem'}} className="absolute top-6  w-1 bg-secondary-300"></div>
          <div className="absolute top-6 left-6 w-6 h-6 bg-background rounded-full border-solid border-4 border-secondary-300"></div>
      </div>
      <div className="flex items-top gap-2 rounded-lg px-6 pl-16 pt-5 pb-5 border border-primary-500">
        <div className="w-full divide-y divide-primary-500 divide-opacity-30">
          <strong className="block text-2xl text-primary-500 pb-1">{lesson.name}</strong>
          {lesson.desc && <div className="flex flex-col pt-1  gap-4">
            {lesson.autors && <span className="text-sm">por {lesson.autors.map( (author) => ` ${author.name}`)}</span>}
            <span>{lesson.desc}</span>
            {lesson.slug && 
              <div className="flex justify-between items-center pb-2">
                <Link className='block bg-secondary-500 w-fit px-6 py-2 text-sm rounded-md text-slate-100 transition-all hover:scale-105' href={'#'}>Acessar conteúdo</Link>
                {lesson.partner && 
                  <div className="">
                    <span className="block text-xs font-light pb-1 text-center">Em parceira com</span>
                    <Link href={'#'}>
                      <Image src={'/partners/' + lesson.partner.logoSrc} alt='' width={100} height={25}/>
                    </Link>
                  </div>
                }
              </div>
            }
          </div>}
        </div>
      </div>
    </div>
    
  )
}