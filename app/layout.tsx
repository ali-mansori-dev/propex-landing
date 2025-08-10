import type { Metadata } from "next";
import "./globals.css";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import { ReactNode } from "react";
import NextTopLoader from "nextjs-toploader";
// import Meteor from "@/components/Meteor";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const metadata: Metadata = {
  title: "پراپکس",
  description: "پراپکس شرکت پیشرو در جذب سرمایه و ",
  icons: {
    icon: "https://propex.fund/blog/fa/wp-content/uploads/2025/07/cropped-logo-primary-dark-1-32x32.png",
    shortcut: "https://propex.fund/blog/fa/wp-content/uploads/2025/07/cropped-logo-primary-dark-1-32x32.png",
    apple: "https://propex.fund/blog/fa/wp-content/uploads/2025/07/cropped-logo-primary-dark-1-32x32.png",
  },
};

export function generateStaticParams() {
  return [{ locale: "fa" }, { locale: "en" }];
}

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  // Ensure the locale is supported
  const messages = await getMessages({ locale }).catch(() => notFound());

  return (
    <html lang={locale} dir={"ltr"} className="h-full dark">
      <body className="dakr:bg-[#181818] dark:bg-[#181818]">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <NextTopLoader color="#0DE4D6" />
          <Navbar />
          <main
            dir="rtl"
            className="flex flex-col row-start-2 items-center sm:items-start z-10"
          >
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
