import ShopBanner from "./ShopBanner";
import comics from "../comics";
import Jumbotron from "./Jumbotron";

export default function Main() {
  const comicsElem = comics.map((curComic) => (
    <li key={curComic.id} className="col-16 flex justify-center">
      <a href="#">
        <img
          className="comic-img"
          src={curComic.thumb}
          alt={`Cover image of ${curComic.title}`}
        />
        <h6>{curComic.title}</h6>
      </a>
    </li>
  ));
  return (
    <main>
      <Jumbotron />
      <div className="container">
        <span className="label current">CURRENT SERIES</span>
      </div>
      <ul className="container py-50 flex wrap justify-between">
        {comicsElem}
      </ul>
      <div className="container mb-30 flex justify-center">
        <a href="#" className="label load-more">
          LOAD MORE
        </a>
      </div>
      <ShopBanner />
    </main>
  );
}
