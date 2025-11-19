import { motion } from "framer-motion";
import { ShieldCheck, Wrench, DollarSign } from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    title: "Trusted Installations",
    desc: "CEC‑accredited installs with workmanship warranties and premium support.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Upgrades",
    desc: "System health checks, panel cleaning, and battery/EV upgrades.",
  },
  {
    icon: DollarSign,
    title: "Savings Optimisation",
    desc: "Designs focused on ROI with smart monitoring and tariffs.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">What We Do</h2>
          <p className="mt-3 text-slate-300">Complete energy solutions, end to end.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-900/40 p-6">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-emerald-500/15 text-emerald-300">
                  <s.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{s.title}</h3>
                  <p className="mt-1 text-slate-300/90 text-sm">{s.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
