import DashboardWrapper from "@/components/dashboard/DashboardWrapper";
import "../globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

import { Toaster } from "sonner";
import { SessionProvider } from "next-auth/react";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const DashboardLayout = async ({ children }) => {
  return (
    <html>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster position="top-right" expand={false} richColors />
            <DashboardWrapper>{children}</DashboardWrapper>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
};

export default DashboardLayout;
