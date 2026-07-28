import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://polekhin.github.io/temp";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "ИИ Чекап — узнайте свой ИИ Индекс",
  description:
    "Бесплатная онлайн-диагностика готовности к работе с искусственным интеллектом. 14–20 сентября.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "ИИ Чекап — узнайте свой ИИ Индекс",
    description:
      "20–25 минут, онлайн и бесплатно. Получите ИИ Индекс и рекомендации.",
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1731,
        height: 909,
        alt: "ИИ Чекап",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ИИ Чекап — узнайте свой ИИ Индекс",
    description: "20–25 минут, онлайн и бесплатно.",
    images: [`${siteUrl}/og.png`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
