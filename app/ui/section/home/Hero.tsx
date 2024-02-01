import Image from "next/image";
import LinkButton from "@/app/ui/actionables/buttons/LinkButton";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content">
          <div className="hero__text">
            <h1 className="hero__title display-base">
              Sip into Sunshine: Your Perfect Brew Awaits at Sunny Coffee Shop
            </h1>
            <p className="hero__desc body-base">
              {
                "At Sunny Coffee Shop, We're Brewing More Than Just Coffee—We're Brewing Memories."
              }
            </p>
            <LinkButton url="/products" label="Explore Our Menu" />
          </div>
          <div className="hero__img">
            <Image
              src="/images/coffee-item.jpg"
              width={420}
              height={316}
              alt="Sunny Coffee Shop"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
