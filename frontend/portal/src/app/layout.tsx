import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ainbox-portal",
  description: "AI In Your Box",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={inter.className}>
        <div
          id="backgound"
          className="absolute inset-0 z-[-10] "
          style={{ position: "fixed", top: 0, left: 0, zIndex: -10 }}
        >
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="a"
                patternUnits="userSpaceOnUse"
                width="15"
                height="15"
                patternTransform="scale(2) rotate(0)"
              >
                <rect
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  fill="hsla(0,0%,100%,1)"
                />
                <path
                  d="M3.25 10h13.5M10 3.25v13.5"
                  strokeLinecap="square"
                  strokeWidth="0.5"
                  stroke="#faf7f3"
                  fill="none"
                />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              transform="translate(0,0)"
              fill="url(#a)"
            />
          </svg>
        </div>
        <div className="w-full h-full">{children}</div>
      </body>
    </html>
  );
}
