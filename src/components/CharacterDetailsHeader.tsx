import { ChevronLeft } from "lucide-react";
import Link from "next/link";




export default function CharacterDetailsHeader() {

  return (
    <header className="flex flex-col gap-y-3 px-5 py-5">
      <Link href="/" className="flex items-center hover:text-primary">
        <ChevronLeft width={20}/>
        <p className="text-sm">Voltar à listagem</p>
      </Link>
      <hr className="w-[95%] text-[#89cff033]/90" />
    </header>
  );
}