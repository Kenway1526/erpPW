export default function MetricCard({
  title,
  icon,
  iconBg,
  iconColor,
  value,
  unit,
  statusText,
  statusColor = "text-emerald-700",
  statusIcon,
  footnote,
}) {
  return (
    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden group hover:border-amber-400 transition-all">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
          {title}
        </span>
        <span className={`w-8 h-8 rounded-lg ${iconBg} ${iconColor} flex items-center justify-center font-bold`}>
          <span className="material-symbols-outlined text-lg">{icon}</span>
        </span>
      </div>

      <div className="text-2xl font-black text-slate-900">
        {value} {unit && <span className="text-xs font-bold text-slate-500">{unit}</span>}
      </div>

      <div className={`mt-2 text-[11px] ${statusColor} flex items-center gap-1 font-semibold`}>
        {statusIcon && <span className="material-symbols-outlined text-xs">{statusIcon}</span>}
        {statusText}
      </div>

      <div className="mt-1 text-[10px] text-slate-400">{footnote}</div>
    </div>
  );
}