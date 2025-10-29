export default function ComicsCard({ title, thumb }) {
  return (
    <li className="col-16 flex justify-center">
      <a href="#">
        <img
          className="comic-img"
          src={thumb}
          alt={`Cover image of ${title}`}
        />
        <h6>{title}</h6>
      </a>
    </li>
  );
}
