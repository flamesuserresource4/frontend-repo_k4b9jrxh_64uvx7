import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const backend = import.meta.env.VITE_BACKEND_URL || "";
      const res = await fetch(`${backend}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          phone: e.target.phone.value,
          message: e.target.message.value,
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      e.target.reset();
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Get a Free Quote</h2>
          <p className="mt-3 text-slate-300">Tell us about your home or business and we'll design the best system for you.</p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border border-white/10 bg-slate-900/50 p-6">
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm text-slate-300 mb-1">Name</label>
                  <input name="name" required className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="John Smith" />
                </div>
                <div>
                  <label className="block text-sm text-slate-300 mb-1">Email</label>
                  <input name="email" type="email" required className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="you@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Phone</label>
                <input name="phone" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="04xx xxx xxx" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Message</label>
                <textarea name="message" rows="4" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Tell us a bit about your property..." />
              </div>
              <button disabled={status==="loading"} className="rounded-xl bg-emerald-500 px-6 py-3 text-white font-semibold hover:bg-emerald-400 transition-colors">
                {status === "loading" ? "Sending..." : "Request Quote"}
              </button>
              {status === "success" && <p className="text-emerald-300">Thanks! We’ll be in touch shortly.</p>}
              {status === "error" && <p className="text-red-300">Something went wrong. Please try again.</p>}
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 p-6">
            <div className="space-y-4 text-slate-200">
              <p>We service residential and commercial customers across Australia. Expert advice, premium components, and clean installs.</p>
              <ul className="space-y-2 text-sm">
                <li>• CEC‑accredited installers</li>
                <li>• Premium tier‑1 panels and batteries</li>
                <li>• Monitoring and aftercare</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
