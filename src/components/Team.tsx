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
          titleOne="Talento"
          titleTwo="de Élite"
          text="No somos una agencia tradicional. Somos un escuadrón de ingenieros y diseñadores altamente especializados, construyendo el software del mañana."
        />
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 lg:gap-16 mt-20 max-w-5xl mx-auto">
          {TEAM_MEMBERS.map((item) => (
            <TeamItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
