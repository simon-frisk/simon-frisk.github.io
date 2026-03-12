import "./globals.css";

export const metadata = {
  title: "Simon Frisk"
};
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div style={{
          maxWidth: "1500px",
          width: "80%",
          margin: "40px auto"
        }}>
          {children}
        </div>
      </body>
    </html>
  );
}
