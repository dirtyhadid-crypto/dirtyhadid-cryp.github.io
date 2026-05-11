type BookCoverProps = {
  title: string;
  eyebrow: string;
  coverLine: string;
  coverCode: string;
  color: string;
  small?: boolean;
};

export default function BookCover({
  title,
  eyebrow,
  coverLine,
  coverCode,
  color,
  small = false
}: BookCoverProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_28px_80px_rgba(0,0,0,0.42)] ${
        small ? "min-h-[250px] p-6" : "min-h-[360px] p-8"
      }`}
    >
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background: `radial-gradient(circle at 72% 18%, ${color}88, transparent 34%), linear-gradient(145deg, ${color}22, transparent 45%)`
        }}
      />
      <div className="absolute -right-10 top-8 h-44 w-28 rotate-12 rounded-full border border-white/20 bg-white/10 blur-[1px]" />
      <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-black/50 to-transparent" />
      <div className="relative z-10 flex h-full min-h-[210px] flex-col justify-between">
        <div>
          <div className="text-xs font-extrabold uppercase tracking-[0.24em] text-white/45">
            {eyebrow}
          </div>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white">
            {title}
          </h2>
        </div>
        <div>
          <div className="text-sm font-bold text-white/70">{coverLine}</div>
          <div className="mt-3 text-xs font-extrabold tracking-[0.3em] text-white/35">
            {coverCode}
          </div>
        </div>
      </div>
    </div>
  );
}
