import classNames from "classnames";
import Select from "./Select";

interface CoffeeFilterProps {
  customClasses?: string;
}

export default function CoffeeFilter({ customClasses }: CoffeeFilterProps) {
  const classes = classNames("coffee-filter", customClasses);

  return (
    <form className={classes}>
      <Select
        id="coffee_sort"
        name="coffee_sort"
        label="Sort by"
        customClasses="coffee-filter__sort"
      >
        <option value="latest">Latest</option>
        <option value="latest">Oldest</option>
      </Select>

      <Select
        id="coffee_filter"
        name="coffee_filter"
        label="Filter by"
        customClasses="coffee-filter__filter"
      >
        <option value="latest">Best selling</option>
        <option value="latest">Least selling</option>
      </Select>
    </form>
  );
}
