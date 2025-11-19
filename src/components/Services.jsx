import { motion } from "framer-motion";
import { ShieldCheck, Wrench, DollarSign, Timer, Sparkles } from "lucide-react";

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

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55 } },
};

export default function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white tracking-tight"
          >
            What We Do
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-slate-300"
          >
            Complete energy solutions, end to end.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              variants={item}
              className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-900/40 p-6 overflow-hidden"
            >
              {/* decorative corner glow */}
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-500/15 blur-2xl"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 6, repeat: Infinity }}
              />

              <div className="flex items-start gap-4 relative">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-emerald-500/15 text-emerald-300">
                  <s.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{s.title}</h3>
                  <p className="mt-1 text-slate-300/90 text-sm">{s.desc}</p>
                </div>
              </div>

              {/* subtle underline reveal */}
              <motion.div
                className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
