import { Icon, Path } from "@phosphor-icons/react"
import Link from "next/link"

interface PathSmallCardProps {
  name: string
  link: string
  icon?: Icon
}

export function PathSmallCard ({ name, link, icon }:PathSmallCardProps) {

  const IconOfPath = icon || Path

  return (
    <Link href={link} className="flex items-center gap-2 rounded-lg px-3 py-4 border border-primary-500 text-primary-500 transition-all hover:scale-105">
      <IconOfPath size={72} weight="thin"/>
      <div className="flex flex-col ">
        <span className="block text-sm text-slate-100">Trilha de aprendizagem</span>
        <strong className="block text-2xl uppercase">{name}</strong>
      </div>
    </Link>
  )
}