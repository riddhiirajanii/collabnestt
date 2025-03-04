// app/layout.tsx
import { NavBar } from "../../components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
