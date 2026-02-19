import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Фонд Алексея Соланова",
  description: "Фонд Алексея Соланова - управление средствами фонда",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
