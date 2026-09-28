import Link from 'next/link';

export default function Fin() {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800" id="auditoria">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-10 border-b border-slate-800">
          {/* Columna de Marca */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <img
                alt="Kore HR ERP Logo"
                className="h-8 w-8 object-contain rounded"
                src=""
              />
              <span className="text-lg font-black text-white tracking-tight">
                Kore<span className="text-brand-500">HR</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Plataforma operativa empresarial en la nube para nómina, checadores biométricos y expedientes laborales NOM-151 con inteligencia artificial integrada.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2 py-1 bg-slate-800 text-slate-300 text-[10px] rounded border border-slate-700 font-medium">
                ISO 27001 Certified
              </span>
              <span className="px-2 py-1 bg-slate-800 text-slate-300 text-[10px] rounded border border-slate-700 font-medium">
                SOC 2 Type II
              </span>
              <span className="px-2 py-1 bg-emerald-950 text-emerald-400 text-[10px] rounded border border-emerald-800 font-medium">
                99.99% Uptime SLA
              </span>
            </div>
          </div>

          {/* Links: Módulos */}
          <div>
            <h5 className="text-white font-bold text-xs uppercase tracking-wider mb-3">Módulos</h5>
            <ul className="space-y-2 text-xs">
              <li><Link className="hover:text-white transition-colors" href="#modulos">Padrón de Empleados</Link></li>
              <li><Link className="hover:text-white transition-colors" href="#modulos">Motor de Nómina Q14</Link></li>
              <li><Link className="hover:text-white transition-colors" href="#modulos">Checador Biométrico</Link></li>
              <li><Link className="hover:text-white transition-colors" href="#modulos">Expediente NOM-151</Link></li>
            </ul>
          </div>

          {/* Links: Centros de Trabajo */}
          <div>
            <h5 className="text-white font-bold text-xs uppercase tracking-wider mb-3">Sedes</h5>
            <ul className="space-y-2 text-xs">
              <li><Link className="hover:text-white transition-colors" href="#centros">Planta Industrial Norte</Link></li>
              <li><Link className="hover:text-white transition-colors" href="#centros">Oficinas Corporativas</Link></li>
              <li><Link className="hover:text-white transition-colors" href="#centros">Red de Retail & Tiendas</Link></li>
              <li><Link className="hover:text-white transition-colors" href="#centros">Logística y Cuadrillas</Link></li>
            </ul>
          </div>

          {/* Links: Seguridad y Cumplimiento */}
          <div>
            <h5 className="text-white font-bold text-xs uppercase tracking-wider mb-3">Seguridad & Cumplimiento</h5>
            <ul className="space-y-2 text-xs">
              <li><Link className="hover:text-white transition-colors" href="#auditoria">Firma Electrónica NOM-151</Link></li>
              <li><Link className="hover:text-white transition-colors" href="#auditoria">Validador CFDI 4.0 SAT</Link></li>
              <li><Link className="hover:text-white transition-colors" href="#auditoria">Aviso de Privacidad Laboral</Link></li>
              <li><Link className="hover:text-white transition-colors" href="#auditoria">Bitácora de Auditoría SHA-256</Link></li>
            </ul>
          </div>
        </div>

        {/* Barra inferior de estado */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <p>© 2025 Kore HR ERP Technologies Inc. Todos los derechos reservados.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="text-slate-400">Servidores Seguros Operando Normalmente</span>
          </div>
        </div>
      </div>
    </footer>
  );
}