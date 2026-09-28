export default function WorkplaceCard({
  icon,
  title,
  description,
  includesText,
}) {
  return (
    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-amber-400 hover:shadow-md transition-all text-left">
      <div>
        <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center mb-3">
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        <h4 className="font-bold text-slate-900 text-sm mb-1">{title}</h4>
        <p className="text-xs text-slate-500 mb-4 leading-relaxed">{description}</p>
      </div>

      <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 text-[11px] text-slate-600">
        <strong className="text-slate-700">Incluye:</strong> {includesText}
      </div>
    </div>
  );
}