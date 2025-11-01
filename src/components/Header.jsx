import { useState } from "react";
import Logo from "./Logo";
import HeaderNavbar from "./HeaderNavbar";
import navbarObj from "../assets/data/navbarObj";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <header>
      <div className="container flex justify-between py-20">
        <Logo />
        <button
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          className="hamburger-btn"
        >
          <img
            src={
              isOpen
                ? "src/assets/img/hamburger-dc-open.svg"
                : "src/assets/img/hamburger-dc.svg"
            }
            alt="Hamburger menu icon"
          />
        </button>
        <nav className={`nav-menu ${isOpen ? "show-menu" : ""}`}>
          <ul className="flex align-items-center gap-30 nav-font">
            {navbarObj.map(({ id, src, active, title }) => (
              <HeaderNavbar key={id} href={src} active={active} title={title} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
