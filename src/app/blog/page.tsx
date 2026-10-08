import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { BlogCard } from "@/components/BlogCard";
import { Stagger, StaggerItem } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { POSTS } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Guías técnicas sobre empaquetaduras, juntas, válvulas y accesorios de cañería para Petróleo, Gas, Incendio e Industria Alimenticia.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageHero eyebrow="Blog" title="Guías técnicas para elegir mejor" text="Criterios de selección, normas y buenas prácticas sobre sellado, válvulas y cañería industrial." crumbs={[{ label: "Blog" }]} />
      <section className="bg-ink-950 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((p, i) => (
              <StaggerItem key={p.slug} className="h-full">
                <BlogCard post={p} priority={i < 3} />
              </StaggerItem>
            ))}
          </Stagger>
          <p className="mt-10 text-xs text-slate-400">Fotografías: Unsplash.</p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
