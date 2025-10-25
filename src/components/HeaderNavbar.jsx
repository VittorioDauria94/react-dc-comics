import navbarObj from "../navbarObj";

export default function HeaderNavbar() {
  const navbar = navbarObj.map((curObj) => (
    <li key={curObj.id}>
      <a href={curObj.src} className={curObj.active === true ? "active" : ""}>
        {curObj.title}
      </a>
    </li>
  ));
  return (
    <nav className="flex">
      <ul className="flex align-items-center gap-30 nav-font">{navbar}</ul>
    </nav>
  );
}
