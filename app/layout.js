import "./globals.css";

export const metadata = {
  title: "ELBRIT",
  description: "ELBRIT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
