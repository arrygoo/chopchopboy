import { notFound } from "next/navigation";
import Link from "next/link";

const validLanguages = ["en", "fa"];

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  if (!validLanguages.includes(params.lang)) {
    notFound();
  }

  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  );
}
