export interface Project {
  id: number;
  img: string;
  name: string;
  url: string;
}

export const listWeb: Project[] = [
  { id: 1, img: "/img/proyects/feelfit.png", name: "FeelFit", url: "https://feelfit.com.co" },
  { id: 2, img: "/img/proyects/ormigga.png", name: "Ormigga", url: "https://ormigga.com" },
  { id: 3, img: "/img/proyects/cabuweb.png", name: "Cabuweb", url: "https://cabuweb.com" },
  { id: 4, img: "/img/proyects/oki.png", name: "OkiPlace", url: "https://okiplace.com" },
  { id: 5, img: "/img/proyects/saldfiesta.png", name: "SaldFiestaTicket", url: "https://saldfiestaticket.ga" },
  { id: 6, img: "/img/proyects/javierc.png", name: "JavierCuellar", url: "https://javiercuellar.com" },
  { id: 7, img: "/img/proyects/viciny.png", name: "Viciny", url: "https://viciny.com" },
  { id: 8, img: "/img/proyects/match_web.png", name: "Match", url: "https://match-web.suyter.com" },
];

export const listApps: Project[] = [
  { id: 1, img: "/img/proyects/oki-app.png", name: "OkiPlace", url: "https://okiplace.com" },
  { id: 2, img: "/img/proyects/hurbu-app.png", name: "Hurbu", url: "https://play.google.com/store/apps/details?id=com.hurbu.app" },
];

export const listForYou: Project[] = [
  { id: 1, img: "/img/proyects/burgerweb.png", name: "BurgerWeb", url: "https://burgerweb-cabuweb.vercel.app" },
  { id: 2, img: "/img/proyects/medics.png", name: "MedicsWeb", url: "https://healthcare-cabuweb.vercel.app" },
];
