import { motion, useAnimation } from "framer-motion";
import { Sparkles, Leaf, SunMedium, ChevronDown, Battery, PlugZap } from "lucide-react";
import { useEffect } from "react";

const floating = (delay = 0) => ({
  initial: { y: 0, opacity: 0 },
  animate: {
    y: [0, -12, 0],
    opacity: 1,
    transition: { delay, duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
});

export default function Hero() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: { duration: 18, repeat: Infinity, ease: "linear" },
    });
  }, [controls]);

  return (
    <section id="home" className="relative overflow-hidden pt-32">
      {/* Animated gradient canvas */}
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ backgroundSize: "200% 200%" }}
        animate={controls}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-400/10 via-slate-900 to-slate-950" />
        {/* Energy orbs */}
        <motion.div
          className="absolute -top-10 -left-10 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl"
          animate={{ x: [0, 50, -30, 0], y: [0, -30, 10, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 h-[26rem] w-[26rem] rounded-full bg-teal-400/20 blur-3xl"
          animate={{ x: [0, -40, 30, 0], y: [0, 40, -20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-emerald-300"
            >
              <Sparkles className="h-4 w-4" /> Sustainable Energy Solutions
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white"
            >
              Powering Australia with Smarter Solar & Energy Storage
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-6 text-lg text-slate-300"
            >
              AGM Energy delivers high‑performance solar panels, batteries, and EV solutions tailored to homes and businesses. Cleaner energy, lower bills.
            </motion.p>

            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a
                href="#products"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-xl bg-emerald-500 px-6 py-3 text-white font-semibold shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 transition-colors"
              >
                Explore Products
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ y: -2 }}
                className="rounded-xl border border-white/10 px-6 py-3 text-white/90 hover:bg-white/5 transition-colors"
              >
                Get a Free Quote
              </motion.a>
            </div>

            {/* Floating feature chips */}
            <div className="mt-8 flex items-center gap-6 text-sm text-slate-300/80">
              <motion.div className="flex items-center gap-2" {...floating(0.2)}>
                <SunMedium className="h-4 w-4 text-amber-300" /> Tier‑1 Panels
              </motion.div>
              <motion.div className="flex items-center gap-2" {...floating(0.5)}>
                <Leaf className="h-4 w-4 text-emerald-300" /> Clean & Efficient
              </motion.div>
              <motion.div className="hidden sm:flex items-center gap-2" {...floating(0.8)}>
                <Battery className="h-4 w-4 text-teal-300" /> Smart Storage
              </motion.div>
            </div>

            {/* Scroll cue */}
            <motion.div
              aria-hidden
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              animate={{ y: [0, 6, 0] }}
              transition={{ delay: 1, duration: 2, repeat: Infinity }}
              className="mt-10 inline-flex items-center gap-2 text-slate-400"
            >
              <ChevronDown className="h-5 w-5" /> Scroll
            </motion.div>
          </div>

          {/* Visual mockup with animated highlights */}
          <div className="relative">
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 90, damping: 18 }}
              className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl p-4 shadow-2xl"
            >
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <motion.img
                  src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1600&auto=format&fit=crop"
                  alt="AGM Energy Solar"
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 120, damping: 14 }}
                />
              </div>

              {/* Glowing sweep */}
              <motion.div
                className="pointer-events-none absolute inset-0 rounded-3xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <motion.div
                  className="absolute -inset-20 rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  animate={{ x: ["-20%", "120%"] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>

              {/* Accent orbs */}
              <motion.div
                className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-emerald-400/20 blur-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="pointer-events-none absolute -left-6 -bottom-6 h-24 w-24 rounded-full bg-teal-400/20 blur-2xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 6, delay: 0.8, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Floating icon badges */}
              <motion.div
                className="absolute -left-6 top-10 hidden sm:flex items-center gap-2 rounded-full bg-slate-900/70 backdrop-blur px-3 py-2 border border-white/10"
                {...floating(0.3)}
              >
                <SunMedium className="h-4 w-4 text-amber-300" /> 6.6kW System
              </motion.div>
              <motion.div
                className="absolute -right-6 bottom-10 hidden sm:flex items-center gap-2 rounded-full bg-slate-900/70 backdrop-blur px-3 py-2 border border-white/10"
                {...floating(0.6)}
              >
                <PlugZap className="h-4 w-4 text-emerald-300" /> EV Ready
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
