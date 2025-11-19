import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const products = [
  {
    title: "Solar Panels",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1600&auto=format&fit=crop",
    desc: "High‑efficiency tier‑1 modules designed for Australian conditions.",
  },
  {
    title: "Battery Storage",
    image: "https://images.unsplash.com/photo-1603190287605-e6ade32fa852?q=80&w=1600&auto=format&fit=crop",
    desc: "Reliable home and commercial energy storage solutions.",
  },
  {
    title: "EV Chargers",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1600&auto=format&fit=crop",
    desc: "Fast, smart charging systems for every EV driver.",
  },
];

export default function Products() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="products" className="relative py-28">
      <motion.div aria-hidden className="pointer-events-none absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-emerald-500/10 to-transparent" style={{ y }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white tracking-tight"
          >
            Featured Products
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-slate-300"
          >
            Carefully curated hardware that performs and lasts.
          </motion.p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30, rotateX: -6 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <motion.img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                <p className="mt-1 text-slate-300/90 text-sm">{p.desc}</p>
              </div>

              {/* Shine on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
              >
                <motion.div
                  className="absolute -inset-20 rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  animate={{ x: ["-30%", "130%"] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>

              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
