import Image from 'next/image'
import { Navbar } from './Navbar'

export function Header() {
  return (
    <header className='w-full container max-w-screen-lg mx-auto py-8 px-4 lg:px-0 flex items-center justify-between'>
      <Image src={'/logo.svg'} alt='Trilhas da Advocacia' width={275} height={50}></Image>
      
      <Navbar />
    </header>
  )
}