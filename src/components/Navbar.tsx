import { learnPaths } from "@/data/learnPaths";
import { List, X } from "@phosphor-icons/react";
import Link from "next/link" 
import { useState } from "react";
import { createPortal } from "react-dom";

export function Navbar () {

  const links = learnPaths


  const [openNav, setOpenNav] = useState(false)
  const [animationNav, setAnimationNav] = useState(false)

  const handleShowNav = async () => {
    if( !openNav ){
      setOpenNav( true )
      const time = await new Promise((t)=>{setTimeout(t, 300)})
      setAnimationNav( true )
    } else {
      setAnimationNav( false )
      const time = await new Promise((t)=>{setTimeout(t, 500)})
      setOpenNav( false )
    }
  }

  const styleClass = animationNav ? 'translate-x-0 opacity-100 shadow-xl':'translate-x-full opacity-0 shadow-none'

  return (
    <nav className="">
      <div className="block lg:hidden w-fit">
        <button className="block transition-all hover:text-primary-500" onClick={handleShowNav} name="menu"><List size={32} /></button>
        
        {openNav && createPortal(
          <div className="fixed top-0 left-0 z-50 w-full h-full overflow-hidden">
            <div className={"absolute top-0 left-0 z-50 w-full md:w-1/2 md:left-1/2 h-full bg-background transition-all duration-300  shadow-black " + styleClass}>
              <button className="text-slate-100 pt-10 w-full flex justify-end pr-6 transition-all hover:text-primary-500" onClick={handleShowNav} name="Fechar menu"><X size={32} /></button>
              <div className="flex flex-col divide-y divide-secondary-300 divide-opacity-10 py-4">
                {links.map((link) => <Link className="w-full py-5 text-xl text-center text-slate-200 transition-all hover:text-primary-500" key={link.name} href={'/trilhas/' + link.slug} onClick={handleShowNav}>{link.name}</Link>)}
              </div>
            </div>
          </div>, document.body 
        )}   
      </div>

      <div className="hidden lg:block">
        <div className="flex gap-24">
          <Link className="transition-all duration-300 hover:text-primary-500" href="/trilhas/legal-design" >Legal Design</Link>
          <Link className="transition-all duration-300 hover:text-primary-500" href="/trilhas/inteligencia-artificial" >Inteligência Artificial</Link>
          <Link className="transition-all duration-300 hover:text-primary-500" href="/trilhas" >Todas as Trilhas</Link>
        </div>
      </div>
    
    </nav>
  )
 }