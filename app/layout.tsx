import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const incoming = await headers();
  const host = incoming.get("x-forwarded-host") ?? incoming.get("host") ?? "localhost:3000";
  const protocol = incoming.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    title: "ИИ Чекап — узнайте свой ИИ Индекс",
    description: "Бесплатная онлайн-диагностика готовности к работе с искусственным интеллектом. 14–20 сентября.",
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: {
      title: "ИИ Чекап — узнайте свой ИИ Индекс",
      description: "20–25 минут, онлайн и бесплатно. Получите ИИ Индекс и рекомендации.",
      images: [{ url: `${origin}/og.png`, width: 1731, height: 909, alt: "ИИ Чекап" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "ИИ Чекап — узнайте свой ИИ Индекс",
      description: "20–25 минут, онлайн и бесплатно.",
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
