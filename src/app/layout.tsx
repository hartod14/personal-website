import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hari Tody",
  description: "Hari Tody Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {children}
    </html>
  );
}
