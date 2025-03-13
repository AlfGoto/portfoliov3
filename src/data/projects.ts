import type { Project } from "@/types/project";

function a(url: string, title: string) {
  return `<a style="color: blue" href="${url}" target="_blank">${title}</a>`;
}

const P: ProjectsType = [
  {
    name: "This portfolio",
    description: `This is the latest portfolio I've created. I believe the GitHub repository is named something like portfoliov3, but this must be at least the fifth version.<br>I experimented with some 3D design and pre-designed layouts/themes, but ultimately, I settled on this clean and simple design. My goal was to keep the focus on the projects rather than the design itself.
    <br><br>One crucial thing about this portfolio is that it will be reviewed by my school to evaluate my skills and determine if I deserve my diploma.<br>The school's instructions weren't particularly clear or precise, which meant I had to interpret them quite a bit. But that actually worked in my favor—it's the kind of challenge that motivates me the most!
    <br><br>To structure my projects, I stored them as an array of objects, ensuring consistency.<br>This way, I only needed to create reusable components and pages, then iterate through the projects to generate them dynamically.<br>It's a simple trick, but it makes things so much easier. For example, the project pages exist solely as dynamic routes based on a variable URL.
    <br><br>Due to school requirements, I had to integrate a backend system, so I came up with an idea: a review system where users could select the platform where their review would be posted.<br>For instance, you could leave a review on AWS or Supabase, and when displayed, it would indicate the source.<br>It's a quirky but fun feature that I really like! It also taught me a lot about Vercel integrations (like Neon), and I quickly built an API using AWS while also incorporating Supabase.
    <br><br>Additionally, we needed to implement an email contact form.<br>With my friend from LowBack, we developed an admin-only email sender using .NET and an NPM package that works exceptionally well!
    <br><br>Also this is my first time trying SEO. In a lack of luck i have discovered others Alfred Gauthier. Inventors and Resistant. I almost feel bad of trying to be ahead of them in SEO. I learned about sitemap and the google search console.
    <br><br>I did a figma if you want to see it: ${a(
      "https://www.figma.com/design/tq04CpzPgfXLXkiTGKfI46/portfolio?node-id=0-1&p=f",
      "Figma"
    )}
    `,
    images: [
      "banner.png",
      "home.png",
      "project.png",
      "projects-code.png",
      "reviews.png",
      "review-chose.png",
    ],
    banner: "banner.png",
    languages: ["AWS", "NEXT", "Mui", "Neon", "Basalf"],
  },
  {
    name: "Basalf",
    description: `Basalf was born out of a problem I faced. At the end of 2024, I struggled with the limitations of Supabase's free tier—an incredibly useful service, but one that restricted me to just two projects at a time. This frustration led me to the idea of building my own Supabase/Pocketbase/Firebase alternative. Since all I really needed was a free serverless database, I focused on creating my own database-as-a-service.
    <br><br>I chose Next.js primarily for its API functions and opted for MySQL as my storage solution, wanting to deepen my knowledge of using it with JavaScript. To make Basalf easier to use, I also developed an ${a(
      "https://www.npmjs.com/package/basalf",
      "NPM package"
    )}, which serves as an SDK.  
    <br><br>
    While this project is not yet complete, I'm genuinely proud of it. I hope my friends and I can successfully bring Lowback—another project in this portfolio and the spiritual successor to Basalf—to life.  
    `,
    images: ["table.png", "home.png", "npm.png"],
    banner: "table.png",
    languages: ["NEXT", "Basalf"],
    url: "https://basalf.fr/",
  },
  {
    name: "Sezame",
    description: `Sezame is the startup where I truly learned what it means to be a real-world developer. From CI to end-to-end testing, I gained hands-on experience with AWS, architecture, monorepos, strong TypeScript consistency, and even work ethics.
    <br><br>One of the first things I learned was how to work within a diverse team—not just developers, but also sales, marketing, and other professionals. Before this, I had only worked with other devs, so it was a refreshing experience. I also got to experience what it feels like to be "the new guy" and to work alongside people with 10 times my skills. Back in school, I was always the leader and top performer, but here, I had to learn how to follow directions from more experienced colleagues and effectively communicate feedback on my work.
    <br><br>I also learned what it truly means to be a developer. As I mentioned, I discovered the importance and comfort of writing tests. CI completely changed the way I code—it saves so much time! Initially, I was completely lost when starting with AWS and AWS CDK, but as I got the hang of it, it became incredibly satisfying to build exactly what I wanted. AWS is extremely powerful and useful, and it has now become my favorite serverless tool.
    <br><br>This experience also made me realize my strong interest in architecture. We designed our own architectural solutions and build systems, which I found fascinating. It inspired me to dive deeper into learning about software architecture.
    <br><br>Of course, I also learned what it means to work at a startup. Every decision had to be made with precision because a single mistake could cost us a lot—and for a startup, losing too much could mean the end of the company. But there were also incredible upsides. Every success felt like our success. Moving to a better office was incredibly satisfying, and I got to befriend some truly amazing people. This experience didn't just make me a better developer—it made me a better person.
    `,
    images: ["marketplace.png", "sezame-wework1.jpg"],
    banner: "marketplace.png",
    url: "https://joinsezame.com/",
    languages: ["AWS", "NEXT", "Tailwind"],
  },
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
    name: "Lowback",
    description: `Lowback is my most ambitious project. With some friend we are building a Backend as a service. I did a lot of research to find the best architecture possible for our need and our usages. And so we use dotnet with a microservice oriented architecture. We created packages and interfaces. I also made the deployement strategy using a VPS with subdomains, httpd, progresql, systemctl services...`,
    images: ["dotnet.png"],
    banner: "dotnet.png",
    languages: [".NET", "NEXT"],
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
    <br><br>The first one is a 3D portfolio, the concepts is simple and cool. It use CSS and JS and will let you cicle through some projects. I made it Cartoon like with those flashy colors and cloud in the back.<br>You can test it here: ${a(
      "https://alfolio.netlify.app/",
      "Alfolio"
    )}
    <br><br>The starship one is made using Three.js, it was my first try of this fabulous library. It show a flying starship that you can move with your arrow and ZQSD keys. It also show a big planet revelating star wars style.
    <br><br>The minecraft house is made using only CSS, it was my first realy 3D try. I discovered randomly that doing 3D on CSS was a thing and i immediatly needed to try it. It made my friends laugh seing this ridiculous minecraft house spinning in a navigator. it is full CSS, I only used JS to make it manualy scrollable.<br>You can test it here: ${a(
      "https://minecralf.netlify.app/",
      "MinecrAlf"
    )}
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
    languages: ["Three.js", "CSS"],
  },
  {
    name: "Some random projects",
    description: `I did all sorts of strange things with my code, i wanted to learn but mainly wanted to have fun coding. This is mainly if you are curious about some little projects.
    <br><br>The first one is a simple but realy visual project. The idea here is to have windows that interact with each other. You can see lines betweens thems, moving them will move the lines and removing/adding a window will remove/add lines.
    <br><br>The second one was my first try at doing a rogue like game, i used vanilla JS to make  this game where you can fight monsters and level up, all that in a random generated map ! <br>You can test it here: ${a(
      "https://roguealf.netlify.app/",
      "RogueLike"
    )}
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
    languages: ["JS", "CSS", "PHP"],
  },
];

export default P;
export type ProjectsType = Project[];
