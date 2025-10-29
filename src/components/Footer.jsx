import ButtonLink from "./ButtonLink";
import Social from "./Social";
import UtilityLinks from "./UtilityLinks";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="col-40 flex justify-between">
          <div className="col-30">
            <ul>
              <UtilityLinks />
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom-footer mt-30">
        <div className="container flex justify-between py-20">
          <ButtonLink href="/subscribe" style="sub-btn" title="SIGN-UP NOW!" />
          <Social />
        </div>
      </div>
    </footer>
  );
}
