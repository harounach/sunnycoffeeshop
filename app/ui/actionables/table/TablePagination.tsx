import classNames from "classnames";
import {
  BsChevronBarLeft,
  BsChevronBarRight,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
import IconButton from "@/app/ui/actionables/buttons/IconButton";
import Select from "@/app/ui/inputs/Select";
import Link from "next/link";
import IconLinkButton from "../buttons/IconLinkButton";

interface TablePaginationProps {
  customClasses?: string;
}

export default function TablePagination({
  customClasses,
}: TablePaginationProps) {
  const classes = classNames("table-pager", customClasses);

  return (
    <div className={classes}>
      <div className="table-pager__select">
        <span className="table-pager__label body-base">Rows per page</span>
        <div className="select">
          <label className="select__label label label--hide" htmlFor="page">
            Items per page
          </label>
          <select name="page" id="page" className="select__select body-base">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </div>
      </div>
      <span className="table-pager__label body-base">1-10 of 100</span>
      <div className="table-pager__nav">
        <IconLinkButton customClasses="table-pager__first" url="#">
          <BsChevronBarLeft />
        </IconLinkButton>
        <IconLinkButton customClasses="table-pager__prev" url="#">
          <BsChevronLeft />
        </IconLinkButton>
        <IconLinkButton customClasses="table-pager__next" url="#">
          <BsChevronRight />
        </IconLinkButton>
        <IconLinkButton customClasses="table-pager__last" url="#">
          <BsChevronBarRight />
        </IconLinkButton>
      </div>
    </div>
  );
}
