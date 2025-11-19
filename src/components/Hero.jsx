import { motion } from "framer-motion";
import { Sparkles, Leaf, SunMedium } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32">
      <div className="absolute inset-0 -z-10">
        <div className="pointer-events-none absolute -top-1/2 left-1/2 h-[1200px] w-[1200px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-1/2 left-1/3 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-teal-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-400/10 via-slate-900 to-slate-950" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-emerald-300">
              <Sparkles className="h-4 w-4" /> Sustainable Energy Solutions
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.8 }} className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white">
              Powering Australia with Smarter Solar & Energy Storage
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.8 }} className="mt-6 text-lg text-slate-300">
              AGM Energy delivers high‑performance solar panels, batteries, and EV solutions tailored to homes and businesses. Cleaner energy, lower bills.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.8 }} className="mt-8 flex flex-wrap gap-4">
              <a href="#products" className="rounded-xl bg-emerald-500 px-6 py-3 text-white font-semibold shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 transition-colors">Explore Products</a>
              <a href="#contact" className="rounded-xl border border-white/10 px-6 py-3 text-white/90 hover:bg-white/5 transition-colors">Get a Free Quote</a>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="mt-8 flex items-center gap-6 text-sm text-slate-300/80">
              <div className="flex items-center gap-2"><SunMedium className="h-4 w-4 text-amber-300" /> Tier‑1 Panels</div>
              <div className="flex items-center gap-2"><Leaf className="h-4 w-4 text-emerald-300" /> Clean & Efficient</div>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 80, damping: 20 }} className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl p-4 shadow-2xl">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <img src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1600&auto=format&fit=crop" alt="AGM Energy Solar" className="h-full w-full object-cover" />
              </div>
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-emerald-400/20 blur-2xl" />
              <div className="pointer-events-none absolute -left-6 -bottom-6 h-24 w-24 rounded-full bg-teal-400/20 blur-2xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
