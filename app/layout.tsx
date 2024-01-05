import classNames from "classnames";

import "@/app/ui/styles/main.scss";
import { poppins, philosopher } from "@/app/ui/fonts";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  const classes = classNames(poppins.variable, philosopher.variable);
  return (
    <html lang="en">
      <body className={classes}>{children}</body>
    </html>
  );
}
