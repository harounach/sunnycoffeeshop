"use client";

import IconButton from "@/app/ui/actionables/buttons/IconButton";
import { BsStarFill, BsStar } from "react-icons/bs";
// import { markProductAsFeaturedAction } from "@/app/lib/actions/product.action";
// import { useFormState } from "react-dom";

interface FeaturedButtonProps {
  productId: string;
  isFeatured: boolean;
}

export default function FeaturedButton({
  productId,
  isFeatured,
}: FeaturedButtonProps) {
  const icon = isFeatured ? <BsStarFill /> : <BsStar />;

  // const initialState = { message: "" };
  // const markProductAsFeatured = markProductAsFeaturedAction.bind(
  //   null,
  //   productId,
  // );
  // const [state, dispatch] = useFormState(markProductAsFeatured, initialState);

  // action={dispatch}

  return (
    <form>
      <IconButton
        hasBG
        customClasses="admin-coffee-card__featured"
        title="Mark as Featured"
      >
        {icon}
      </IconButton>
    </form>
  );
}
