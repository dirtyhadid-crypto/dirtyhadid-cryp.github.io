"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties } from "react";

const navItems = ["Home", "Why us", "How it works"];
const logos = ["AURORA", "NEXUS", "ORBIT", "VECTOR", "LUCENT"];

const petals = Array.from({ length: 8 }, (_, index) => ({
  angle: index * 45,
  delay: index * 0.18,
  highlight: index === 1 || index === 6,
}));

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function BluneoHeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.72, ease: easeOut },
    },
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020204] text-[#F8FAFC]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#1f6fff]/50 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_38%,rgba(20,123,255,0.14),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.035),transparent_28%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-10">
        <motion.header
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="flex items-center justify-between gap-5"
        >
          <a href="#" className="text-[15px] font-semibold text-white">
            Bluneo.ai
          </a>

          <nav className="hidden items-center gap-9 text-sm font-medium text-[#8A8F98] md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="transition-colors duration-300 hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>

          <motion.a
            href="#"
            whileHover={shouldReduceMotion ? undefined : { scale: 1.04 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            className="rounded-full bg-[#0B6BFF] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_28px_rgba(11,107,255,0.34)] transition-shadow duration-300 hover:shadow-[0_0_42px_rgba(20,123,255,0.62)]"
          >
            Contact
          </motion.a>
        </motion.header>

        <main className="grid flex-1 items-center gap-10 py-14 lg:grid-cols-[0.45fr_0.55fr] lg:gap-0 lg:py-0">
          <div className="max-w-[620px] pt-6 lg:-mt-16">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: shouldReduceMotion ? 0 : 0.12,
                    delayChildren: 0.1,
                  },
                },
              }}
            >
              <motion.div
                variants={fadeUp}
                className="mb-7 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-[#A8B3C5] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl"
              >
                Advanced AI Systems
              </motion.div>

              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.82, ease: easeOut },
                  },
                }}
                className="max-w-[720px] text-5xl font-semibold leading-[0.96] text-[#F8FAFC] sm:text-6xl lg:text-[76px]"
              >
                Design intelligent systems that move, adapt, and scale
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-[510px] text-base font-medium leading-7 text-[#8A8F98] sm:text-lg"
              >
                Build AI experiences that feel fluid, responsive, and deeply
                integrated.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-9">
                <motion.a
                  href="#"
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.04 }}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                  className="inline-flex rounded-full bg-[#0B6BFF] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_34px_rgba(11,107,255,0.42)] transition-shadow duration-300 hover:shadow-[0_0_56px_rgba(20,123,255,0.72)]"
                >
                  Start building
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

          <div className="relative flex min-h-[390px] items-center justify-center lg:min-h-[640px] lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.05, ease: easeOut, delay: 0.28 }}
              whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }}
              className="group relative flex h-[330px] w-[330px] items-center justify-center sm:h-[430px] sm:w-[430px] lg:h-[560px] lg:w-[560px]"
              style={
                {
                  "--petal-width": "clamp(84px, 14vw, 150px)",
                  "--petal-height": "clamp(124px, 19vw, 210px)",
                  "--ring-radius": "clamp(80px, 15vw, 156px)",
                } as CSSProperties
              }
            >
              <motion.div
                animate={
                  shouldReduceMotion
                    ? { y: 0 }
                    : {
                        y: [-10, 10, -10],
                        transition: {
                          duration: 5.8,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }
                }
                className="relative h-full w-full"
              >
                <motion.div
                  initial={false}
                  animate={
                    shouldReduceMotion
                      ? { rotate: 0 }
                      : {
                          rotate: 360,
                          transition: {
                            duration: 10.5,
                            repeat: Infinity,
                            ease: "linear",
                          },
                        }
                  }
                  className="absolute inset-0"
                >
                  {petals.map((petal) => (
                    <div
                      key={petal.angle}
                      className="absolute left-1/2 top-1/2 h-0 w-0"
                      style={{
                        transform: `rotate(${petal.angle}deg) translateY(calc(var(--ring-radius) * -1))`,
                      }}
                    >
                      <div
                        className="absolute left-0 top-0"
                        style={{ transform: "translate(-50%, -50%)" }}
                      >
                        <motion.div
                          animate={
                            shouldReduceMotion
                              ? {
                                  opacity: 0.9,
                                  scale: 1,
                                  filter: "brightness(1)",
                                }
                              : {
                                  opacity: [0.78, 1, 0.84],
                                  scale: [0.985, 1.018, 0.995],
                                  filter: [
                                    "brightness(0.94)",
                                    "brightness(1.2)",
                                    "brightness(1)",
                                  ],
                                  transition: {
                                    duration: 3.9,
                                    repeat: Infinity,
                                    repeatType: "mirror",
                                    ease: "easeInOut",
                                    delay: petal.delay,
                                  },
                                }
                          }
                          className="relative overflow-hidden rounded-full border border-[#8BC4FF]/45 bg-[#147BFF]/25 shadow-[inset_12px_18px_32px_rgba(255,255,255,0.16),inset_-18px_-24px_38px_rgba(0,34,110,0.52),0_0_34px_rgba(20,123,255,0.42)] backdrop-blur-md transition-shadow duration-500 group-hover:shadow-[inset_12px_18px_32px_rgba(255,255,255,0.22),inset_-18px_-24px_40px_rgba(0,34,110,0.56),0_0_58px_rgba(58,139,255,0.68)]"
                          style={{
                            width: "var(--petal-width)",
                            height: "var(--petal-height)",
                            background:
                              "radial-gradient(circle at 34% 16%, rgba(255,255,255,0.78), rgba(255,255,255,0.22) 18%, transparent 32%), linear-gradient(146deg, rgba(255,255,255,0.16), rgba(58,139,255,0.42) 34%, rgba(11,107,255,0.58) 58%, rgba(0,26,86,0.42) 100%)",
                          }}
                        >
                          <motion.span
                            aria-hidden="true"
                            animate={
                              shouldReduceMotion
                                ? { opacity: petal.highlight ? 0.62 : 0.28 }
                                : {
                                    opacity: petal.highlight
                                      ? [0.34, 0.78, 0.42]
                                      : [0.16, 0.36, 0.2],
                                    x: petal.highlight ? [-18, 10, -18] : [-10, 8, -10],
                                    transition: {
                                      duration: petal.highlight ? 4.6 : 5.3,
                                      repeat: Infinity,
                                      ease: "easeInOut",
                                      delay: petal.delay,
                                    },
                                  }
                            }
                            className="absolute left-[16%] top-[8%] h-[52%] w-[28%] rotate-[18deg] rounded-full bg-white blur-[9px]"
                          />
                          <span
                            aria-hidden="true"
                            className="absolute inset-[1px] rounded-full bg-[linear-gradient(92deg,rgba(255,255,255,0.2),transparent_34%,rgba(255,255,255,0.08)_72%,transparent)]"
                          />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </motion.div>

                <div className="absolute left-1/2 top-1/2 h-[22%] w-[22%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-[#03142f]/70 shadow-[inset_0_0_28px_rgba(255,255,255,0.1),0_0_48px_rgba(11,107,255,0.55)] backdrop-blur-xl" />
                <div className="absolute left-1/2 top-1/2 h-[6%] w-[6%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#9DCAFF] shadow-[0_0_32px_rgba(157,202,255,0.82)]" />
              </motion.div>
            </motion.div>
          </div>
        </main>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut, delay: 0.58 }}
          className="grid grid-cols-2 gap-5 border-t border-white/[0.06] py-7 sm:grid-cols-5"
        >
          {logos.map((logo) => (
            <div
              key={logo}
              className="text-center text-xs font-semibold tracking-[0.22em] text-white/35"
            >
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
