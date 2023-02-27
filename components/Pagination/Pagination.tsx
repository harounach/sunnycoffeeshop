import React, { SyntheticEvent, useState } from "react";
import IconButton from "@/components/Button/IconButton";
import {
  faAngleLeft,
  faAngleRight,
  faAnglesLeft,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";
import { getPaginationURL } from "@/lib/urlUtils";

interface PaginationProps {
  baseURL: string;
  page: number;
  pages: number;
  order: number;
  count: number;
}

const Pagination = ({
  baseURL,
  page,
  pages,
  order,
  count,
}: PaginationProps) => {
  const [perpage, setPerpage] = useState(8);

  const firstButtonURL = getPaginationURL(baseURL, { page: 1, perpage, order });
  const lastButtonURL = getPaginationURL(baseURL, {
    page: pages,
    perpage,
    order,
  });
  const nextButtonURL = getPaginationURL(baseURL, {
    page: page + 1,
    perpage,
    order,
  });
  const previousButtonURL = getPaginationURL(baseURL, {
    page: page - 1,
    perpage,
    order,
  });

  const limitCondition1 = (page - 1) * perpage + 1;
  const limitCondition2 = page * perpage;

  const limit1 = limitCondition1 > 0 ? limitCondition1 : 0;
  const limit2 = limitCondition2 < count ? limitCondition2 : count;

  const canShowleftArrow = page - 1 > 0;
  const canShowRightArrow = page + 1 <= pages;

  const countText = `${limit1}-${limit2} of ${count}`;

  return (
    <div className="flex  items-center justify-end gap-4 border-2 border-gray-200 px-6">
      <form className="flex items-center gap-4">
        <label htmlFor="rows_per_page">Rows per page</label>
        <select
          value={perpage}
          onChange={(e) => setPerpage(Number(e.target.value))}
          name="rows_per_page"
          id="rows_per_page"
          defaultValue={8}
        >
          <option value="5">5</option>
          <option value="8">8</option>
          <option value="12">12</option>
        </select>
      </form>
      <span>{countText}</span>
      <div className="flex items-center gap-2">
        {/*First button*/}
        <IconButton
          icon={faAnglesLeft}
          size="normal"
          variant={canShowleftArrow ? "white" : "disabled"}
          url={firstButtonURL}
          disabled={!canShowleftArrow}
        />
        {/*Previous button*/}
        <IconButton
          icon={faAngleLeft}
          size="normal"
          variant={canShowleftArrow ? "white" : "disabled"}
          url={previousButtonURL}
          disabled={!canShowleftArrow}
        />
        {/*Next button*/}
        <IconButton
          icon={faAngleRight}
          size="normal"
          variant={canShowRightArrow ? "white" : "disabled"}
          url={nextButtonURL}
          disabled={!canShowRightArrow}
        />
        {/*Last button*/}
        <IconButton
          icon={faAnglesRight}
          size="normal"
          variant={canShowRightArrow ? "white" : "disabled"}
          url={lastButtonURL}
          disabled={!canShowRightArrow}
        />
      </div>
    </div>
  );
};

export default Pagination;
