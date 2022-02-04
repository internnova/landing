import React from "react";
import { FaDiscord, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiTwitter, FiGithub } from "react-icons/fi";

export const SocialButtons = () => {
  const socials = [
    { icon: FiTwitter, link: "https://twitter.com/internnovahq" },
    { icon: FaInstagram, link: "https://instagram.com/internnova" },
    { icon: FiGithub, link: "https://github.com/internnovahq" },
    {
      icon: FaDiscord,
      link: "https://discord.gg/https://discord.gg/24dyywQm5S",
    },
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/company/internnova/",
    },
  ];

  return (
    <div className="flex items-center gap-[1rem]">
      {socials.map((social, i) => {
        return (
          <a key={i} href={social.link} target="blank" rel="noreferrer">
            <social.icon className="h-6 w-6 hover:opacity-[0.8] text-[#fff] " />
          </a>
        );
      })}
    </div>
  );
};
