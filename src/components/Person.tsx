import { PersonType } from "@/data/persons";
import Image from "next/image";

interface PersonProps {
  person: PersonType
}

export function Person( {person}:PersonProps ) {

  const profilePic = person.pic || 'default.jpg'

  return (
    <div className="flex gap-2 leading-4 items-center py-2">
      <div>
        <Image src={"/person/" + profilePic} alt='' width={45} height={45} className="rounded-full border-2 border-primary-500"/>
      </div>
      
      <div className="flex flex-col">
        <strong className="text-primary-500 font-semibold">{person.name}</strong>
        <span className="text-xs text-slate-400">{person.position}</span>
      </div>
    </div>
  )
}