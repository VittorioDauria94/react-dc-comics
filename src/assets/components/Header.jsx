import Logo from "./Logo";
import HeaderNavbar from "./HeaderNavbar";

export default function Header() {
  return (
    <header>
      <div className="container flex justify-between py-20">
      <Logo />
      <HeaderNavbar />
      </div>
    </header>
  );
}
