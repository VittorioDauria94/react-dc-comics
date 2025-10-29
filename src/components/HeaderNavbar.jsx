export default function HeaderNavbar({ href, active, title }) {
  return (
    <li>
      <a href={href} className={active ? "active" : ""}>
        {title}
      </a>
    </li>
  );
}
