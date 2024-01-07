import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  customClasses?: string;
}

export default function Logo({ customClasses }: LogoProps) {
  return (
    <Link href="/" className={customClasses}>
      <Image
        src="/images/Logo.svg"
        width={235}
        height={40}
        alt="Sunny Coffee Shop"
      />
    </Link>
  );
}
