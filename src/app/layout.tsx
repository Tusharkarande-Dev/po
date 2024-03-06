import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "@/components/ThemeProvider";

const ss3 = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tushar Karande",
  description: "Portfolio Website",
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="mt-20 scroll-smooth" suppressHydrationWarning lang="en">
      <body className={ss3.className}>
        <ThemeProvider 
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ToastContainer />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
