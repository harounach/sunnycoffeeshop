import classNames from "classnames";
import { BsFacebook, BsInstagram, BsTwitterX, BsYoutube } from "react-icons/bs";
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
          <BsFacebook />
        </SocialLink>
      </li>

      {/* Instagram */}
      <li>
        <SocialLink url="https://www.facebook.com/" title="Instagram">
          <BsInstagram />
        </SocialLink>
      </li>

      {/* Twitter */}
      <li>
        <SocialLink url="https://twitter.com/" title="Twitter">
          <BsTwitterX />
        </SocialLink>
      </li>

      {/* YouTube */}
      <li>
        <SocialLink url="https://www.youtube.com/" title="Youtube">
          <BsYoutube />
        </SocialLink>
      </li>
    </ul>
  );
}
