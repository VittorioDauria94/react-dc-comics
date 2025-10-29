import ButtonLink from "./ButtonLink";
import Social from "./Social";
import UtilityLinks from "./UtilityLinks";
import footerLinks from "../FooterLinks";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="col-40">
          <div className="flex justify-between">
            {footerLinks.map(({ id, sections }) => (
              <div key={id}>
                <UtilityLinks sections={sections} />
              </div>
            ))}
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
