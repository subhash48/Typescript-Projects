import React from "react";
import { FaTwitter, FaYoutube, FaGithub, FaInstagram } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const links = [
    {
      href: "",
      label: "Twitter",
      icon: <FaTwitter className="contact-icon text-blue-500" />,
    },
    {
      href: "",
      label: "YouTube",
      icon: <FaYoutube className="contact-icon text-red-600" />,
    },
    {
      href: "https://github.com/subhash48",
      label: "GitHub",
      icon: <FaGithub className="contact-icon text-gray-900" />,
    },
    {
      href: "",
      label: "Instagram",
      icon: <FaInstagram className="contact-icon text-pink-500" />,
    },
  ];

  return (
    <section className="contact-section sm-padding lg-padding">
      <h2 className="contact-heading">Contact Me</h2>
      <div className="contact-links">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            {link.icon}
            <span className="contact-label">{link.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
