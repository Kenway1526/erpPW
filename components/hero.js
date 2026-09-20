
export default function Hero() {
  return (

    <section className="bg-gradient-to-b from-orange-50 via-white to-white px-4 pt-16 pb-12">
      <div className="mx-auto max-w-4xl text-center">
        
        {/* 1. Insignia superior */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full 
        border border-gray-200 bg-white px-4 py-1.5 text-xs text-gray-600 shadow-sm">

          <span className="h-2 w-2 rounded-full bg-green-500" />

          <span>Portal de Capital Humano &amp; Nómina 2025</span>

          <span className="text-gray-300">|</span>

          <span className="font-semibold text-orange-600">Kore HR Cloud v4.0</span>

        </div>

        {/* 2. Título principal */}
        <h1 className= "text-4xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-6xl">
          El ERP de RRHH{" "}
          <span className="rounded-md bg-yellow-200 px-2">todo-en-uno</span>
          <br className="hidden md:block" /> que conecta personal, nómina e
          incidencias
        </h1>

        {/* 3. Descripción */}
        <p className="mx-auto mt-6 max-w-2xl text-base text-gray-500 md:text-lg">
          Despídete de checadas dispersas en WhatsApp, cálculos manuales en
          Excel y expedientes físicos. Centraliza tu nómina quincenal,
          incidencias biométricas y reportes con IA en un único panel blindado.
        </p>

        {/* 4. Botones */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#consola"
            className="rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-orange-600"
          >
            Abrir Consola de Nómina Q14
          </a>
          <a
            href="#monitor"
            className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
          >
            Ver Monitor de Checadores en Vivo
          </a>
        </div>
      </div>
    </section>
  );
}