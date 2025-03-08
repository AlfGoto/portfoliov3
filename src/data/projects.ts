import type { Project } from "@/types/project";

const P: ProjectsType = [
  {
    name: "Lowback",
    description: "Lowback is my most ambitious project. With some friend we are building a Backend as a service. I did a lot of research to find the best architecture possible for our need and our usages. And so we use dotnet with a microservice oriented architecture. We also create packages and interfaces. I also made the deployement strategy. I use a VPS with subdomains, httpd, progresql, systemctl services...",
    images: ["dotnet.png"],
    banner: "dotnet.png",
  },
  {
    name: "Sezame",
    description: "Sezame is the startup i work for. This is where i learned what a real life dev do. From CI to e2e tests, i learned about AWS, architecture, monorepos, strong typescript consistency and also work ethics.",
    images: ["marketplace.png"],
    banner: "marketplace.png",
    url: "https://joinsezame.com/",
  },
  // {
  //   name: "Ce portfolio",
  //   description: "",
  //   images: [""],
  // },
  {
    name: "Minesweeper",
    description: "This little game is my first website. I was in need of a game of minesweeper that could keep up with a realy fast player (me). So my first website was made using javascript and PHP ratchet websockets",
    images: ["minesweeper1.png", "minesweeper2.png", "minesweeper3.png"],
    banner: "minesweeper1.png",
    url: "https://minesweeper.fr/",
  },
  {
    name: "3Foto",
    description: "3Foto is the closest i was from running a startup. I knew photographers were in need of a website to pass pictures and to make a selecter between raw files. The main issue was the cost of stocking thousands of 4K image. So i worked on webp compression, raw pictures decrypters. It is made using AWS (cdk) and next",
    images: ["home.png", "d.png", "empty home.png"],
    banner: "home.png",
    url: "https://3foto.vercel.app/",
  },
  {
    name: "Towalf",
    description: "This is my most finished projet. A simple little roguelike game using vanilla JS and dom manipulation to its fullest. I'm realy proud of it because it was played by a lot of people that have helped me make this game less and less buggy.",
    images: ["playing1.png", "playing2.png", "upgrade menu.png"],
    banner: "playing1.png",
    url: "https://towalf.netlify.app/",
  },
  {
    name: "Experiments on 3D",
    description: "Since starting my developer journey, i was always curious about 3D. I did a lot of little experiments and here is two of them. The minecraft house is made using only CSS and the ship one is made using Three.js",
    images: [
      "portfolio3D1.png",
      "portfolio3D2.png",
      "shipSeller1.png",
      "shipSeller2.png",
      "shipSeller3.png",
    ],
    banner: "portfolio3D2.png",
  },
  {
    name: "Some random projects",
    description: "I did all sorts of strange things with my code. Some of those are findable in an old portfolio so i will link it here. This is mainly if you are curious about some little projects",
    images: [
      "FenetreS1.png",
      "FenetreS2.png",
      "FenetreS3.png",
      "paragraph1.png",
      "paragraph2.png",
      "paragraph3.png",
      "paragraph4.png",
      "pokemon1.png",
      "pokemon2.png",
      "pokemon3.png",
      "textMaker1.png",
      "textMaker2.png",
      "textMaker3.png",
    ],
    banner: "FenetreS1.png",
    url: "https://alfredgauthier.netlify.app/"
  },
];

export default P;
export type ProjectsType = Project[];
