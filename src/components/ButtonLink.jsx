export default function ButtonLink({ style, title, href }) {
  return (
    <a href={href} className={style}>
      {title}
    </a>
  );
}
