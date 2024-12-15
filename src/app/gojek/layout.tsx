import type { Metadata } from "next";
import "@/styles/todolist/style.css";

export const metadata: Metadata = {
  title: "Gojek Slicing",
  description: "Gojek Gopay Gopoint",
};

export default function GojekLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <body>
    <div>
      {children}
    </div>
  </body>;
}
