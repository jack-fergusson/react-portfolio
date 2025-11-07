import Jacko from "./assets/JackBeach.png";
import Github from "./assets/github.jpg";
import Linkedin from "./assets/linkedin.png";
import mongoImage from "./assets/mongo.svg";
import jsImage from "./assets/javascript.png";
import cuccImage from "./assets/cucc.png";
import wuddleImage from "./assets/wuddle.png";

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

export const headers = ["Projects", "Clubs", "More"];

const tech = {
  mongo: {
    name: "MongoDB",
    image: mongoImage,
  },
  javascript: {
    name: "JavaScript",
    image: jsImage,
  },
};

export const projects = [
  {
    name: "Wuddle!",
    role: "Creator / Sole Developer",
    description: "Multiplayer game where you....",
    image: wuddleImage,
    stack: [tech.javascript, tech.mongo],
    link: "https://www.play-wuddle.com",
  },
  {
    name: "CUCC 2024",
    role: "Lead Developer",
    description:
      "Official website for the 2024 Canadian University Chess Championship",
    image: cuccImage,
    stack: [tech.javascript],
    link: "",
  },
];
