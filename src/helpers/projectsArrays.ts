export interface Project {
  id: number;
  img: string;
  name: string;
  url: string;
  category: "web" | "apps";
}

export const projectsList: Project[] = [
  // Web
  { id: 1, img: "/img/projects/webs/amaia-web.png", name: "Amaia Web", url: "https://amaia-gold-front.vercel.app", category: "web" },
  { id: 2, img: "/img/projects/webs/burger-web.png", name: "Burger Web", url: "https://burger-store-mu.vercel.app", category: "web" },
  { id: 3, img: "/img/projects/webs/coffee-web.png", name: "Coffee Web", url: "https://coffee-store-sepia-phi.vercel.app", category: "web" },
  { id: 4, img: "/img/projects/webs/gym-web.png", name: "Gym Web", url: "https://gym-store-beige.vercel.app", category: "web" },
  { id: 5, img: "/img/projects/webs/herbs-web.png", name: "Herbs Web", url: "https://herbs-web.vercel.app", category: "web" },
  { id: 6, img: "/img/projects/webs/medics-web.png", name: "Medics Web", url: "https://medics-store.vercel.app", category: "web" },
  { id: 7, img: "/img/projects/webs/ormigga-web.png", name: "Ormigga", url: "https://ormigga.com", category: "web" },
];
