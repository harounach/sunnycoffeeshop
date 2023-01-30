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
          <Link href={"/"}>
            <Image src={Logo} width={56} height={56} alt={"Logo"} priority />
          </Link>
        </div>
        <div>
          <h3 className="text-yellow-700 mb-4 text-lg">Company</h3>
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
          <h3 className="text-yellow-700 mb-4 text-lg">Customer</h3>
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
