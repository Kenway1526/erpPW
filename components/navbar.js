import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <Link className="flex items-center gap-2 group" href="#inicio">
            <img
              alt="Kore HR ERP Logo"
              className="h-10 w-10 object-contain rounded-md shadow-sm border border-slate-100"
              src="https://lh3.googleusercontent.com/aida/AEtjO1XAuW6Sln_H_rj_92EzZSu8XKghmiZGc9Mh1tDw3NLtIu68hQpt4UuVQJDQHZtMkIOBfZm3FW3sw7XHs_rFYBz6rCVX7NC_-sx3wDUUum3mbBSGdDUOlN43-1lt6TPN7U0l3QOMaVZBn7PS8anZ5TIpJO5uf_MCUtk13DHgnJMKstj0qCwDXhHq4RZHLdvL2MUYyU0RTPFhXk_SCpqxiQttXUGES2gjT8y3Gy8x2rJ9-cHwMNThJPt7BAY"
            />
            <div className="leading-tight">
              <span className="text-xl font-extrabold tracking-tight text-slate-900 flex items-center">
                Kore<span className="text-amber-600 ml-0.5">HR</span>
                <span className="ml-1.5 px-1.5 py-0.5 bg-amber-100 text-amber-900 text-[10px] font-bold uppercase rounded border border-amber-300">
                  ERP
                </span>
              </span>
              <span className="text-[10px] text-slate-400 font-medium block">
                Portal Operativo Interno
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 text-sm font-medium text-slate-600">
          <Link className="px-3 py-2 rounded-lg hover:text-amber-700 hover:bg-slate-100 transition-colors" href="#modulos">
            Módulos Operativos
          </Link>
          <Link className="px-3 py-2 rounded-lg hover:text-amber-700 hover:bg-slate-100 transition-colors" href="#tablero">
            Tablero en Vivo
          </Link>
          <Link className="px-3 py-2 rounded-lg hover:text-amber-700 hover:bg-slate-100 transition-colors" href="#centros">
            Centros de Trabajo
          </Link>
          <Link className="px-3 py-2 rounded-lg text-amber-700 font-semibold flex items-center gap-1 hover:bg-amber-50 transition-colors" href="#chatbot">
            Consola IA
          </Link>
          <Link className="px-3 py-2 rounded-lg hover:text-amber-700 hover:bg-slate-100 transition-colors" href="#auditoria">
            Auditoría & NOM-151
          </Link>
        </nav>

        {/* User Profile & Direct Action Button */}
        <div className="flex items-center gap-3">
          {/* Quick Action Trigger */}
          <Link
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold rounded-lg bg-amber-600 text-white shadow hover:bg-amber-700 transition-all"
            href="#tablero"
          >
            + Nueva Incidencia
          </Link>

          {/* Authenticated Profile Capsule */}
          <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
            <div className="text-right hidden xl:block">
              <p className="text-xs font-semibold text-slate-900 leading-tight">Lic. Carolina Méndez</p>
              <p className="text-[10px] text-amber-700 font-medium">Dir. Nómina & RRHH</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs shadow-inner ring-2 ring-amber-500">
              CM
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}