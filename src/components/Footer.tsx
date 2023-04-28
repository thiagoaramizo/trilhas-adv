import Image from 'next/image'
import Link from "next/link" 
import { SectionFullBgContainer } from "./SectionFullBgContainer";

export function Footer () {
  return (
    <footer>
      <SectionFullBgContainer classNameBg="bg-slate-950" className="px-4 pb-8 pt-16">

        <div className='flex justify-between pb-8'>
          <div className='hidden md:block lg:block'>
            <Image src={'/logo.svg'} alt='Trilhas da Advocacia' width={275} height={50}></Image>
          </div>
          <nav className='w-full flex flex-col gap-3 md:gap-1 lg:gap-1 font-light md:text-sm lg:text-sm text-center md:text-right lg:text-right'>
            <Link className='transition-colors hover:text-primary-500' href={'/trilhas'}>Todas as Trilhas</Link>
            <Link className='transition-colors hover:text-primary-500' href={'./'}>Sobre o projeto</Link>
            <Link className='transition-colors hover:text-primary-500' href={'./'}>Política de privacidade</Link>
            <Link className='transition-colors hover:text-primary-500' href={'./'}>Termos de uso</Link>
          </nav>
        </div>
        
        <div className="flex flex-col md:flex-row lg:flex-row gap-8">
          <div className="w-full">
            <span className="block text-sm mb-3">Realização</span>
            <div className="bg-white rounded-md text-slate-800 p-4">OAB</div>
          </div>
          <div className="w-full">
            <span className="block text-sm mb-3">Apoio</span>
            <div className="bg-white rounded-md text-slate-800 p-4">KLSN</div>
          </div>
        </div>
        <span className="block text-sm font-light opacity-60 mt-8">2023 (c) Todos os direitos reservados</span>
      </SectionFullBgContainer>
    </footer>
  )
}