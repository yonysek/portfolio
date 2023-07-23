import { IoLogoGithub, IoMailOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-4 justify-center items-center w-full h-[30vh] bg-slate-100 ">
      <div className="flex items-center justify-center gap-4 text-4xl">
        <a
          className="footer-link"
          href="https://github.com/yonysek"
          target="_blank"
        >
          <IoLogoGithub />
        </a>
        <a
          className="footer-link"
          href="mailto:jonas.vybiral.jv@gmail.com"
          target="_blank"
        >
          <IoMailOutline />
        </a>
      </div>
      <h3 className="text-xs font-light sm:text-sm">
        Copyright © {new Date().getFullYear()} Jonáš Vybíral. All rights
        reserved.
      </h3>
    </footer>
  );
}