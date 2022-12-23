import { useState } from "react"
import "../styles/navbar.css"

export default function Navbar() {
  // ajax no reload page



  const [isNavExpanded, setIsNavExpanded] = useState(false)
 

  // sticky navbar
  const [Fix, setFix] = useState(false)
  function setSticki() {
    if (window.pageYOffset >= 0) {
      setFix(true)
    } else {
      setFix(false)
    }
  }
  window.addEventListener("scroll", setSticki)

  return (
    <nav className={Fix ? 'navigation sticky' : 'navigation'}>
      <div className="brand-name">
      <img
              src='./assets/images/logo.png'
              height='30'
              alt=''
              loading='lazy'
            />
      </div>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}