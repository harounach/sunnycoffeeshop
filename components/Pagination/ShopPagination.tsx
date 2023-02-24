import React from "react";
import Button from "@/components/Button/Button";
import { getPaginationURL } from "@/lib/urlUtils";

interface ShopPaginationProps {
  page: number;
  pages: number;
  perpage: number;
  order: number;
}

const ShopPagination = ({
  page,
  pages,
  perpage,
  order,
}: ShopPaginationProps) => {
  const paginationButtons = [];
  for (let i = 1; i <= pages; i++) {
    let url = getPaginationURL("/shop", i, perpage, order);
    const variant = Number(page) === i ? "primary" : "secondary";
    console.log(variant);
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

export default ShopPagination;
