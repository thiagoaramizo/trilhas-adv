import { PersonType } from "./persons"

export interface LessonType {
  id: string
  name: string
  slug: string
  createdAt?: string
  categories: string[]
  autors?: PersonType[]
  desc?: string
  youtubeVideoLink?: string
  externalLink?: string
  content?: string
  partner?: {
    id: string
    name: string
    link: string
    logoSrc: string
  }
}

export const lessons: LessonType[] = [
  {
    id: '1',
    name: 'O que é o Legal Design?',
    categories: ['Legal Design'],
    slug: 'o-que-e-o-legal-design',
  },
  {
    id: '2',
    name: 'Visual Law e Legal Design',
    categories: ['Legal Design'],
    slug: 'visual-law-e-legal-design',
  },
  {
    id: '3',
    name: 'Detox law: simplificando a linguagem jurídica',
    categories: ['Legal Design'],
    slug: 'detox-law-simplificando-a-linguagem-juridica',
  },
  {
    id: '4',
    name: 'Formatando uma procuração com Visual Law',
    categories: ['Legal Design'],
    slug: 'formatando-uma-procuracao-com-visual-law',
    autors: [
      {
        name: 'Thiago Aramizo Ribeiro',
        pic: 'thiago-aramizo-ribeiro.jpg',
      }
    ],
    desc: 'Aprenda a introduzir elementos visuais em uma procuração, passo-a-passo utilizando o Word.',
    youtubeVideoLink: 'https://www.youtube.com/watch?v=hPiaEsAEaGI',
    partner: {
      id: 'klsn',
      name: 'KLSN Legal Design',
      link: 'https://klsn.com.br',
      logoSrc: 'klsn_logo_white.svg'
    }
  },
  {
    id: '5',
    name: 'Formatando um contrato de honorários com  Visual Law',
    categories: ['Legal Design'],
    slug: 'formatando-um-contrato-de-honorarios-com-visual-law',
  },
  {
    id: '6',
    name: 'Feedback para o cliente',
    categories: ['Legal Design'],
    slug: 'feedback-para-o-cliente',
  }
  
]