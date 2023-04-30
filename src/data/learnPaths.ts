import { LessonType, lessons } from "./lessons"

export interface LearnPathsType {
  id: string
  name: string
  slug: string
  lessons: LessonType[]
}

export const learnPaths: LearnPathsType[] = [
  {
    id: '1',
    name: 'Legal Design',
    slug: 'legal-design',
    lessons: [
      lessons[0],
      lessons[1],
      lessons[2],
      lessons[3],
      lessons[4],
      lessons[5],
      lessons[6],
      lessons[7],
      lessons[8],
    ]
  },
  {
    id: '2',
    name: 'Marketing',
    slug: 'marketing',
    lessons: []
  },
  {
    id: '3',
    name: 'Controladoria',
    slug: 'controladoria',
    lessons: []
  },
  {
    id: '4',
    name: 'Jurimetria',
    slug: 'jurimetria',
    lessons: []
  },
  {
    id: '5',
    name: 'Inteligência Artificial',
    slug: 'inteligencia-artificial',
    lessons: []
  },
]