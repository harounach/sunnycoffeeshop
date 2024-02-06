import {
  BsAwardFill,
  BsDiagram3Fill,
  BsFillHouseHeartFill,
} from "react-icons/bs";
import BenefitCard from "./BenefitCard";

export default function BenefitList() {
  return (
    <div className="benefit-list">
      <BenefitCard
        title="New York Family Owned"
        desc="Our family has taken pride in sourcing, roasting, and brewing the highest-quality coffee for over 12 years in New York City."
        icon={<BsFillHouseHeartFill />}
      />

      <BenefitCard
        title="Ethically Sourced"
        desc="Our specialty coffee beans are traceable back to their farm or cooperative. Our coffee is USDA Organic, Fair Trade & Direct Trade."
        icon={<BsDiagram3Fill />}
      />

      <BenefitCard
        title="Rare & Exceptional Coffees"
        desc="We source exceptional coffees like the Gesha variety from award-winning farms. We offer delicious decaf options."
        icon={<BsAwardFill />}
      />
    </div>
  );
}
