const quickPrompts = [
  '¿Cuál es el acumulado de ISR retenido para la Q14?',
  'Simular finiquito por renuncia para Colaborador ID-402',
  'Generar reporte de ausentismo justificado vs. incapacidades IMSS',
];

export default function AIChatbotSection() {
  return (
    <section className="py-16 bg-neutral-900 text-white relative overflow-hidden" id="chatbot">
      {/* Resplandor ámbar decorativo de fondo */}
      <div className="absolute -right-20 top-0 w-96 h-96 bg-amber-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          
          {/* Lado izquierdo: Presentación del Asistente */}
          <div className="w-full lg:w-1/2 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/50 text-amber-300 text-xs font-semibold mb-4">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-ping" />
              <span>Kore AI Assistant • Reportes en Lenguaje Natural</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
              Auditoría y reportes instantáneos sin esperar a sistemas
            </h2>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Pregúntale a Kore AI en español cotidiano para consultar finiquitos proyectados, horas extra no autorizadas, comparativos de nómina o inconsistencias ante el IMSS.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3 bg-neutral-800/80 p-3 rounded-xl border border-neutral-700">
                <span className="material-symbols-outlined text-amber-500 mt-0.5">table_view</span>
                <div>
                  <h4 className="text-xs font-bold text-white">Exportación instantánea en Excel (.xlsx)</h4>
                  <p className="text-[11px] text-slate-400">Descarga tablas listas con fórmulas de percepciones, deducciones e impuestos.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-neutral-800/80 p-3 rounded-xl border border-neutral-700">
                <span className="material-symbols-outlined text-amber-500 mt-0.5">picture_as_pdf</span>
                <div>
                  <h4 className="text-xs font-bold text-white">Generación de carátulas para Dirección en PDF</h4>
                  <p className="text-[11px] text-slate-400">Resúmenes ejecutivos listos para firma y dispersión bancaria.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lado derecho: Consola interactiva Mockup */}
          <div className="w-full lg:w-1/2">
            <div className="bg-neutral-800/90 rounded-2xl border border-neutral-700 p-5 shadow-2xl backdrop-blur-md text-left">
              
              {/* Encabezado del Chat */}
              <div className="flex items-center justify-between pb-3 border-b border-neutral-700 mb-4">
                <div className="flex items-center gap-3">
                  <img
                    alt="Kore AI Assistant"
                    className="w-10 h-10 rounded-full border-2 border-amber-500 shadow-md object-cover"
                    src="https://lh3.googleusercontent.com/aida/AEtjO1U8sIEM3ZIfgn5whO9xydUkP6ouXt3xC5QF2dCvFQeSCqZDYnoVZAej6uOV8pKizfQwaMQh-xNZ4NJB-hXRIsNmjbWMe_KNEl4TmpNxmM_4rQPH6uOsvY-22STOEd_5Ep1ONZLREOX80jylgVN64NetQUFXx5v9JfcdvvQL8AFiPvC2z3CDbbqUv2wW2URDkeTqKMjtB9jdO6HRpc_aBmX0SDUq3bxiP6lS8upYPLL6H8p4zJkMdPC9aVY"
                  />
                  <div>
                    <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                      Kore AI Auditor
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    </h3>
                    <p className="text-[10px] text-amber-400 font-mono">Conectado a la base de nómina Q14</p>
                  </div>
                </div>
                <span className="text-[10px] bg-neutral-700 text-slate-300 font-mono px-2 py-0.5 rounded">
                  v2.4 Live
                </span>
              </div>

              {/* Mensaje de respuesta del asistente */}
              <div className="space-y-3 text-xs mb-4">
                <div className="bg-neutral-700/60 p-3 rounded-xl rounded-tl-none border border-neutral-600 text-slate-200">
                  <p className="font-semibold text-amber-300 mb-1 flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">auto_awesome</span> Consulta procesada:
                  </p>
                  <p className="leading-relaxed">
                    &ldquo;Detecté 3 colaboradores con más de 9 horas extras semanales en Planta Norte que requieren autorización del gerente antes de la dispersión de las 18:00 hrs.&rdquo;
                  </p>
                  <div className="mt-2.5 flex items-center gap-2">
                    <button
                      type="button"
                      className="bg-amber-600 text-white text-[10px] font-bold px-2.5 py-1 rounded hover:bg-amber-700 transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-xs">download</span> Descargar XLSX
                    </button>
                    <button
                      type="button"
                      className="bg-neutral-600 text-slate-200 text-[10px] font-semibold px-2.5 py-1 rounded hover:bg-neutral-500 transition-colors cursor-pointer"
                    >
                      Ver detalle de colaboradores
                    </button>
                  </div>
                </div>
              </div>

              {/* Preguntas frecuentes de 1-clic */}
              <div className="space-y-1.5 mb-4">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Consultas frecuentes de 1-clic:
                </p>
                {quickPrompts.map((prompt, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className="w-full text-left bg-neutral-900/80 hover:bg-neutral-700 p-2 rounded-lg border border-neutral-700 text-[11px] text-slate-300 flex items-center justify-between transition-colors group cursor-pointer"
                  >
                    <span>{prompt}</span>
                    <span className="material-symbols-outlined text-xs text-amber-400 group-hover:translate-x-0.5 transition-transform">
                      arrow_forward
                    </span>
                  </button>
                ))}
              </div>

              {/* Barra de Input Simulada */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Escribe tu consulta para emitir un reporte..."
                  className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 pr-10"
                />
                <button
                  type="button"
                  aria-label="Enviar consulta"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-lg bg-amber-600 text-white flex items-center justify-center hover:bg-amber-500 transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-xs">send</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}