"use client";

import { m } from "framer-motion";
import { WhatsAppGlyph } from "./WhatsAppGlyph";
import { WA_DEFAULT_MESSAGE, waLink } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <m.a
      href={waLink(WA_DEFAULT_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-[90] sm:bottom-7 sm:right-7"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] motion-safe:animate-wa-ring" aria-hidden="true" />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 motion-safe:animate-wa-wiggle">
        <WhatsAppGlyph className="h-8 w-8" />
      </span>
    </m.a>
  );
}
