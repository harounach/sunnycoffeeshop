import classNames from "classnames";

import "@/app/ui/styles/main.scss";
import Header from "@/app/ui/navigation/header/Header";
import Footer from "@/app/ui/navigation/footer/Footer";
import { poppins, philosopher } from "@/app/ui/fonts";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const classes = classNames(poppins.variable, philosopher.variable);

  return (
    <html lang="en">
      <body className={classes}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
