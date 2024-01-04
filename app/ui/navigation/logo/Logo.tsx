import Image from "next/image";

interface LogoProps {
  customClasses?: string;
}

export default function Logo({ customClasses }: LogoProps) {
  return (
    <a href="/" className={customClasses}>
      <Image
        src="/images/Logo.svg"
        width={235}
        height={40}
        alt="Sunny Coffee Shop"
      />
    </a>
  );
}
