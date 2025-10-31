import Jacko from "./assets/JackBeach.png";
import Github from "./assets/github.jpg";
import Linkedin from "./assets/linkedin.png";

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

export const projects = [
  {
    name: "Wuddle!",
    description: "Multiplayer game where you....",
  },
  {
    name: "CUCC 2024",
    description:
      "Official website for the 2024 Canadian University Chess Championship",
  },
];
