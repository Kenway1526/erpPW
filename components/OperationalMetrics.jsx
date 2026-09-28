import StatCard from '@/components/ui/StatCard';

const statsData = [
  {
    icon: 'hourglass_empty',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-700',
    stat: '-75%',
    title: 'Tiempo en cálculo y timbrado',
    description:
      'Elimina el reproceso manual de fórmulas Excel y automatiza la dispersión interbancaria en minutos.',
  },
  {
    icon: 'verified',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-700',
    stat: '100%',
    title: 'Precisión en incidencias',
    description:
      'Cero discrepancias entre horas marcadas y montos pagados gracias a la biometría integrada en vivo.',
  },
  {
    icon: 'bolt',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-700',
    stat: '3x',
    title: 'Más rápido en auditorías',
    description:
      'Genera expedientes certificados ante inspecciones laborales de la STPS e IMSS con un solo clic.',
  },
];

export default function OperationalMetrics() {
  return (
    <section className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera de la sección */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-1">
            EFICIENCIA COMPROBADA
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Resultados comprobados para la gerencia de nómina y finanzas
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2">
            Menos tiempo corrigiendo inconsistencias en conciliación, mayor certidumbre jurídica y cierre fiscal a tiempo.
          </p>
        </div>

        {/* Cuadrícula de 3 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {statsData.map((item, index) => (
            <StatCard key={index} {...item} />
          ))}
        </div>

      </div>
    </section>
  );
}