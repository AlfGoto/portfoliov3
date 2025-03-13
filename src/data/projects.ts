import type { Project } from "@/types/project";

const P: ProjectsType = [
  {
    name: "Lowback",
    description:
      "Lowback is my most ambitious project. With some friend we are building a Backend as a service. I did a lot of research to find the best architecture possible for our need and our usages. And so we use dotnet with a microservice oriented architecture. We also create packages and interfaces. I also made the deployement strategy. I use a VPS with subdomains, httpd, progresql, systemctl services...",
    images: ["dotnet.png"],
    banner: "dotnet.png",
    languages: [".NET", "NEXT"],
  },
  {
    name: "Sezame",
    description: `Sezame is the startup where I truly learned what it means to be a real-world developer. From CI to end-to-end testing, I gained hands-on experience with AWS, architecture, monorepos, strong TypeScript consistency, and even work ethics.
    <br><br>One of the first things I learned was how to work within a diverse team—not just developers, but also sales, marketing, and other professionals. Before this, I had only worked with other devs, so it was a refreshing experience. I also got to experience what it feels like to be "the new guy" and to work alongside people with 10 times my skills. Back in school, I was always the leader and top performer, but here, I had to learn how to follow directions from more experienced colleagues and effectively communicate feedback on my work.
    <br><br>I also learned what it truly means to be a developer. As I mentioned, I discovered the importance and comfort of writing tests. CI completely changed the way I code—it saves so much time! Initially, I was completely lost when starting with AWS and AWS CDK, but as I got the hang of it, it became incredibly satisfying to build exactly what I wanted. AWS is extremely powerful and useful, and it has now become my favorite serverless tool.
    <br><br>This experience also made me realize my strong interest in architecture. We designed our own architectural solutions and build systems, which I found fascinating. It inspired me to dive deeper into learning about software architecture.
    <br><br>Of course, I also learned what it means to work at a startup. Every decision had to be made with precision because a single mistake could cost us a lot—and for a startup, losing too much could mean the end of the company. But there were also incredible upsides. Every success felt like our success. Moving to a better office was incredibly satisfying, and I got to befriend some truly amazing people. This experience didn’t just make me a better developer—it made me a better person.
    `,
    images: ["marketplace.png", "sezame-wework1.jpg"],
    banner: "marketplace.png",
    url: "https://joinsezame.com/",
    languages: ["AWS", "NEXT", "Tailwind"],
  },
  // {
  //   name: "Ce portfolio",
  //   description: "",
  //   images: [""],
  // },
  {
    name: "Minesweeper",
    description:
      "This little game is my first website. I was in need of a game of minesweeper that could keep up with a realy fast player (me) and i wanted to learn HTML, CSS, JS, PHP and mySQL because i wanted to be ready for a school i was joining. So my first website was made using javascript and PHP ratchet websockets. It teached me about all the basics and made me realy happy. Doing a video game is alaways a good motivation",
    images: ["minesweeper1.png", "minesweeper2.png", "minesweeper3.png"],
    banner: "minesweeper1.png",
    url: "https://minesweeper.fr/",
    languages: ["PHP", "JS"],
  },
  {
    name: "3Foto",
    description:
      "3Foto is the closest i was from running a startup. I knew photographers were in need of a website to pass pictures and to make a selecter between raw files. The main issue was the cost of stocking thousands of 4K image. So i worked on webp compression, raw pictures decrypters. It is made using AWS (cdk) and next.",
    images: ["home.png", "d.png", "empty home.png"],
    banner: "home.png",
    url: "https://3foto.vercel.app/",
    languages: ["AWS", "NEXT", "Tailwind"],
  },
  {
    name: "Towalf",
    description:
      "This is my most finished projet. A simple little roguelike game using vanilla JS and dom manipulation to its fullest. I'm realy proud of it because it was played by a lot of people that have helped me make this game less and less buggy.",
    images: ["playing1.png", "playing2.png", "upgrade menu.png"],
    banner: "playing1.png",
    url: "https://towalf.netlify.app/",
    languages: ["JS", "CSS"],
  },
  {
    name: "Experiments on 3D",
    description: `Since starting my developer journey, i was always curious about 3D. Some 3D websites are just fantastic, so even if i'm not realy a frontend oriented dev, i always loved experimenting with 3D. I did a lot of little experiments and here is two of them. 
    <br><br>The first one is a 3D portfolio, the concepts is simple and cool. It use CSS and JS and will let you cicle through some projects. I made it Cartoon like with those flashy colors and cloud in the back.<br>You can test it here: <a style="color: blue" href="https://alfolio.netlify.app/" target="_blank">Alfolio</a>
    <br><br>The starship one is made using Three.js, it was my first try of this fabulous library. It show a flying starship that you can move with your arrow and ZQSD keys. It also show a big planet revelating star wars style.
    <br><br>The minecraft house is made using only CSS, it was my first realy 3D try. I discovered randomly that doing 3D on CSS was a thing and i immediatly needed to try it. It made my friends laugh seing this ridiculous minecraft house spinning in a navigator. it is full CSS, I only used JS to make it manualy scrollable.<br>You can test it here: <a style="color: blue" href="https://minecralf.netlify.app/" target="_blank">MinecrALF</a>
    `,
    images: [
      "portfolio3D1.png",
      "portfolio3D2.png",
      "shipSeller1.png",
      "shipSeller2.png",
      "shipSeller3.png",
      "3Dcity1.png",
      "3Dcity2.png",
    ],
    banner: "3Dcity1.png",
    videos: ["3Dcity.mp4", "shipSeller.mp4"],
    languages: ["Three.js", "CSS"]
  },
  {
    name: "Some random projects",
    description: `I did all sorts of strange things with my code, i wanted to learn but mainly wanted to have fun coding. This is mainly if you are curious about some little projects.
    <br><br>The first one is a simple but realy visual project. The idea here is to have windows that interact with each other. You can see lines betweens thems, moving them will move the lines and removing/adding a window will remove/add lines.
    <br><br>The second one was my first try at doing a rogue like game, i used vanilla JS to make  this game where you can fight monsters and level up, all that in a random generated map ! <br>You can test it here: <a style="color: blue" href="https://roguealf.netlify.app/" target="_blank">RogueLike</a>
    <br><br>The third one is a pokemon project i started, it store in DB what you pokemon are and you can switch maps and start fight with wilds pokemons when walking in high grass. It use high level dom manipulation and animations. It was realy funny to do.
    <br><br>This four one is my first freelance job. The goal here was to be able to upload custom fonts admin side and the user could, with a special link, create a text with this font and then download it. It was a big work of image manipulation. Now that i see the admin side i'm a little bit ashamed of it but it worked well and the customer was happy.`,
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
    videos: ["fenetreS.mp4", "Paragraph.mp4", "Pokemon.mp4", "textMaker.mp4"],
    banner: "FenetreS1.png",
    languages: ["JS", "CSS", "PHP"]
  },
];

export default P;
export type ProjectsType = Project[];
