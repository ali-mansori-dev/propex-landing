import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// This is the Next.js configuration file for a project that uses next-intl for internationalization.
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.coinpay.finance",
      },
    ],
  },
};

// connect to  next-intl config
const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

export default withNextIntl(nextConfig);
