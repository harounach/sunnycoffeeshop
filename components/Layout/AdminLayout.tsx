import Head from "next/head";

import { BaseProps } from "@/types/BaseProps";
import React from "react";
import AdminAppbar from "../Appbar/AdminAppbar";
import Footer from "../Footer/Footer";

interface AdminLayoutProps extends BaseProps {}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div>
      <Head>
        <title>Welcome to SunnyCoffeeShop</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminAppbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default AdminLayout;
