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
    autors: [
      {
        name: 'Thiago Aramizo Ribeiro',
        pic: 'thiago-aramizo-ribeiro.jpg',
      }
    ],
    desc: 'Aprenda a diagramar um contrato de honorários. Vamos aprender como formatar a peça com o Visual Law, dando a ela usabilidade e um visual incrível em um passo-a-passo utilizando o Word.',
    youtubeVideoLink: 'https://www.youtube.com/watch?v=7-SEiQrh5dg',
    partner: {
      id: 'klsn',
      name: 'KLSN Legal Design',
      link: 'https://klsn.com.br',
      logoSrc: 'klsn_logo_white.svg'
    }
  },
  {
    id: '6',
    name: 'Feedback para o cliente',
    categories: ['Legal Design'],
    slug: 'feedback-para-o-cliente',
  },
  {
    id: '7',
    name: 'Adicionando outros elementos visuais em contratos',
    categories: ['Legal Design'],
    slug: 'adicionando-outros-elementos-visuais-em-contratos',
    autors: [
      {
        name: 'Thiago Aramizo Ribeiro',
        pic: 'thiago-aramizo-ribeiro.jpg',
      }
    ],
    desc: 'Nesta aula vamos criar um elemento visual muito prático em contratos em geral e que pode ser aplicado para os contratos de serviço advocatício, também chamados contratos de honorários. A aplicação é simples e exige apenas o recurso de tabelas disponível no próprio Word.',
    youtubeVideoLink: 'https://www.youtube.com/watch?v=4kXWZg3wMkI',
    partner: {
      id: 'klsn',
      name: 'KLSN Legal Design',
      link: 'https://klsn.com.br',
      logoSrc: 'klsn_logo_white.svg'
    }
  },
  {
    id: '8',
    name: 'Evidenciando danos físicos em uma petição',
    categories: ['Legal Design'],
    slug: 'evidenciando-danos-fisicos-em-uma-peticao',
    autors: [
      {
        name: 'Thiago Aramizo Ribeiro',
        pic: 'thiago-aramizo-ribeiro.jpg',
      }
    ],
    desc: 'Nesta aula vamos criar um infográfico que pode ser utilizado em uma reclamação trabalhista ou uma contestação trabalhista. Utilizamos o Canva.',
    youtubeVideoLink: 'https://www.youtube.com/watch?v=n1639I1K3k0',
    partner: {
      id: 'klsn',
      name: 'KLSN Legal Design',
      link: 'https://klsn.com.br',
      logoSrc: 'klsn_logo_white.svg'
    }
  },
  {
    id: '9',
    name: 'Comparando dados quantitativos em petições',
    categories: ['Legal Design'],
    slug: 'comparando-dados-quantitativos-em-peticoes',
    autors: [
      {
        name: 'Thiago Aramizo Ribeiro',
        pic: 'thiago-aramizo-ribeiro.jpg',
      }
    ],
    desc: 'Nesta aula vamos criar um infográfico com o Canva para incluir em uma petição judicial. Utilizamos como referência um caso hipotético de partilha.',
    youtubeVideoLink: 'https://www.youtube.com/watch?v=YoYpunHQ-Fo',
    partner: {
      id: 'klsn',
      name: 'KLSN Legal Design',
      link: 'https://klsn.com.br',
      logoSrc: 'klsn_logo_white.svg'
    }
  },
  
]