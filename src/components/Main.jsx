import ShopBanner from "./ShopBanner";
import comics from "../assets/data/comics";
import Jumbotron from "./Jumbotron";
import ComicsCard from "./ComicsCard";
import Label from "./Label";
import LabelLink from "./LabelLink";
import shopLinks from "../assets/data/shopLinks";

export default function Main() {
  return (
    <main>
      <Jumbotron />
      <div className="container">
        <Label style="current" title="CURRENT SERIES" />
      </div>
      <ul className="container py-50 flex wrap justify-between">
        {comics.map(({ id, thumb, title }) => (
          <ComicsCard key={id} thumb={thumb} title={title} />
        ))}
      </ul>
      <div className="container mb-30 flex justify-center">
        <LabelLink href="/load-more" style="load-more" title="LOAD MORE" />
      </div>
      <div className="shop-banner">
        <ul className="container flex justify-around align-items-center py-50  ">
          {shopLinks.map(({ id, href, img, alt, title }) => (
            <ShopBanner
              key={id}
              href={href}
              img={img}
              alt={alt}
              title={title}
            />
          ))}
        </ul>
      </div>
    </main>
  );
}
