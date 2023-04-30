import { PersonType } from "@/data/persons";
import Image from "next/image";

interface PersonProps {
  person: PersonType
  size?: 'md' | 'sm' | "xs"
}

export function Person( {person, size='md'}:PersonProps ) {

  const profilePic = person.pic || 'default.jpg'
  const picSize = size === 'md' ? 45 :
    size === 'sm' ? 30 : 25
  const nameSizeStyle = size === 'xs' ? 'text-sm' : 'text-md'

  return (
    <div className="flex gap-2 leading-4 items-center py-2">
      <div>
        <Image src={"/person/" + profilePic} alt='' width={picSize} height={picSize} className="rounded-full border-2 border-primary-500"/>
      </div>
      
      <div className="flex flex-col">
        <strong className={"text-primary-500 font-semibold " + nameSizeStyle}>{person.name}</strong>
        {person.position && <span className="text-xs text-slate-400">{person.position}</span>}
      </div>
    </div>
  )
}