import Image from "next/image";
import Button from "@/app/ui/actionables/buttons/Button";

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
              At Sunny Coffee Shop, We&aposre Brewing More Than Just
              Coffee—We&aposre Brewing Memories.
            </p>
            <Button url="/products" label="Explore Our Menu" />
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
