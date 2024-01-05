import classNames from "classnames";
import { Facebook, Twitter, Instagram, Youtube } from "react-bootstrap-icons";
import SocialLink from "./SocialLink";

interface SocialProps {
  customClasses?: string;
}

export default function Social({ customClasses }: SocialProps) {
  const classes = classNames("social", customClasses);
  return (
    <ul className={classes}>
      {/* Facebook */}
      <li>
        <SocialLink url="https://www.facebook.com/" title="Facebook">
          <Facebook />
        </SocialLink>
      </li>

      {/* Instagram */}
      <li>
        <SocialLink url="https://www.facebook.com/" title="Instagram">
          <Instagram />
        </SocialLink>
      </li>

      {/* Twitter */}
      <li>
        <SocialLink url="https://twitter.com/" title="Twitter">
          <Twitter />
        </SocialLink>
      </li>

      {/* YouTube */}
      <li>
        <SocialLink url="https://www.youtube.com/" title="Youtube">
          <Youtube />
        </SocialLink>
      </li>
    </ul>
  );
}
