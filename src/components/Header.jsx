import Logo from "./Logo";
import HeaderNavbar from "./HeaderNavbar";
import navbarObj from "../assets/data/navbarObj";

export default function Header() {
  return (
    <header>
      <div className="container flex justify-between py-20">
        <Logo />
        <nav className="flex">
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
