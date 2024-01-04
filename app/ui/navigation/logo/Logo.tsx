import Image from "next/image";

interface LogoProps {
  customeClasses?: string;
}

export default function Logo({ customeClasses }: LogoProps) {
  return (
    <a href="/" className={customeClasses}>
      <Image
        src="/images/Logo.svg"
        width={235}
        height={40}
        alt="Sunny Coffee Shop"
      />
    </a>
  );
}
