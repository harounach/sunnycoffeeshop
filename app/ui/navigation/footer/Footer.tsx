import Link from "next/link";
import { BsFillGeoAltFill, BsFillTelephoneFill } from "react-icons/bs";
import Logo from "@/app/ui/navigation/logo/Logo";
import Address from "@/app/ui/section/Address";
import Phone from "@/app/ui/section/Phone";
import Social from "./Social";

export default function Footer() {
  return (
    <footer className="footer">
      <section className="footer__section">
        <div className="container">
          <div className="footer__content">
            {/*Logo & Address*/}
            <div className="footer__business">
              <Logo customClasses="footer__logo" />
              <a
                href="https://www.google.com/maps"
                className="footer__location body-base"
              >
                <BsFillGeoAltFill />
                <Address />
              </a>
              <a href="#" className="footer__tel body-base">
                <BsFillTelephoneFill />
                <Phone />
              </a>
            </div>

            {/*Links*/}
            <div className="footer__lists">
              {/*Left Links*/}
              <div>
                <h3 className="footer__header title-medium">Company</h3>
                <ul className="footer__links">
                  <li>
                    <Link className="footer__link body-base" href="#">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link className="footer__link body-base" href="#">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link className="footer__link body-base" href="#">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link className="footer__link body-base" href="#">
                      Privacy policy
                    </Link>
                  </li>
                  <li>
                    <Link className="footer__link body-base" href="#">
                      Terms of service
                    </Link>
                  </li>
                </ul>
              </div>

              {/*Right Links*/}
              <div>
                <h3 className="footer__header title-medium">Customer</h3>
                <ul className="footer__links">
                  <li>
                    <Link className="footer__link body-base" href="#">
                      Your data
                    </Link>
                  </li>
                  <li>
                    <Link className="footer__link body-base" href="#">
                      Your safety
                    </Link>
                  </li>
                  <li>
                    <Link className="footer__link body-base" href="#">
                      Support
                    </Link>
                  </li>
                  <li>
                    <Link className="footer__link body-base" href="#">
                      Gift cards
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/*Social media*/}
            <div>
              <Social customClasses="footer__social" />
            </div>
          </div>
        </div>
      </section>

      <div className="footer__notice">
        <p className="body-base">
          ©{" "}
          <a href="https://harounach.github.io/" target="_blank">
            Haroun Achouche
          </a>{" "}
          2024, All right reserved.
        </p>
      </div>
    </footer>
  );
}
