import SubscriptionButton from "./SubscriptionButton";
import Social from "./Social";
import UtilityLinks from "./UtilityLinks";

export default function Footer() {
  return (
    <footer>
      <UtilityLinks />
      <div className="bottom-footer mt-30">
        <div className="container flex justify-between py-20">
          <SubscriptionButton />
          <Social />
        </div>
      </div>
    </footer>
  );
}
