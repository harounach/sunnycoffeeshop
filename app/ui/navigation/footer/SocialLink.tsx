import classNames from "classnames";

interface SocialLinkProps {
  url: string;
  title: string;
  children: React.ReactNode;
  customClasses?: string;
}

export default function SocialLink({
  url,
  title,
  children,
  customClasses,
}: SocialLinkProps) {
  const classes = classNames("social__link", customClasses);
  return (
    <a href={url} title={title} className={classes}>
      {children}
    </a>
  );
}
