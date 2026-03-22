import Image from "next/image";

export default function IsLoadingCard() {
  return (
    <main className="flex flex-1 flex-col justify-center items-center pb-7">
      <Image
        src={"/images/portal-loading.png"}
        alt="Imagem do portal carregando"
        width={200}
        height={200}
        className="w-80 animate-spin [animation-duration:10s]"
      />
      <h2 className="animate-pulse">Aguarde carregando o portal...</h2>
    </main>
  );
}