import classNames from "classnames";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

interface PaginationProps {
  customClasses?: string;
}

export default function Pagination({ customClasses }: PaginationProps) {
  const classes = classNames("pager", customClasses);

  return (
    <div className={classes}>
      <a href="#" className="pager__btn pager__btn--jump">
        <BsArrowLeftShort />
      </a>
      <a href="#" className="pager__btn pager__btn--current">
        1
      </a>
      <a href="#" className="pager__btn">
        2
      </a>
      <a href="#" className="pager__btn">
        3
      </a>
      <a href="#" className="pager__btn">
        4
      </a>
      <a href="#" className="pager__btn pager__btn--jump">
        <BsArrowRightShort />
      </a>
    </div>
  );
}
