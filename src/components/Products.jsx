import { motion } from "framer-motion";

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
  return (
    <section id="products" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Featured Products</h2>
          <p className="mt-3 text-slate-300">Carefully curated hardware that performs and lasts.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                <p className="mt-1 text-slate-300/90 text-sm">{p.desc}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
