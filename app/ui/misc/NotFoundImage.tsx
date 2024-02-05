import classNames from "classnames";
import Image from "next/image";

export default function NotFoundImage({
  customClasses,
}: {
  customClasses?: string;
}) {
  const classes = classNames("not-found-img", customClasses);

  return (
    <Image
      className={classes}
      width={400}
      height={400}
      alt="Not Found"
      src={"/images/404.svg"}
    />
  );
}
