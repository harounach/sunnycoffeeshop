import { BaseProps } from "@/types/BaseProps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as StarSolid,
  faStarHalfStroke as StarHalf,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as StarOutline } from "@fortawesome/free-regular-svg-icons";
import React from "react";

interface RatingProps extends BaseProps {
  value: number;
}

const Rating = ({ value }: RatingProps) => {
  const iconOne =
    value >= 1 ? StarSolid : value >= 0.5 ? StarHalf : StarOutline;
  const iconTwo =
    value >= 2 ? StarSolid : value >= 1.5 ? StarHalf : StarOutline;
  const iconThree =
    value >= 3 ? StarSolid : value >= 2.5 ? StarHalf : StarOutline;
  const iconFour =
    value >= 4 ? StarSolid : value >= 3.5 ? StarHalf : StarOutline;
  const iconFive =
    value >= 5 ? StarSolid : value >= 4.5 ? StarHalf : StarOutline;

  return (
    <div className="inline-block">
      <FontAwesomeIcon
        className="inline-block h-4 w-4 text-orange-400"
        icon={iconOne}
      />
      <FontAwesomeIcon
        className="inline-block h-4 w-4 text-orange-400"
        icon={iconTwo}
      />
      <FontAwesomeIcon
        className="inline-block h-4 w-4 text-orange-400"
        icon={iconThree}
      />
      <FontAwesomeIcon
        className="inline-block h-4 w-4 text-orange-400"
        icon={iconFour}
      />
      <FontAwesomeIcon
        className="inline-block h-4 w-4 text-orange-400"
        icon={iconFive}
      />
    </div>
  );
};

export default Rating;
