import Image from "next/image";
import Link from "next/link";

export default function ErrorCard() {
  return (
    <main className="flex flex-1 flex-col justify-center items-center py-6 gap-y-8">
      <Image
        src={"/images/portal-failure.png"}
        alt="Imagem do portal carregando"
        width={200}
        height={200}
        className="w-80"
      />
      <h2 className="animate-pulse text-status-danger font-bold text-2xl">
        Tivemos uma instabilidade no Portal!
      </h2>
      <p>
        Volte para a{" "}
        <Link href="/" className="hover:text-primary underline">
          Página Inicial
        </Link>
      </p>
    </main>
  );
}