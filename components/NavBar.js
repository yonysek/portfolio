import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function NavBar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 250, delay: 0.5 }}
      className="sticky z-50 flex items-center justify-between w-screen h-12 px-8 my-8 text-xs sm:h-16 xl:px-64 md:px-32 sm:text-base top-8"
    >
      <Icon />
      <Sections />
    </motion.nav>
  );
}

function Icon() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="relative h-full overflow-hidden transition-all bg-white cursor-pointer text-blob aspect-square hover:scale-[0.9] hidden min-[390px]:block"
      onClick={handleScrollToTop}
    >
      <Image src="/memoji.png" alt="personal memoji" fill />
    </div>
  );
}

function Sections() {
  const [activeSection, setActiveSection] = useState(""); // State to track the active section

  useEffect(() => {
    // Function to handle scroll events and update the active section
    const handleScroll = () => {
      const sections = ["projects", "skills", "about"]; // The IDs of your sections

      // Find the section that is currently in view, exactly in the middle
      const active = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          return (
            rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2
          );
        }
        return false;
      });

      // Update the active section
      if (active !== activeSection) {
        setActiveSection(active);
      }
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  // Function to handle smooth scroll to the middle of the section
  const handleNavLinkClick = (event, section) => {
    // Prevent the default behavior of the anchor tag (avoid URL change on click)
    event.preventDefault();

    // Get the target element using the section ID
    const el = document.getElementById(section);
    if (el) {
      // Calculate the window height and section height
      const windowHeight = window.innerHeight;
      const sectionHeight = el.getBoundingClientRect().height;

      // Calculate the offset to scroll to the middle of the section
      const offset = (windowHeight - sectionHeight) / 2;

      // Calculate the final scroll position by subtracting the offset from the top position of the section
      const scrollPosition = el.offsetTop - offset;

      // Perform the smooth scroll to the calculated position
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="flex items-center h-full gap-0 p-2 font-bold sm:gap-2 text-blob justify-evenly bg-slate-50">
      <a
        className={`nav-el ${
          activeSection === "projects" ? "active-nav-el" : ""
        }`}
        href="#projects"
        onClick={(e) => handleNavLinkClick(e, "projects")}
      >
        <span>Projects</span>
      </a>
      <a
        className={`nav-el ${
          activeSection === "skills" ? "active-nav-el" : ""
        }`}
        href="#skills"
        onClick={(e) => handleNavLinkClick(e, "skills")}
      >
        <span>Skills</span>
      </a>
      <a
        className={`nav-el ${activeSection === "about" ? "active-nav-el" : ""}`}
        href="#about"
        onClick={(e) => handleNavLinkClick(e, "about")}
      >
        <span>About me</span>
      </a>
    </div>
  );
}