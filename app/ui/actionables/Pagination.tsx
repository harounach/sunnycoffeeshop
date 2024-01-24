import classNames from "classnames";
import Link from "next/link";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

interface PaginationProps {
  customClasses?: string;
}

export default function Pagination({ customClasses }: PaginationProps) {
  const classes = classNames("pager", customClasses);

  return (
    <div className={classes}>
      <Link href="#" className="pager__btn pager__btn--jump">
        <BsArrowLeftShort />
      </Link>
      <Link href="#" className="pager__btn pager__btn--current">
        1
      </Link>
      <Link href="#" className="pager__btn">
        2
      </Link>
      <Link href="#" className="pager__btn">
        3
      </Link>
      <Link href="#" className="pager__btn">
        4
      </Link>
      <Link href="#" className="pager__btn pager__btn--jump">
        <BsArrowRightShort />
      </Link>
    </div>
  );
}
