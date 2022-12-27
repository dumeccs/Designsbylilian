import React from "react";
import { AboutHero, AboutMe, Contact, Footer, Reviews } from "../components";

export default function About() {
  return (
    <main className="mainWrapper">
        <AboutHero />
        <AboutMe/>
        {/* <Reviews /> */}
        <Contact/>
        <Footer />
    </main>
  );
}
