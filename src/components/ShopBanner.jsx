export default function ShopBanner({ href, img, alt, title }) {
  return (
    <li>
      <a href={href}>
        <img src={img} alt={alt} />
        {title}
      </a>
    </li>
  );
}
