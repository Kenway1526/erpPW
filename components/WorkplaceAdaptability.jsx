import WorkplaceCard from '@/components/ui/WorkplaceCard';

const workplacesData = [
  {
    icon: 'factory',
    title: 'Planta Industrial',
    description:
      'Turnos rolados 24/7, control de descansos, cálculo de prima dominical y bono de productividad por línea.',
    includesText:
      'Checadores de reconocimiento facial industrial y turnos 4x3.',
  },
  {
    icon: 'corporate_fare',
    title: 'Oficinas Corporativas',
    description:
      'Gestión de esquemas híbridos, solicitudes de vacaciones con autoservicio del empleado y organigrama matriz.',
    includesText:
      'Portal de autoservicio web y firma de recibos en smartphone.',
  },
  {
    icon: 'storefront',
    title: 'Sucursales & Retail',
    description:
      'Alta rotación de colaboradores, sustituciones inmediatas de plantilla y cálculo de comisiones integradas.',
    includesText:
      'Marcaje por app geolocalizada y contratos temporales automáticos.',
  },
  {
    icon: 'local_shipping',
    title: 'Cuadrillas & Logística',
    description:
      'Comprobación de viáticos con timbrado, asignación de rutas y registro de jornadas en ruta sin conexión.',
    includesText:
      'Validación offline con subida automática al recuperar red.',
  },
];

export default function WorkplaceAdaptability() {
  return (
    <section className="py-16 bg-neutral-50" id="centros">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera con título y badge de estado */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 text-left">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-2">
              FLEXIBILIDAD MULTI-CENTRO
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Adaptable a todos los centros de trabajo de tu empresa
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-xl">
              Configuraciones diferenciadas de turnos, checadores y políticas de compensación por tipo de unidad organizativa.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex-shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-sm">
              <span className="material-symbols-outlined text-amber-600 text-sm">hub</span>
              Polivalencia de Turnos Activa
            </span>
          </div>
        </div>

        {/* Cuadrícula responsiva de centros */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {workplacesData.map((item, index) => (
            <WorkplaceCard key={index} {...item} />
          ))}
        </div>

      </div>
    </section>
  );
}