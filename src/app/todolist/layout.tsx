import type { Metadata } from "next";
import "@/styles/todolist/style.css";

export const metadata: Metadata = {
  title: "To do List",
  description: "To Do List",
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
