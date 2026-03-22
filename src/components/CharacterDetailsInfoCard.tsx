
import { Globe, MapPin, User, Venus } from "lucide-react";

interface CharacterDetailsInfoCardProps {
  origin: string;
  location: string;
  species: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
};

export default function CharacterDetailsInfoCard(
  character: CharacterDetailsInfoCardProps,
) {
  const { origin, location, gender, species } = character;
  return (
    <section className="flex flex-col gap-y-5">
      <header className="bg-bg-300 px-3 py-2">
        <p className="text-primary text-sm font-bold">Informações</p>
      </header>
      <div className="flex flex-col items-center gap-y-3">
        <p className="flex w-full justify-between px-8 gap-x-9">
          <span className="flex gap-x-3 items-center text-text/70">
            <Globe width={20} height={20} className="text-primary" /> Origem
          </span>{" "}
          <span className="pr-6">{origin}</span>
        </p>

        <hr className="border-text/30 w-[90%]" />

        <p className="flex w-full justify-between px-8 gap-x-9">
          <span className="flex gap-x-3 items-center text-text/70">
            <MapPin width={20} height={20} className="text-primary" />{" "}
            Localização
          </span>{" "}
          <span className="pr-6">{location}</span>
        </p>

        <hr className="border-text/30 w-[90%]" />

        <p className="flex w-full justify-between px-8 gap-x-9">
          <span className="flex gap-x-3 items-center text-text/70">
            <User width={20} height={20} className="text-primary" /> Espécie
          </span>{" "}
          <span className="pr-6">{species}</span>
        </p>

        <hr className="border-text/30 w-[90%]" />

        <p className="flex w-full justify-between px-8 gap-x-9">
          <span className="flex gap-x-3 items-center text-text/70">
            <Venus width={20} height={20} className="text-primary" /> Gênero
          </span>{" "}
          <span className="pr-6">{gender}</span>
        </p>
      </div>
    </section>
  );
}