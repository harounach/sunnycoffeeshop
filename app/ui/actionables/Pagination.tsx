"use client";

import classNames from "classnames";
import Link from "next/link";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { usePathname, useSearchParams } from "next/navigation";
import { generatePagination } from "@/app/lib/utils/productUtils";

interface PaginationProps {
  totalPages: number;
  customClasses?: string;
}

export default function Pagination({
  totalPages,
  customClasses,
}: PaginationProps) {
  const classes = classNames("pager", customClasses);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber?.toString());
    return `${pathname}?${params.toString()}`;
  };

  const allPages = generatePagination(currentPage, totalPages);

  return (
    <div className={classes}>
      <PaginationArrow
        direction="left"
        url={createPageURL(currentPage - 1)}
        isDisabled={currentPage <= 1}
      />
      {allPages.map((page, index) => {
        let position: "first" | "last" | "single" | "middle" | undefined;

        if (index === 0) position = "first";
        if (index === allPages.length - 1) position = "last";
        if (allPages.length === 1) position = "single";
        if (page === "...") position = "middle";

        return (
          <PaginationNumber
            key={page}
            url={createPageURL(page)}
            page={page}
            position={position}
            isActive={currentPage === page}
          />
        );
      })}

      <PaginationArrow
        direction="right"
        url={createPageURL(currentPage + 1)}
        isDisabled={currentPage >= totalPages}
      />
    </div>
  );
}

interface PaginationArrowProps {
  url: string;
  direction: "left" | "right";
  isDisabled?: boolean;
}

function PaginationArrow({ url, direction, isDisabled }: PaginationArrowProps) {
  const classes = classNames("pager__btn pager__btn--jump");

  const icon =
    direction === "left" ? <BsArrowLeftShort /> : <BsArrowRightShort />;

  const content = isDisabled ? (
    <div className={classes}>{icon}</div>
  ) : (
    <Link href={url} className={classes}>
      {icon}
    </Link>
  );

  return <>{content}</>;
}

interface PaginationNumberProps {
  page: number | string;
  url: string;
  position?: "first" | "last" | "middle" | "single";
  isActive: boolean;
}

function PaginationNumber({
  page,
  url,
  isActive,
  position,
}: PaginationNumberProps) {
  const classes = classNames("pager__btn", { "pager__btn--current": isActive });

  return isActive || position === "middle" ? (
    <div className={classes}>{page}</div>
  ) : (
    <Link href={url} className={classes}>
      {page}
    </Link>
  );
}
