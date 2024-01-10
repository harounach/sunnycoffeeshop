import classNames from "classnames";
import {
  BsChevronBarLeft,
  BsChevronBarRight,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
import IconButton from "@/app/ui/actionables/buttons/IconButton";
import Select from "@/app/ui/inputs/Select";

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
        <Select id="page" name="page" label="Items per page" hideLabel>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </Select>
      </div>
      <span className="table-pager__label body-base">1-10 of 100</span>
      <div className="table-pager__nav">
        <IconButton customClasses="table-pager__first" hasBG>
          <BsChevronBarLeft />
        </IconButton>
        <IconButton customClasses="table-pager__prev" hasBG>
          <BsChevronLeft />
        </IconButton>
        <IconButton customClasses="table-pager__next" hasBG>
          <BsChevronRight />
        </IconButton>
        <IconButton customClasses="table-pager__last" hasBG>
          <BsChevronBarRight />
        </IconButton>
      </div>
    </div>
  );
}
