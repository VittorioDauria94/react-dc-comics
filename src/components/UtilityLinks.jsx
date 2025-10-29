export default function UtilityLinks({ sections }) {
  return (
    <div className="flex flex-column">
      {sections.map(({ section, links }) => (
        <div key={section} className="mb-30">
          <h4>{section}</h4>
          <ul>
            {links.map(({ name, href }) => (
              <li key={name}>
                <a href={href}>{name}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
