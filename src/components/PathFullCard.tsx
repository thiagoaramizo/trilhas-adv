import { Icon, Path } from "@phosphor-icons/react"
import Link from "next/link"

interface PathFullCardProps {
  name: string
  link: string
  steps: number
  icon?: Icon
}

export function PathFullCard ({ name, link, icon, steps }:PathFullCardProps) {

  const IconOfPath = icon || Path

  return (
    <Link href={link} className="flex items-center justify-between gap-2 rounded-lg px-3 py-4 border border-primary-500 text-primary-500 transition-all hover:scale-105">
      <div className="flex items-center gap-2">
        <IconOfPath size={72} weight="thin"/>
        <div className="flex flex-col ">
          <span className="block text-sm text-slate-100">Trilha de aprendizagem</span>
          <strong className="block text-2xl uppercase">{name}</strong>
        </div>
      </div>
      
      <div className="flex flex-col items-center px-8 text-slate-100">
        <strong className="block text-3xl uppercase">{steps}</strong>
        <span className="block text-xs">etapas</span>
      </div>

    </Link>
  )
}