import React, { useState } from "react";
import IconButton from "@/components/Button/IconButton";
import {
  faAngleLeft,
  faAngleRight,
  faAnglesLeft,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";
import { getPaginationURL } from "@/lib/urlUtils";

interface AdminProductPaginationProps {
  page: number;
  pages: number;
  order: number;
}

const AdminProductPagination = ({
  page,
  pages,
  order,
}: AdminProductPaginationProps) => {
  const [perpage, setPerpage] = useState(10);

  const baseURL = "/admin/products";

  const firstButtonURL = getPaginationURL(baseURL, 1, perpage, order);
  const lastButtonURL = getPaginationURL(baseURL, pages, perpage, order);
  const nextButtonURL = getPaginationURL(baseURL, page + 1, perpage, order);
  const previousButtonURL = getPaginationURL(baseURL, page - 1, perpage, order);

  return (
    <div className="flex  items-center justify-end gap-4">
      <form className="flex items-center gap-4">
        <label htmlFor="rows_per_page">Rows per page</label>
        <select name="rows_per_page" id="rows_per_page">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
      </form>
      <span>1-10 of 100</span>
      <div className="flex items-center gap-2">
        {/*First button*/}
        <IconButton
          icon={faAnglesLeft}
          size="normal"
          variant="white"
          url={firstButtonURL}
        />
        {/*Previous button*/}
        <IconButton
          icon={faAngleLeft}
          size="normal"
          variant="white"
          url={previousButtonURL}
        />
        {/*Next button*/}
        <IconButton
          icon={faAngleRight}
          size="normal"
          variant="white"
          url={nextButtonURL}
        />
        {/*Last button*/}
        <IconButton
          icon={faAnglesRight}
          size="normal"
          variant="white"
          url={lastButtonURL}
        />
      </div>
    </div>
  );
};

export default AdminProductPagination;
