import Jacko from "./assets/JackBeach.png";
import Github from "./assets/github.jpg";
import Linkedin from "./assets/linkedin.png";
import mongoImage from "./assets/mongo.svg";
import jsImage from "./assets/javascript.png";
import cuccImage from "./assets/cucc.png";
import wuddleImage from "./assets/wuddle.png";
import engSocImage from "./assets/engSoc.png";
import socketioImage from "./assets/socketio.png";
import ejsImage from "./assets/ejs.png";
import bootstrapImage from "./assets/bootstrap.jpg";
import reactImage from "./assets/react.svg";
import dockerImage from "./assets/docker.png";
import toolpoolImage from "./assets/toolpool.png";
import flutterImage from "./assets/flutter.png";
import firebaseImage from "./assets/firebase.png";
import chessImage from "./assets/chess.jpeg";
import essdevImage from "./assets/essdev.png";

export const jackInfo = {
  img: Jacko,
  name: "Jack Fergusson",
  title: "Software Engineer",
  location: "Toronto, Canada",
  socials: [
    {
      name: "GitHub",
      img: Github,
      href: "https://github.com/jack-fergusson",
    },
    {
      name: "LinkedIn",
      img: Linkedin,
      href: "https://www.linkedin.com/in/jack-fergusson-01ab611a1/",
    },
  ],
};

export const starTexts = [
  "Hire me!",
  "Degree included!",
  "New and improved!",
  "Now with React!",
  "25% off!",
  "Bug-free!",
];

export const headers = ["Projects", "Clubs", "About"];

const tech = {
  mongo: {
    name: "MongoDB",
    image: mongoImage,
  },
  javascript: {
    name: "JavaScript",
    image: jsImage,
  },
  socketio: {
    name: "Socket.io",
    image: socketioImage,
  },
  ejs: {
    name: "EJS",
    image: ejsImage,
  },
  bootstrap: {
    name: "Bootstrap",
    image: bootstrapImage,
  },
  react: {
    name: "ReactJS",
    image: reactImage,
  },
  docker: {
    name: "Docker",
    image: dockerImage,
  },
  flutter: {
    name: "Flutter",
    image: flutterImage,
  },
  firebase: {
    name: "Firebase",
    image: firebaseImage,
  },
};

export const projects = [
  {
    name: "EngSoc User Center",
    role: "Project Manager/Lead Developer",
    description:
      "The official event management website for the Queen's University Engineering Society. To be used by approximately 5,000 undergraduate students. Developed using modern software engineering techniques including containerization and CI/CD. (Currently in development)",
    image: engSocImage,
    stack: [tech.react, tech.mongo, tech.docker],
    link: "https://github.com/jack-fergusson/EngSoc-User-Center",
  },
  {
    name: "WUDDLE!",
    role: "Creator/Sole Developer",
    description:
      "A real-time multiplayer web game based on bingo boards for real life events. Within 6 months of its publishing, over 400 players had completed games with friends. Try it yourself for the full experience!",
    image: wuddleImage,
    stack: [tech.javascript, tech.mongo, tech.socketio, tech.ejs],
    link: "https://www.play-wuddle.com",
  },
  {
    name: "Tournament Registration Site",
    role: "Lead Developer",
    description:
      "Official website for the 2024 Canadian University Chess Championship. Provided information on the tournament and allowed teams to sign up to compete. Used by over 200 players across Canada.",
    image: cuccImage,
    stack: [tech.javascript, tech.mongo, tech.bootstrap],
    link: "https://www.queensuchess.ca/CUCC2024",
  },
  {
    name: "Tool Pool",
    role: "Developer",
    description:
      "A prototype mobile application for sharing tools among users in nearby communities. Developed as part of the Queen's Software Team (ESSDEV) using Flutter and Firebase.",
    image: toolpoolImage,
    stack: [tech.flutter, tech.firebase],
    link: "https://github.com/SoslyLW/essdev-app-team",
  },
];

export const clubs = [
  {
    name: "Queen's Chess Club",
    role: "President",
    description:
      "As an executive since 2022, I have helped grow the Queen's Chess Club from 50 members to over 500 within Queen's. In 2024, we hosted the largest Canadian University Chess Championsip to date, with over 200 players from across Canada participating. The club won Queen's University Club of The Year in 2024. In addition to my responsibilities as President, I also played for the national competitive chess team at Queen's, winning individual Gold in 2024.",
    image: chessImage,
  },
  {
    name: "Queen's Software Team (ESSDEV)",
    role: "Project Manager",
    description:
      "Since 2023, I have been a part of the Queen's Software Team, which is dedicated to teaching students to develop industry-ready software via project-based learning. Since 2025, I have been a Project Manager, leading a team of 5 students in developing the student center web app shown above.",
    image: essdevImage,
  },
];
