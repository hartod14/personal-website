import type { Metadata } from "next";
import "@/styles/todolist/style.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Slicing Gojek",
};

export default function TodoListLayout({
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
