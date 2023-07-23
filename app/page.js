"use client";

import { motion } from "framer-motion";

import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 50, delay: 0 }}
      >
        <Header />
        <Projects />
        <Skills />
        <AboutMe />
        <Footer />
      </div>
    </div>
  );
}