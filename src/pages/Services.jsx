import { motion } from "framer-motion";
import GlassCard from "../components/ui/GlassCard";
import GlassButton from "../components/ui/GlassButton";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "Buy Crypto",
      desc: "Purchase BTC, USDT, and other top assets instantly with Naira.",
      icon: "💳",
    },
    {
      title: "Sell Crypto",
      desc: "Convert your crypto to Naira instantly with the best rates.",
      icon: "💰",
    },
    {
      title: "Swap Assets",
      desc: "Swap between BTC, USDT, and Gift Cards in one click.",
      icon: "🔄",
    },
    {
      title: "Gift Cards",
      desc: "Trade your Gift Cards (Amazon, Steam, iTunes) for cash instantly.",
      icon: "🎁",
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
            Our services
          </p>
          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
            A complete trading experience in one platform.
          </h1>
          <p className="mt-4 text-lg leading-8 text-white/55">
            From buying and selling to swapping and payouts, everything is built
            to keep your workflow smooth and dependable.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <GlassCard
                variant="glass"
                className="flex h-full flex-col items-start p-8 transition hover:border-primary/20"
              >
                <div className="mb-4 text-5xl">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-base leading-8 text-white/55">
                  {service.desc}
                </p>
                <Link to="/signup" className="mt-6">
                  <GlassButton variant="clay" className="px-4 py-2 text-sm">
                    Get Started
                  </GlassButton>
                </Link>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
