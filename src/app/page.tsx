import type { Metadata } from "next";
import { HomeContent } from "./HomeContent";

export const metadata: Metadata = {
  title: "RSVP Exclusive | Premier Bar & Nightclub — Blantyre",
  description:
    "Blantyre's premier bar and nightlife destination. Experience high-energy dance floors, resident DJs, VIP bottle service, fine dining, and handcrafted mixology at RSVP Exclusive.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "RSVP Exclusive | Premier Bar & Nightclub — Blantyre",
    description:
      "Blantyre's premier bar and nightlife destination with top resident DJs, VIP bottle service, fine dining, and artisanal cocktails.",
    url: "/",
    images: [{ url: "/ogimage.jpg", width: 1200, height: 630, alt: "RSVP Exclusive Bar & Nightclub Blantyre" }],
  },
};

export default function Home() {
  return <HomeContent />;
}
