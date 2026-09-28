export default function StatCard({
  icon,
  iconBg,
  iconColor,
  stat,
  title,
  description,
}) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:border-amber-500 transition-all text-center group">
      <div
        className={`w-12 h-12 mx-auto rounded-full ${iconBg} ${iconColor} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}
      >
        <span className="material-symbols-outlined text-2xl">{icon}</span>
      </div>
      <div className="text-4xl font-extrabold text-slate-950 mb-1">{stat}</div>
      <h4 className="font-bold text-slate-900 text-sm mb-2">{title}</h4>
      <p className="text-xs text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}