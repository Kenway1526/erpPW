import ModuleCard from '@/components/ui/ModuleCard';

const modulesData = [
  {
    icon: 'groups',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-800',
    title: '1. Empleados y Estructura',
    description:
      'Padrón activo, organigrama interactivo por departamento, control de centros de costos, historiales de puesto y administración masiva de altas y bajas IMSS.',
    featureTag: 'Organigrama en tiempo real',
  },
  {
    icon: 'receipt_long',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-800',
    title: '2. Motor de Nómina',
    description:
      'Cálculo automatizado de nómina ordinaria, finiquitos, aguinaldos y PTU. Generación directa de dispersión bancaria layout y timbrado masivo CFDI 4.0.',
    featureTag: 'Cálculo fiscal ISR e IMSS',
  },
  {
    icon: 'more_time',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-800',
    title: '3. Asistencia en Vivo',
    description:
      'Monitoreo en vivo de checadores biométricos, turnos rotativos, permisos, incapacidades y doble aprobación para horas extra antes del precierre de nómina.',
    featureTag: 'Validación biométrica 24/7',
  },
  {
    icon: 'draw',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-800',
    title: '4. Expediente & NOM-151',
    description:
      'Bóveda cloud con firma electrónica avanzada (e.firma/móvil), OCR para lectura de Constancias de Situación Fiscal y certificación con sello de tiempo NOM-151.',
    featureTag: 'Validez jurídica total',
  },
];

export default function CoreModules() {
  return (
    <section className="py-16 bg-white border-y border-slate-200" id="modulos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera de la sección */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-2">
            ARQUITECTURA DE CAPITAL HUMANO
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            ¿La gestión de talento de tu empresa está dispersa en hojas sueltas?
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Kore HR centraliza cada etapa del colaborador: desde su expediente inicial hasta el cálculo de liquidación y timbrado fiscal ante el SAT.
          </p>
        </div>

        {/* Cuadrícula de tarjetas de módulos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modulesData.map((item, index) => (
            <ModuleCard key={index} {...item} />
          ))}
        </div>

      </div>
    </section>
  );
}