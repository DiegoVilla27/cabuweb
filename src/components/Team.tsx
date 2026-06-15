"use client";

import TitleSection from "./widgets/TitleSection";
import TeamItem from "./widgets/TeamItem";
import { TEAM_MEMBERS } from "@/constants/data";

export default function Team() {

  return (
    <section id="team" className="px-6 py-24 bg-[url('/img/team/bg-team.svg')] bg-center bg-contain bg-repeat-x w-full">
      <div className="max-w-7xl mx-auto">
        <TitleSection
          titleOne="Nuestro"
          titleTwo="Equipo"
          text="En nuestra empresa cada miembro es un pilar fundamental para que nuestros productos y servicios sean óptimos y funcionales para ti."
        />
        <div className="grid grid-cols-12 gap-4 mt-8">
          {TEAM_MEMBERS.map((item) => (
            <TeamItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
