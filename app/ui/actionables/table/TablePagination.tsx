"use client";

import classNames from "classnames";
import { usePathname, useSearchParams } from "next/navigation";
import {
  BsChevronBarLeft,
  BsChevronBarRight,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
import IconLinkButton from "@/app/ui/actionables/buttons/IconLinkButton";
import IconButton from "@/app/ui/actionables/buttons/IconButton";

interface TablePaginationProps {
  totalPages: number;
  customClasses?: string;
}

export default function TablePagination({
  totalPages,
  customClasses,
}: TablePaginationProps) {
  const classes = classNames("table-pager", customClasses);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber?.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className={classes}>
      <span className="table-pager__label body-base">{currentPage} of {totalPages} pages</span>
      <div className="table-pager__nav">
        <PaginationButton
          direction="first"
          url={createPageURL(1)}
          isDisabled={currentPage <= 1}
        />
        <PaginationButton
          direction="prev"
          url={createPageURL(currentPage - 1)}
          isDisabled={currentPage <= 1}
        />
        <PaginationButton
          direction="next"
          url={createPageURL(currentPage + 1)}
          isDisabled={currentPage >= totalPages}
        />
        <PaginationButton
          direction="last"
          url={createPageURL(totalPages)}
          isDisabled={currentPage >= totalPages}
        />
      </div>
    </div>
  );
}

interface PaginationButtonProps {
  url: string;
  direction: "first" | "prev" | "next" | "last";
  isDisabled?: boolean;
}

function PaginationButton({
  url,
  direction,
  isDisabled,
}: PaginationButtonProps) {
  const classes = classNames("table-pager__btn", { disabled: isDisabled });

  let icon = null;
  let title = "";
  switch (direction) {
    case "first":
      icon = <BsChevronBarLeft />;
      title = "Go to First";
      break;
    case "prev":
      icon = <BsChevronLeft />;
      title = "Previous";
      break;
    case "next":
      icon = <BsChevronRight />;
      title = "Next";
      break;
    default:
      icon = <BsChevronBarRight />;
      title = "Go to Last";
      break;
  }

  return isDisabled ? (
    <IconButton hasBG customClasses={classes} title={title}>
      {icon}
    </IconButton>
  ) : (
    <IconLinkButton hasBG url={url} customClasses={classes} title={title}>
      {icon}
    </IconLinkButton>
  );
}
