export default function ModuleCard({
  icon,
  iconBg,
  iconColor,
  title,
  description,
  featureTag,
}) {
  return (
    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-amber-500 transition-all flex flex-col justify-between group hover:shadow-lg text-left">
      <div>
        <div
          className={`w-12 h-12 rounded-xl ${iconBg} ${iconColor} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform`}
        >
          <span className="material-symbols-outlined text-2xl">{icon}</span>
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-xs text-slate-600 leading-relaxed mb-4">
          {description}
        </p>
      </div>

      <div className="pt-4 border-t border-slate-200 text-[11px] font-bold text-amber-800 flex items-center gap-1">
        <span>{featureTag}</span>
        <span className="material-symbols-outlined text-xs group-hover:translate-x-1 transition-transform">
          arrow_forward
        </span>
      </div>
    </div>
  );
}