import type { Metadata } from "next";
import { ClubContent } from "./ClubContent";

export const metadata: Metadata = {
  title: "The Club | Nightlife, DJs & VIP Experience",
  description:
    "Blantyre's ultimate nightlife destination. Experience high-energy dance floors, resident DJs, VIP bottle service, and electric soundscapes at Rendezvous Exclusive Club.",
  alternates: {
    canonical: "/club",
  },
  openGraph: {
    title: "The Club | Nightlife & DJs — Rendezvous Exclusive",
    description:
      "Blantyre's ultimate nightlife destination with top DJs, VIP bottle service, and electric soundscapes.",
    url: "/club",
    images: [
      {
        url: "/ogimage.jpg",
        width: 1200,
        height: 630,
        alt: "Rendezvous Exclusive Club — Blantyre Nightlife",
      },
    ],
  },
};

export default function ClubPage() {
  return <ClubContent />;
}
