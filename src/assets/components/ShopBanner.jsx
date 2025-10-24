export default function ShopBanner() {
  return (
    <>
      <div className="shop-banner">
        <div className="container flex justify-around align-items-center py-50  ">
          <a href="#">
            <img
              src="src/assets/img/buy-comics-digital-comics.png"
              alt="DC Tablet"
            />
            DIGITAL COMICS
          </a>
          <a href="#">
            <img
              src="src/assets/img/buy-comics-merchandise.png"
              alt="DC merchandise"
            />
            DC MERCHANDISE
          </a>
          <a href="#">
            <img
              src="src/assets/img/buy-comics-subscriptions.png"
              alt="Subscription cards"
            />
            SUBSCRIPTION
          </a>
          <a href="#">
            <img
              src="src/assets/img/buy-comics-shop-locator.png"
              alt="Location"
            />
            COMIC SHOP LOCATOR
          </a>
          <a href="#">
            <img
              src="src/assets/img/buy-dc-power-visa.svg"
              alt="Dc power visa"
            />
            DC POWER VISA
          </a>
        </div>
      </div>
    </>
  );
}
