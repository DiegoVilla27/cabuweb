"use client";

import TitleSection from "./widgets/TitleSection";
import TeamItem from "./widgets/TeamItem";
import { TEAM_MEMBERS } from "@/constants/data";

export default function Team() {
  return (
    <section id="team" className="px-6 py-32 relative w-full overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-size-[32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <TitleSection
          titleOne="Mentes"
          titleTwo="Maestras"
          text="El talento humano detrás del código. Un equipo de ingenieros, diseñadores y estrategas obsesionados con la perfección técnica y el diseño de vanguardia."
        />
        <div className="grid grid-cols-12 gap-8 lg:gap-12 mt-20">
          {TEAM_MEMBERS.map((item) => (
            <TeamItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
