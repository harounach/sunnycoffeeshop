import classNames from "classnames";

interface CoffeeFilterProps {
  customClasses?: string;
}

export default function CoffeeFilter({ customClasses }: CoffeeFilterProps) {
  const classes = classNames("coffee-filter", customClasses);

  return (
    <form className={classes}>
      <div className="select coffee-filter__sort">
        <label className="select__label label" htmlFor="coffee_sort">
          Sort by
        </label>
        <select
          name="coffee_sort"
          id="coffee_sort"
          className="select__select body-base"
        >
          <option value="latest">Latest</option>
          <option value="latest">Oldest</option>
        </select>
      </div>

      <div className="select coffee-filter__filter">
        <label className="select__label label" htmlFor="coffee_filter">
          Filter by
        </label>
        <select
          name="coffee_filter"
          id="coffee_filter"
          className="select__select body-base"
        >
          <option value="latest">Best selling</option>
          <option value="latest">Least selling</option>
        </select>
      </div>
    </form>
  );
}
