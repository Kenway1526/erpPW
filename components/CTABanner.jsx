export default function CtaBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-amber-700 via-amber-800 to-yellow-700 text-white relative overflow-hidden">
      {/* Patrón de puntos decorativo */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(#FFFF00_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" 
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-amber-200 border border-white/20 text-xs font-semibold uppercase tracking-wider mb-4">
          Cierre Quincenal Seguro & Sin Estrés
        </span>

        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-4">
          Optimiza y audita la nómina de tu organización hoy
        </h2>

        <p className="text-sm sm:text-base text-amber-100 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
          Más de 1,200 colaboradores gestionados en tiempo real. Sincroniza incidencias biométricas, autoriza horas extras y timbra ante el SAT con certeza absoluta.
        </p>

        {/* Buscador rápido de colaborador / Widget directo */}
        <div className="max-w-lg mx-auto bg-white p-2 rounded-xl shadow-xl flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            placeholder="Ingresa nombre o ID de colaborador..."
            className="flex-1 px-3 py-2 text-xs text-slate-800 border-0 focus:ring-0 focus:outline-none rounded-lg placeholder-slate-400"
          />
          <button
            type="button"
            className="bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs px-5 py-2.5 rounded-lg transition-all flex items-center justify-center gap-1 cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm">search</span>
            Buscar Expediente
          </button>
        </div>

        <p className="mt-4 text-[11px] text-amber-200">
          Certificación de timbrado ilimitado PAC autorizado SAT • Encriptación AES-256
        </p>
      </div>
    </section>
  );
}