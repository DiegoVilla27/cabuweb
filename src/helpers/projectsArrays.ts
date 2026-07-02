export interface Project {
  id: number;
  img: string;
  name: string;
  url: string;
  category: "web" | "apps";
}

export const projectsList: Project[] = [
  // Web
  { id: 1, img: "/img/projects/webs/amaia-web.webp", name: "Jewelry Web", url: "https://amaia-gold-front.vercel.app", category: "web" },
  { id: 2, img: "/img/projects/webs/burger-web.webp", name: "Burger Web", url: "https://burger-store-mu.vercel.app", category: "web" },
  { id: 3, img: "/img/projects/webs/coffee-web.webp", name: "Coffee Web", url: "https://coffee-store-sepia-phi.vercel.app", category: "web" },
  { id: 4, img: "/img/projects/webs/gym-web.webp", name: "Gym Web", url: "https://gym-store-beige.vercel.app", category: "web" },
  { id: 5, img: "/img/projects/webs/herbs-web.webp", name: "Herbs Web", url: "https://herbs-web.vercel.app", category: "web" },
  { id: 6, img: "/img/projects/webs/medics-web.webp", name: "Medics Web", url: "https://medics-store.vercel.app", category: "web" },
  { id: 7, img: "/img/projects/webs/lawyer-web.webp", name: "Lawyer Web", url: "https://lawyers-web-delta.vercel.app", category: "web" },
  { id: 8, img: "/img/projects/webs/vet-web.webp", name: "Vet Web", url: "https://vet-web-delta.vercel.app", category: "web" },
];
