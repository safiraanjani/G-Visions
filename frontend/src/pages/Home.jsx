import React from 'react'
import About from "../components/about";
import Project from "../components/project";
import Skills from "../components/skills";

export default function Home() {
  return (
    <div>
    <div className="img-hero" id="home"></div>        
    <About />
    <Project />
    <Skills />
  </div>
  )
}
