import Link from "next/link"

export default function Home() {
  return (
    <main className="flex-1 overflow-hidden relative">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover scale-125"
      >
        <source src="/videos/rick-and-morty.mp4" type="video/mp4" />
      </video>
      <div className="absolute bg-black/70 flex justify-center items-center inset-0">
        <div className="flex gap-x-4 mt-16">
          <a
            href="https://www.adultswim.com/videos/rick-and-morty"
            target="_blank"
            rel="noopener noreferrer"
            className="border rounded-lg py-1 px-4 hover:bg-hover-dark hover:border-hover-dark"
          >
            Pagina Oficial
          </a>

          <Link
            href="/characters"
            className="border rounded-lg py-1 px-4 hover:bg-hover-dark hover:border-hover-dark"
          >
            Personagens
          </Link>
        </div>
      </div>
    </main>
  );
}
