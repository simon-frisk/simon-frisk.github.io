import "./globals.css";
import { Lora, Manrope } from "next/font/google";

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body"
});

const headingFont = Lora({
  subsets: ["latin"],
  variable: "--font-heading"
});

export const metadata = {
  title: "Simon Frisk"
};
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${headingFont.variable}`}>
        <div className="site-shell">
          {children}
        </div>
      </body>
    </html>
  );
}
