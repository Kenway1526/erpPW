import MetricCard from '@/components/ui/MetricCard';

const proofBadges = [
  { icon: 'sync', text: 'Sincronización biométrica 24/7' },
  { icon: 'verified', text: 'Timbrado fiscal CFDI 4.0' },
  { icon: 'security', text: 'Expedientes certificados NOM-151' },
];

const metricsData = [
  {
    title: 'Empleados Activos',
    icon: 'badge',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-700',
    value: '1,248',
    statusText: '+14 altas en el mes corriente',
    statusColor: 'text-emerald-700',
    statusIcon: 'trending_up',
    footnote: 'Distribuidos en 4 centros de trabajo',
  },
  {
    title: 'Nómina Q14 Proceso',
    icon: 'paid',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-700',
    value: '$4,284,500',
    unit: 'MXN',
    statusText: '98.2% calculada (1,226 listos)',
    statusColor: 'text-amber-800',
    statusIcon: 'fiber_manual_record',
    footnote: '22 finiquitos/altas en revisión',
  },
  {
    title: 'Asistencia Hoy',
    icon: 'fingerprint',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-700',
    value: '98.4%',
    statusText: '12 incidencias pendientes',
    statusColor: 'text-amber-700',
    statusIcon: 'pending_actions',
    footnote: '8 retardos, 4 permisos con goce',
  },
  {
    title: 'Expediente Digital',
    icon: 'folder_managed',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-700',
    value: '1,243',
    statusText: '100% validados con NOM-151',
    statusColor: 'text-emerald-700',
    statusIcon: 'verified_user',
    footnote: '5 contratos por renovar',
  },
];

export default function DashboardPreview() {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs font-medium text-slate-600 mb-12">
        {proofBadges.map((badge, index) => (
          <span
            key={index}
            className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-md border border-slate-200 shadow-sm"
          >
            <span className="material-symbols-outlined text-amber-600 text-sm">
              {badge.icon}
            </span>
            {badge.text}
          </span>
        ))}
      </div>

      <div
        id="tablero"
        className="relative max-w-5xl mx-auto rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden text-left"
      >
      
        <div className="bg-slate-100/90 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
            <div className="ml-2 px-3 py-0.5 rounded-md bg-white border border-slate-200 text-[11px] text-slate-600 font-mono flex items-center gap-1">
              <span className="material-symbols-outlined text-xs text-slate-400">lock</span>
              panel.korehr.cloud/rrhh-control
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-ping" />
              Sincronización Total Activa
            </span>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-50 via-white to-amber-50 px-4 py-2.5 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-1.5 font-bold text-slate-800">
            <span className="material-symbols-outlined text-amber-600 text-base">bolt</span>
            <span>Flujo Automático en Tiempo Real:</span>
          </div>
          <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-[11px] font-medium text-slate-600">
            <span className="bg-white px-2 py-0.5 rounded border border-slate-200 font-semibold text-slate-800">
              1. Checador registra
            </span>
            <span className="text-amber-600">➔</span>
            <span className="bg-white px-2 py-0.5 rounded border border-slate-200 font-semibold text-slate-800">
              2. Incidencia calculada
            </span>
            <span className="text-amber-600">➔</span>
            <span className="bg-white px-2 py-0.5 rounded border border-slate-200 font-semibold text-slate-800">
              3. Nómina procesada
            </span>
            <span className="text-amber-600">➔</span>
            <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded border border-amber-300 font-bold">
              4. Dispersión & Timbrado
            </span>
          </div>
        </div>

        <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-slate-50/50">
          {metricsData.map((item, idx) => (
            <MetricCard key={idx} {...item} />
          ))}
        </div>

        <div className="bg-white border-t border-slate-200 px-4 py-2.5 flex items-center justify-between text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center">
              <span className="material-symbols-outlined text-sm">notifications_active</span>
            </span>
            <span>
              <strong>Última checada:</strong> Planta Norte - Turno Mixto validado por biometría facial. Cálculo quincenal actualizado.
            </span>
          </div>
          <span className="text-[11px] bg-slate-100 text-slate-500 font-mono px-2 py-0.5 rounded">
            Hace 15 seg
          </span>
        </div>
      </div>
    </>
  );
}