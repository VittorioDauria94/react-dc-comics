export default function LabelLink({ style, title, href }) {
  return (
    <a href={href} className={`label ${style}`}>
      {title}
    </a>
  );
}
