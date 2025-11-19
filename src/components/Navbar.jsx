import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Products", href: "#products" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 shadow-lg"
        >
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#home" className="inline-flex items-center gap-3">
              <div className="relative">
                <span className="absolute inset-0 rounded-xl bg-emerald-500/30 blur-md" />
                <span className="relative grid place-items-center h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white font-bold">A</span>
              </div>
              <div className="leading-tight">
                <div className="text-white text-lg font-semibold tracking-tight">AGM Energy</div>
                <div className="text-emerald-300/80 text-xs">Clean • Efficient • Reliable</div>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item, i) => (
                <motion.a key={item.href} href={item.href} whileHover={{ y: -2 }} className="text-slate-300 hover:text-white transition-colors text-sm">
                  {item.label}
                </motion.a>
              ))}
              <motion.a href="#contact" whileHover={{ y: -2, boxShadow: "0 10px 30px rgba(16,185,129,0.25)" }} className="inline-flex items-center gap-2 rounded-full bg-emerald-500 text-white px-4 py-2 text-sm font-medium shadow hover:bg-emerald-400 transition-colors">
                <Phone className="h-4 w-4" /> Get a quote
              </motion.a>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2 rounded-lg hover:bg-white/10">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {open && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} className="md:hidden border-t border-white/10 px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="block rounded-lg px-3 py-2 text-slate-200 hover:bg-white/5">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="block rounded-lg px-3 py-2 bg-emerald-500 text-center text-white">Get a quote</a>
            </motion.div>
          )}
        </motion.div>
      </div>
    </header>
  );
}
