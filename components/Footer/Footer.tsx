import { BaseProps } from "@/types/BaseProps";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../../public/images/logo.svg";
import SocialButton from "../Button/SocialButton";

interface FooterProps extends BaseProps {}

const Footer = ({}: FooterProps) => {
  return (
    <footer className="bg-yellow-200 py-8">
      <div className="container mx-auto grid grid-cols-4">
        <div className="">
          <Link className="mb-5 inline-block" href={"/"}>
            <Image src={Logo} width={56} height={56} alt={"Logo"} priority />
          </Link>
          <address className="flex flex-col gap-4">
            <div>Tel: (555) 500 555</div>
            <div>123, street, NYC, NY</div>
          </address>
        </div>
        <div>
          <h3 className="mb-4 text-lg text-yellow-700">Company</h3>
          <ul>
            <li className="mb-2">
              <Link href={"#"}>About</Link>
            </li>
            <li className="mb-2">
              <Link href={"#"}>Blog</Link>
            </li>
            <li className="mb-2">
              <Link href={"#"}>Privacy policy</Link>
            </li>
            <li className="mb-2">
              <Link href={"#"}>Terms of service</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg text-yellow-700">Customer</h3>
          <ul>
            <li className="mb-2">
              <Link href={"#"}>Your data</Link>
            </li>
            <li className="mb-2">
              <Link href={"#"}>Your safety</Link>
            </li>
            <li className="mb-2">
              <Link href={"#"}>Support</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex items-center gap-4">
            <li>
              <SocialButton url="#" icon={faFacebookF} />
            </li>
            <li>
              <SocialButton url="#" icon={faInstagram} />
            </li>
            <li>
              <SocialButton url="#" icon={faTwitter} />
            </li>
            <li>
              <SocialButton url="#" icon={faYoutube} />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
