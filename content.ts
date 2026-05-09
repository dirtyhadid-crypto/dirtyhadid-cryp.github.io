export type BookChapter = {
  title: string;
  page: string;
  summary: string;
  points?: string[];
};

export type Book = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  coverLine: string;
  coverCode: string;
  color: string;
  chapters: BookChapter[];
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Books", href: "/books" },
  { label: "IVF Workflow", href: "/ivf-workflow" }
];

export const books: Book[] = [
  {
    slug: "assist-tech",
    title: "实用人类辅助生殖技术",
    eyebrow: "Core ART Manual",
    description:
      "最核心的一本辅助生殖技术书，覆盖 IVF-ET、ICSI、PGT、FET、实验室技术、并发症、母体与子代安全。",
    coverLine: "IVF / ICSI / PGT / FET",
    coverCode: "ART-01",
    color: "#147BFF",
    chapters: [
      {
        title: "本书定位",
        page: "全书主线",
        summary:
          "这本书最适合用来建立完整试管流程。它从不孕评估、促排、取卵、受精、胚胎培养、移植，一直讲到并发症和随访。",
        points: [
          "先用它搭建试管主线，再回到其他教材补背景。",
          "第 7、9、10、12、15、17 章优先读。",
          "读的时候同时关注临床线和实验室线。"
        ]
      },
      {
        title: "第4章 女性不孕症的评估及治疗策略",
        page: "p110",
        summary:
          "进入试管前必须先判断女性因素，包括输卵管、排卵、子宫内膜、卵巢储备、子宫环境等。重点不是列检查，而是定位为什么需要 ART。",
        points: ["判断是否真的需要 IVF。", "识别需要先处理再进周的问题。"]
      },
      {
        title: "第6章 男性不育症的评估及治疗策略",
        page: "p163",
        summary:
          "男方因素会直接影响常规 IVF 还是 ICSI 的选择。精液检查、取精方式和受精障碍风险，是进入实验室流程前要明确的关键变量。"
      },
      {
        title: "第7章 卵巢刺激",
        page: "p198",
        summary:
          "试管真正开周期的起点。促排的目标不是越多越好，而是在安全范围内获得足够、同步、可用的卵母细胞。",
        points: ["先看卵巢储备，再谈促排方案。", "周期监测决定触发和取卵时机。"]
      },
      {
        title: "第9章 体外受精-胚胎移植",
        page: "p243",
        summary:
          "全书最核心章节，覆盖 IVF-ET 的适应证、术前准备、促排、取卵、胚胎移植、黄体支持、妊娠确认和随访。"
      },
      {
        title: "第10章 卵胞质内单精子注射技术",
        page: "p273",
        summary:
          "ICSI 是 ART 中的一条受精路径，不是所有试管都默认使用。重点看适应证、实验室条件、操作过程、结果影响因素和安全性。"
      },
      {
        title: "第11章 胚胎植入前遗传学诊断 / 筛查",
        page: "p289",
        summary:
          "PGT 会改变胚胎处理、检测和移植节奏。适合在理解常规 IVF 后再读，重点看适应证和技术边界。"
      },
      {
        title: "第12章 冷冻胚胎移植内膜准备",
        page: "p315",
        summary:
          "FET 的关键是让内膜窗口与胚胎复苏后的发育阶段匹配。自然周期、激素补充周期和降调周期都服务于这个目标。"
      },
      {
        title: "第15章 常用辅助生殖实验室技术规范",
        page: "p403",
        summary:
          "把取卵取精后的实验室环节补完整：配子处理、受精方式选择、胚胎培养、胚胎评价、冷冻复苏和辅助孵化。"
      },
      {
        title: "第17-20章 并发症、母体与子代安全",
        page: "p462 起",
        summary:
          "试管不能只看成功率。OHSS、异位妊娠、多胎、出血感染、母体安全和子代随访都属于完整结局的一部分。"
      }
    ]
  },
  {
    slug: "zh-upper",
    title: "中华妇产科学 上册",
    eyebrow: "Foundation",
    description:
      "上册不直接讲 IVF 操作，更适合补女性生殖基础、妇产科检查、孕前保健、妊娠生理和多胎妊娠背景。",
    coverLine: "Anatomy / Pregnancy / Care",
    coverCode: "ZHO-01",
    color: "#3A8BFF",
    chapters: [
      {
        title: "本册定位",
        page: "上册总览",
        summary:
          "把它当成试管前后医学背景板。前半部分帮助理解卵泡、排卵、内膜和检查逻辑，后半部分帮助理解 IVF 成功后的妊娠管理。"
      },
      {
        title: "第一篇 第一章 女性生殖系统解剖",
        page: "p12",
        summary:
          "理解卵巢、输卵管、子宫和宫颈的空间结构，是理解输卵管因素不孕、取卵路径和胚胎着床环境的基础。"
      },
      {
        title: "第一篇 第二章 女性生理",
        page: "p32",
        summary:
          "卵泡发育、排卵、激素波动和内膜周期，是理解促排卵、触发排卵和移植窗口的基础。"
      },
      {
        title: "第一篇 第六章 妇产科疾病的检查与诊断方法",
        page: "p111",
        summary:
          "帮助把检查项目变成诊断路径。对不孕症来说，重点是知道每项检查要回答什么问题。"
      },
      {
        title: "第二篇 第一章 妊娠生理",
        page: "p248",
        summary:
          "IVF 成功后会进入普通产科管理逻辑。早孕、胎盘形成和母体适应变化，是后续随访的基础。"
      },
      {
        title: "第二篇 第十一章 胎儿异常与多胎妊娠",
        page: "p755",
        summary:
          "辅助生殖更需要关注多胎妊娠。它与单胚胎移植策略、围产风险和孕期监护关系密切。"
      },
      {
        title: "第三篇 孕前保健与孕产期保健",
        page: "p978 起",
        summary:
          "进入 IVF 前后都需要关注基础疾病、营养、体重、生活方式和妊娠风险评估。"
      }
    ]
  },
  {
    slug: "zh-middle",
    title: "中华妇产科学 中册",
    eyebrow: "Clinical Causes",
    description:
      "中册适合补病因学基础，尤其是影响排卵、卵巢反应、促排安全和妊娠结局的妇科内分泌问题。",
    coverLine: "Endocrinology / Causes",
    coverCode: "ZHO-02",
    color: "#0B6BFF",
    chapters: [
      {
        title: "本册定位",
        page: "中册总览",
        summary:
          "中册回答的是为什么难怀、为什么促排反应不同、为什么有些人胚胎和种植结局更复杂。"
      },
      {
        title: "第四篇 第八章 子宫内膜异位症",
        page: "p1430",
        summary:
          "子宫内膜异位症与盆腔环境、输卵管功能、卵巢状态和炎症反应相关，既影响自然受孕，也影响 IVF 前策略。"
      },
      {
        title: "第六篇 第三章 闭经",
        page: "p1883",
        summary:
          "闭经提示生殖轴某处可能异常。它能帮助理解无排卵、激素异常和低反应背后的机制。"
      },
      {
        title: "第六篇 第四章 高催乳素血症",
        page: "p1933",
        summary:
          "高催乳素会干扰排卵和月经节律，进入周期前需要判断是否先纠正。"
      },
      {
        title: "第六篇 第五章 多囊卵巢综合征",
        page: "p1948",
        summary:
          "PCOS 不只是卵泡多，还涉及代谢、激素、促排反应和 OHSS 风险。适合和卵巢刺激章节一起读。"
      },
      {
        title: "第六篇 第九章 早发性卵巢功能不全",
        page: "p2039",
        summary:
          "帮助理解低储备、反应差和生育力保存的意义，也是判断是否尽早进入 ART 的重要背景。"
      }
    ]
  },
  {
    slug: "zh-lower",
    title: "中华妇产科学 下册",
    eyebrow: "ART Overview",
    description:
      "下册是《中华妇产科学》中与试管最直接相关的一册。第七篇辅助生殖技术可作为权威综述式复盘入口。",
    coverLine: "ART / Ethics / Safety",
    coverCode: "ZHO-03",
    color: "#5CA0FF",
    chapters: [
      {
        title: "本册定位",
        page: "下册总览",
        summary:
          "最重要的是第七篇辅助生殖技术，其次是第八篇里生育力评估、高龄生育和特殊人群再生育指导。"
      },
      {
        title: "第七篇 第一章 不孕症",
        page: "p2120",
        summary:
          "辅助生殖篇的入口，帮助把病因、分类和治疗路径放到同一个不孕症框架里。"
      },
      {
        title: "第二章 辅助生殖临床技术",
        page: "p2157",
        summary:
          "最贴近 IVF 临床流程的一章，适合与《实用人类辅助生殖技术》的第 7、9、10、12 章对照。"
      },
      {
        title: "第三章 辅助生殖实验室技术",
        page: "p2183",
        summary:
          "提醒我们试管结局不只由临床方案决定，实验室环境、培养体系和胚胎评价同样关键。"
      },
      {
        title: "第四章 胚胎植入前遗传学诊断技术",
        page: "p2216",
        summary:
          "从学科角度复盘 PGT 的适应证、技术条件和伦理边界。"
      },
      {
        title: "第五章 辅助生殖技术与多胎妊娠",
        page: "p2225",
        summary:
          "多胎不是成功的放大版，而是风险增加的结局。它与单胚胎移植策略密切相关。"
      },
      {
        title: "第六章 并发症及安全性",
        page: "p2233",
        summary:
          "适合用来高层复盘 OHSS、异位妊娠、多胎和取卵相关风险。"
      },
      {
        title: "第七至九章 保存、伦理与研究进展",
        page: "p2241 起",
        summary:
          "把辅助生殖从治疗不孕扩展到生育力保存、技术管理、伦理边界和未来研究方向。"
      }
    ]
  }
];

export const workflowSteps = [
  {
    title: "进入周期前评估",
    label: "01",
    summary:
      "先判断是不是真的需要 ART，不孕主要矛盾在哪里，以及这次更适合 IVF、ICSI、PGT 还是 FET。"
  },
  {
    title: "方案分流",
    label: "02",
    summary:
      "常规 IVF、ICSI、PGT、FET 是不同路径，不是同一个流程里的随意选项。"
  },
  {
    title: "促排与监测",
    label: "03",
    summary:
      "目标是在安全前提下获得足够、同步、质量可用的卵母细胞，并把取卵时机卡准。"
  },
  {
    title: "取卵与取精",
    label: "04",
    summary:
      "这是临床和实验室的交接点，后面能不能形成可用胚胎，不只取决于数量。"
  },
  {
    title: "IVF / ICSI",
    label: "05",
    summary:
      "受精方式取决于男方因素、既往受精情况、取精方式和实验室策略。"
  },
  {
    title: "胚胎培养与评价",
    label: "06",
    summary:
      "实验室决定哪些胚胎可移植、可冷冻、可继续培养或需要淘汰。"
  },
  {
    title: "鲜胚或冻胚移植",
    label: "07",
    summary:
      "关键是胚胎和内膜窗口匹配，不是所有周期都适合鲜胚移植。"
  },
  {
    title: "黄体支持与随访",
    label: "08",
    summary:
      "移植后仍需黄体支持、妊娠判定、失败复盘和并发症管理。"
  }
];

export function getBook(slug: string) {
  return books.find((book) => book.slug === slug);
}
