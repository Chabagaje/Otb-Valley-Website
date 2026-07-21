import { motion } from "framer-motion";
import GlassCard from "../components/ui/GlassCard";

const About = () => {
  const values = [
    {
      title: "Security",
      body: "Military-grade protection, verified systems, and exceptional account safety.",
      icon: "🔒",
      accent: "text-primary",
    },
    {
      title: "Speed",
      body: "Fast settlement times and seamless swaps that keep pace with your day.",
      icon: "⚡",
      accent: "text-tertiary",
    },
    {
      title: "Trust",
      body: "Transparent pricing, honest guidance, and support you can rely on.",
      icon: "🤝",
      accent: "text-secondary",
    },
  ];

  return (
    <div className="px-4 pb-20 pt-24 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            About OTBValley
          </p>
          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
            Redefining crypto trading for Nigeria.
          </h1>
          <p className="mt-4 text-lg leading-8 text-white/55">
            We are building a more accessible, safer, and smarter path for
            Nigerians to buy, sell, and swap digital assets with confidence.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <GlassCard variant="glass" className="h-full p-8">
              <h2 className="text-2xl font-semibold text-white">Our story</h2>
              <p className="mt-4 text-base leading-8 text-white/55">
                Founded to solve the friction that many traders experience in
                the market, OTBValley combines local insight with modern
                infrastructure. We deliver instant trades, fair rates, and
                support that feels like a premium experience from the very first
                interaction.
              </p>
              <p className="mt-4 text-base leading-8 text-white/55">
                Whether you are a first-time buyer or a high-volume trader, the
                platform is shaped to feel effortless from start to finish.
              </p>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <GlassCard variant="clay" className="h-full p-8">
              <h2 className="text-2xl font-semibold text-primary">
                Our values
              </h2>
              <div className="mt-6 space-y-4">
                {values.map((value) => (
                  <div
                    key={value.title}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3"
                  >
                    <span className={`text-xl ${value.accent}`}>
                      {value.icon}
                    </span>
                    <div>
                      <h3 className="font-semibold text-white">
                        {value.title}
                      </h3>
                      <p className="mt-1 text-sm leading-7 text-white/55">
                        {value.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
