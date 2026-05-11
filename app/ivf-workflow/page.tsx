import SiteHeader from "@/components/SiteHeader";
import {
  decisionRows,
  ivfKnowledgeIntro,
  ivfKnowledgeSections,
  workflowSteps
} from "@/lib/content";

export default function IvfWorkflowPage() {
  return (
    <main className="min-h-screen bg-[#020204] text-white">
      <SiteHeader />
      <section className="relative overflow-hidden px-5 py-14 sm:px-8 lg:px-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_84%_10%,rgba(20,123,255,0.16),transparent_34%),radial-gradient(circle_at_10%_30%,rgba(58,139,255,0.08),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr]">
            <aside className="lg:sticky lg:top-28 lg:h-fit">
              <div className="rounded-[34px] border border-white/[0.08] bg-white/[0.04] p-6 sm:p-8">
                <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#3A8BFF]">
                  IVF Workflow
                </p>
                <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl">
                  试管流程笔记
                </h1>
                <p className="mt-5 text-sm font-bold leading-7 text-[#8A8F98]">
                  从术前评估、促排、取卵、受精、胚胎培养，到移植、黄体支持和妊娠随访。
                </p>
              </div>

              <div className="mt-6 rounded-[34px] border border-white/[0.08] bg-white/[0.035] p-5">
                <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.24em] text-white/35">
                  Quick Flow
                </p>
                <div className="space-y-3">
                  {workflowSteps.map((step) => (
                    <a
                      key={step.label}
                      href={`#step-${step.label}`}
                      className="flex gap-3 rounded-2xl px-3 py-3 text-sm font-bold text-[#8A8F98] transition-colors duration-300 hover:bg-white/[0.05] hover:text-white"
                    >
                      <span className="text-[#3A8BFF]">{step.label}</span>
                      <span>{step.title}</span>
                    </a>
                  ))}
                </div>
              </div>
            </aside>

            <article>
              <div className="rounded-[34px] border border-white/[0.08] bg-white/[0.04] p-6 sm:p-9">
                <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#3A8BFF]">
                  Professional Notes
                </p>
                <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-5xl">
                  {ivfKnowledgeIntro.title}
                </h2>
                <p className="mt-6 text-sm font-bold leading-7 text-[#A8B3C5]">
                  {ivfKnowledgeIntro.basis}
                </p>
                <p className="mt-4 rounded-3xl border border-[#3A8BFF]/25 bg-[#0B6BFF]/10 p-5 text-sm font-bold leading-7 text-[#C6D7F2]">
                  {ivfKnowledgeIntro.notice}
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {workflowSteps.map((step) => (
                  <section
                    key={step.label}
                    id={`step-${step.label}`}
                    className="scroll-mt-28 rounded-[30px] border border-white/[0.08] bg-white/[0.035] p-6"
                  >
                    <span className="rounded-full bg-[#0B6BFF]/15 px-3 py-1 text-xs font-extrabold text-[#9DCAFF]">
                      {step.label}
                    </span>
                    <h3 className="mt-4 text-xl font-extrabold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm font-bold leading-7 text-[#8A8F98]">
                      {step.summary}
                    </p>
                  </section>
                ))}
              </div>

              <div className="mt-8 space-y-6">
                {ivfKnowledgeSections.map((section) => (
                  <section
                    key={section.title}
                    className="rounded-[34px] border border-white/[0.08] bg-white/[0.035] p-6 sm:p-8"
                  >
                    <h2 className="text-2xl font-extrabold leading-snug text-white">
                      {section.title}
                    </h2>
                    {section.summary && (
                      <p className="mt-3 text-sm font-extrabold leading-7 text-[#3A8BFF]">
                        {section.summary}
                      </p>
                    )}
                    <div className="mt-5 space-y-4">
                      {section.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-[15px] font-bold leading-8 text-[#A8B3C5]"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    {section.bullets && (
                      <div className="mt-5 grid gap-3">
                        {section.bullets.map((bullet) => (
                          <p
                            key={bullet}
                            className="rounded-2xl border border-white/[0.07] bg-black/20 p-4 text-sm font-bold leading-7 text-[#8A8F98]"
                          >
                            {bullet}
                          </p>
                        ))}
                      </div>
                    )}
                  </section>
                ))}
              </div>

              <section className="mt-8 overflow-hidden rounded-[34px] border border-white/[0.08] bg-white/[0.035]">
                <div className="border-b border-white/[0.08] p-6 sm:p-8">
                  <h2 className="text-2xl font-extrabold text-white">
                    十一、关键决策速览
                  </h2>
                  <p className="mt-3 text-sm font-bold leading-7 text-[#8A8F98]">
                    每个环节都对应一个重点判断和一个风险控制目标。
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[760px] border-collapse text-left">
                    <thead className="bg-white/[0.04] text-xs uppercase tracking-[0.2em] text-white/45">
                      <tr>
                        <th className="px-6 py-4 font-extrabold">环节</th>
                        <th className="px-6 py-4 font-extrabold">重点判断</th>
                        <th className="px-6 py-4 font-extrabold">核心风险控制</th>
                      </tr>
                    </thead>
                    <tbody>
                      {decisionRows.map((row) => (
                        <tr key={row.stage} className="border-t border-white/[0.07]">
                          <td className="px-6 py-5 text-sm font-extrabold text-white">
                            {row.stage}
                          </td>
                          <td className="px-6 py-5 text-sm font-bold leading-7 text-[#A8B3C5]">
                            {row.focus}
                          </td>
                          <td className="px-6 py-5 text-sm font-bold leading-7 text-[#8A8F98]">
                            {row.control}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

