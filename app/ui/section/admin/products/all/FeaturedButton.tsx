"use client";

import { useFormState } from "react-dom";
import { BsStarFill, BsStar } from "react-icons/bs";
import IconButton from "@/app/ui/actionables/buttons/IconButton";
import { markProductAsFeaturedAction } from "@/app/lib/actions/product.action";

interface FeaturedButtonProps {
  productId: string;
  isFeatured: boolean;
}

export default function FeaturedButton({
  productId,
  isFeatured,
}: FeaturedButtonProps) {
  const icon = isFeatured ? <BsStarFill /> : <BsStar />;

  const initialState = { message: "" };
  const markProductAsFeatured = markProductAsFeaturedAction.bind(
    null,
    productId,
  );
  const [state, dispatch] = useFormState(markProductAsFeatured, initialState);

  return (
    <form action={dispatch}>
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
