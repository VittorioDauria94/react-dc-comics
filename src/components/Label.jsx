export default function Label({ style, title }) {
  return <span className={`label ${style}`}>{title}</span>;
}
