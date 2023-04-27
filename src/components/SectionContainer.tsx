import { ReactNode } from "react"

interface SectionContainerProps {
  className?: string
  children?: ReactNode
}

export function SectionContainer( {className, children }:SectionContainerProps) {
  return (
    <section className={'w-full max-w-screen-lg mx-auto ' + className }>
      {children}
    </section>
  )
}