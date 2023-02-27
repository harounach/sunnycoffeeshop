import React from "react";
import Button from "@/components/Button/Button";
import { getPaginationURL } from "@/lib/urlUtils";
import Query from "@/types/Query";

interface DottedPaginationProps {
  query: Query;
  baseURL: string;
}

const DottedPagination = ({ query, baseURL }: DottedPaginationProps) => {
  const { page, perpage, pages, order, q } = query;

  console.log("Search query is: " + q);

  const paginationButtons = [];
  for (let i = 1; i <= Number(pages); i++) {
    const newQuery: Query = {};
    newQuery.page = i;
    if (perpage) {
      newQuery.perpage = Number(perpage);
    }

    if (order) {
      newQuery.order = Number(order);
    }

    if (q) {
      newQuery.q = String(q);
    }

    let url = getPaginationURL(baseURL, newQuery);
    const variant = Number(page) === i ? "primary" : "secondary";
    let btn = (
      <Button
        variant={variant}
        label={String(i)}
        type="submit"
        url={url}
        key={url}
      />
    );
    paginationButtons.push(btn);
  }

  return <div className="flex gap-4">{paginationButtons}</div>;
};

export default DottedPagination;
