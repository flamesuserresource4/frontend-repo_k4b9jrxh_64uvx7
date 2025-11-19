export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="relative">
              <span className="absolute inset-0 rounded-xl bg-emerald-500/30 blur-md" />
              <span className="relative grid place-items-center h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white font-bold">A</span>
            </div>
            <p className="text-slate-300">© {new Date().getFullYear()} AGM Energy. All rights reserved.</p>
          </div>
          <div className="text-slate-400 text-sm">ABN • CEC Accredited Installers</div>
        </div>
      </div>
    </footer>
  );
}
