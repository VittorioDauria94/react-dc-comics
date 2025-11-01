export default function Social({ socialLinks }) {
  const { links, title } = socialLinks;
  return (
    <>
      <div className="flex gap-20 align-items-center">
        <span className="follow-font">{title}</span>
        {links.map(({ href, src, alt, id }) => (
          <a key={id} href={href}>
            <img src={src} alt={alt} />
          </a>
        ))}
      </div>
    </>
  );
}
