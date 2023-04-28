import { ReactNode } from "react"

interface SectionContainerProps {
  className?: string
  children?: ReactNode
  id?: string
}

export function SectionContainer( {className, children, id }:SectionContainerProps) {
  return (
    <section className={'w-full max-w-screen-lg mx-auto ' + className } id={id}>
      {children}
    </section>
  )
}