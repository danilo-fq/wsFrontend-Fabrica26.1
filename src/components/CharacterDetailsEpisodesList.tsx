
interface CharacterDetailsEpisodiesCardProps {
  episodies: string[];
}

export default function CharacterDetailsEpisodiesCard(
  character: CharacterDetailsEpisodiesCardProps,
) {
  const { episodies } = character;
  return (
    <section className="flex flex-col gap-y-5">
      <header className="bg-bg-300 px-3 py-2">
        <p className="text-primary text-sm font-bold">Episódios</p>
      </header>
      <div className="flex flex-wrap gap-2 px-4">
        {episodies.length > 0 ? (
          episodies.map(episodie => {
            const episodieNumber = Number(episodie.split("/episode/")[1]);
  
            return (
              <p key={episodieNumber} className="font-code bg-bg-300 px-2 py-1 border border-text/50 rounded-md text-xs">
                EP{episodieNumber < 10 ? `0${episodieNumber}` : episodieNumber}
              </p>
            );
          })
        ) : (
          <p>Não possui lista de episódios</p>
        )}
      </div>
    </section>
  );
}