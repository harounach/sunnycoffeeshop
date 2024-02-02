"use client";

import classNames from "classnames";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

interface SearchbarProps {
  customClasses?: string;
}

export default function Searchbar({ customClasses }: SearchbarProps) {
  const classes = classNames("text-input", customClasses);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (term) {
      params.set("q", term);
    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className={classes}>
      <label className="label label--hide text-input__label" htmlFor="search">
        Search
      </label>
      <input
        className="text-input__input"
        name="q"
        id="search"
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("q")?.toString()}
      />
    </div>
  );
}
