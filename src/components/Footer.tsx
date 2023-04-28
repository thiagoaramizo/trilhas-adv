import { SectionFullBgContainer } from "./SectionFullBgContainer";

export function Footer () {
  return (
    <footer>
      <SectionFullBgContainer classNameBg="bg-slate-950" className="px-4 py-8 pt-16">
        
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