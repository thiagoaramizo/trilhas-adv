import { ReactNode } from "react"

interface SectionFullBgContainerProps {
  classNameBg?: string
  className?: string
  children?: ReactNode
  id?: string
}

export function SectionFullBgContainer( { classNameBg='bg-primary-500', className, id, children }:SectionFullBgContainerProps) {
  return (
    <section className={'w-full ' + classNameBg } id={id}>
      <div className={'w-full max-w-screen-lg mx-auto ' + className }>
        {children}
      </div>
    </section>
  )
}