import { Link } from "react-router-dom";
import {
  Apple,
  BadgeCheck,
  Banknote,
  Clock3,
  Crown,
  CreditCard,
  FileCheck2,
  Globe2,
  Lock,
  Play,
  ShieldCheck,
  Zap,
} from "lucide-react";

const stats = [
  { label: "Active Users", value: "50K+" },
  { label: "Traded Monthly", value: "$10M+" },
  { label: "Trades Completed", value: "250K" },
  { label: "Average Rating", value: "4.9★" },
];

const features = [
  {
    title: "Lightning Execution",
    desc: "Every trade is powered by our high-frequency matching engine.",
    icon: <Zap className="h-7 w-7" />,
  },
  {
    title: "Cold Storage",
    desc: "Your assets are stored offline in military-grade facilities.",
    icon: <ShieldCheck className="h-7 w-7" />,
  },
  {
    title: "Global Liquidity",
    desc: "Access deep liquidity pools for the best rates on every pair.",
    icon: <Globe2 className="h-7 w-7" />,
  },
  {
    title: "VIP Service",
    desc: "Dedicated relationship managers for all high-volume traders.",
    icon: <Crown className="h-7 w-7" />,
  },
];

const marketAssets = [
  { name: "Bitcoin", symbol: "BTC", change: "+2.4%", icon: "₿" },
  { name: "Ethereum", symbol: "ETH", change: "+1.8%", icon: "Ξ" },
  { name: "Tether", symbol: "USDT", change: "+0.1%", icon: "₮" },
  { name: "Solana", symbol: "SOL", change: "+4.2%", icon: "◎" },
  { name: "BNB", symbol: "BNB", change: "-0.5%", icon: "◉" },
  { name: "Cardano", symbol: "ADA", change: "+1.2%", icon: "◌" },
];

const livePrices = [
  { label: "BTC", value: "$67,450", change: "+2.4%", color: "text-green-400" },
  { label: "ETH", value: "$3,520", change: "+1.8%", color: "text-green-400" },
  { label: "USDT", value: "₦1,540", change: "+0.1%", color: "text-green-400" },
  { label: "SOL", value: "$185", change: "+4.2%", color: "text-green-400" },
  { label: "BNB", value: "$580", change: "-0.5%", color: "text-rose-400" },
  { label: "ADA", value: "$0.62", change: "+1.2%", color: "text-green-400" },
];

const testimonials = [
  {
    name: "Adewale O.",
    meta: "Lagos • High Volume",
    quote:
      "OTBValley transformed my trading experience. The interface is premium, and payouts hit my bank in less than 2 minutes.",
    initials: "AO",
    color: "from-indigo-500 to-purple-500",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Folake O.",
    meta: "Abuja • Gift Card Seller",
    quote:
      "I've sold over ₦5M worth of gift cards on OTBValley. The rates are unbeatable and I get paid instantly.",
    initials: "FO",
    color: "from-purple-500 to-pink-500",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Chidi C.",
    meta: "Port Harcourt • Trader",
    quote:
      "The depth of liquidity on this platform is incredible. I can execute large orders without moving the market.",
    initials: "CC",
    color: "from-emerald-500 to-teal-500",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
];

const faqs = [
  {
    question: "How fast are transactions processed?",
    answer:
      "Most trades are settled in under 2 seconds. Withdrawals hit your bank in under 2 minutes.",
  },
  {
    question: "What are the trading limits?",
    answer:
      "Limits start from ₦1,000 for new users and scale up to ₦50M+ for verified high-volume traders.",
  },
  {
    question: "Is my money and personal data safe?",
    answer:
      "We use bank-grade encryption, cold storage, and comply with all Nigerian financial regulations.",
  },
  {
    question: "Which gift cards do you accept?",
    answer:
      "Apple, Amazon, Steam, Google Play, Sephora, Nordstrom, and 20+ more. See full list in-app.",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.16),transparent_34%),linear-gradient(135deg,#060816_0%,#07111f_50%,#03060d_100%)]">
      <style>
        {`
          .live-ticker {
            display: flex;
            animation: ticker 30s linear infinite;
          }
          @keyframes ticker {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .float-anim {
            animation: float 6s ease-in-out infinite;
          }
          .float-anim-delay-1 {
            animation: float 6s ease-in-out infinite 1.5s;
          }
          .float-anim-delay-2 {
            animation: float 6s ease-in-out infinite 3s;
          }
          .float-anim-delay-3 {
            animation: float 6s ease-in-out infinite 0.5s;
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
          }
          .card-hover {
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .card-hover:hover {
            transform: translateY(-4px) scale(1.02);
            border-color: rgba(99, 102, 241, 0.4);
            box-shadow: 0 12px 40px rgba(99, 102, 241, 0.08);
          }
          .icon-hover {
            transition: color 0.3s ease;
          }
          .group:hover .icon-hover {
            color: #a78bfa;
          }
          .group:hover .icon-hover-security {
            color: #34d399;
          }
        `}
      </style>
      <main>
        <section
          id="home"
          className="section-padding max-width pt-4 sm:pt-6 lg:pt-4"
        >
          <div className="relative min-h-[620px] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/90 via-indigo-950/70 to-slate-900/80 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:p-8 lg:-translate-y-3 lg:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.18),transparent_38%)]" />
            <div className="relative grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
              <div className="space-y-6 text-center lg:text-left">
                <span className="inline-block rounded-full border border-indigo-400/30 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.28em] text-green-300">
                  🇳🇬 Nigeria's #1 Crypto Hub
                </span>
                <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                  Buy, Sell & Swap Crypto
                  <br />
                  <span className="glow-text">Instantly.</span>
                </h1>
                <p className="max-w-lg text-lg text-white/60">
                  The most reliable platform to trade BTC, USDT and Gift Cards
                  in Nigeria. Enjoy premium rates, automated payouts, and
                  bank-grade security.
                </p>
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:justify-start">
                  <Link
                    to="/signup"
                    className="glass-button glass-button-primary w-full px-6 py-3 text-base sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
                  >
                    Start Trading →
                  </Link>
                  <a
                    href="#features"
                    className="glass-button w-full px-6 py-3 text-base sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
                  >
                    Explore Features
                  </a>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/40 lg:justify-start">
                  <span>✅ Trusted by 50,000+ users</span>
                  <span className="h-6 w-px bg-white/10" />
                  <span>⭐ 4.9/5 rating</span>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-[520px] float-anim">
                <div className="absolute -left-4 top-6 hidden h-24 w-24 rounded-full bg-cyan-400/20 blur-3xl lg:block" />
                <div className="absolute bottom-8 right-0 h-20 w-20 rounded-full bg-fuchsia-500/20 blur-3xl" />
                <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-3 shadow-2xl sm:p-4 lg:rotate-[-2deg]">
                  <img
                    src="https://i.pinimg.com/1200x/71/2f/69/712f695a86d70768dfa6365861ac9ca9.jpg"
                    alt="Confident Black trader reviewing digital assets on a laptop"
                    className="w-full h-auto rounded-[1.25rem]"
                  />
                  <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/10 bg-slate-950/80 p-4 backdrop-blur-xl float-anim-delay-3">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.26em] text-indigo-300">
                          Instant settlement
                        </p>
                        <p className="mt-1 text-base font-semibold text-white">
                          Payouts in minutes
                        </p>
                      </div>
                      <div className="rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-medium text-emerald-300">
                        Live +4.2%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 left-3 rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-xl lg:rotate-[-4deg] float-anim-delay-1">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                    Fast payouts
                  </p>
                  <p className="mt-1 text-lg font-semibold text-white">₦250k</p>
                </div>

                <div className="absolute -right-2 top-4 rounded-2xl border border-white/10 bg-slate-950/70 p-3 backdrop-blur-xl lg:rotate-[4deg] float-anim-delay-2">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                    Live volume
                  </p>
                  <p className="mt-1 text-lg font-semibold text-white">$2.4M</p>
                  <p className="text-sm text-emerald-400">+12.4%</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-width overflow-hidden px-1 py-4 sm:px-0">
          <div className="glass flex items-center gap-3 overflow-hidden rounded-2xl p-3 sm:gap-4">
            <span className="shrink-0 text-sm font-bold text-indigo-400">
              LIVE:
            </span>
            <div className="live-track min-w-0 flex-1 overflow-hidden">
              <div className="live-ticker flex items-center gap-4 whitespace-nowrap text-sm sm:gap-8">
                {[...livePrices, ...livePrices].map((item, index) => (
                  <span
                    key={`${item.label}-${index}`}
                    className="flex items-center gap-2"
                  >
                    <span className="font-semibold text-white/90">
                      {item.label}
                    </span>
                    <span className="text-white/70">{item.value}</span>
                    <span className={item.color}>{item.change}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding max-width">
          <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-2xl p-5 text-center reveal card-hover sm:p-6"
              >
                <div className="stat-number glow-text">{stat.value}</div>
                <p className="text-white/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="features" className="section-padding max-width">
          <div className="mx-auto mb-16 max-w-3xl text-center reveal">
            <span className="inline-block rounded-full border border-indigo-400/30 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.28em] text-indigo-300">
              Quick Startup
            </span>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Start Trading in 3 Steps
            </h2>
            <p className="mt-2 text-white/50">
              No complicated setup. Just sign up and start trading in minutes.
            </p>
          </div>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
            {[
              [
                "Create Account",
                "Sign up in 30 seconds with your email. No paperwork, no KYC delays.",
              ],
              [
                "Choose Your Trade",
                "Pick from crypto, gift cards, or swaps. Set your amount and get instant quotes.",
              ],
              [
                "Get Paid Instantly",
                "Receive your payout in seconds. We support all Nigerian banks for instant transfers.",
              ],
            ].map(([title, text], index) => (
              <div
                key={title}
                className="glass rounded-2xl p-6 text-center reveal card-hover sm:p-8"
              >
                <span className="inline-block text-4xl font-bold text-indigo-400/30">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-white/50">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-padding max-width">
          <div className="section-shell p-6 sm:p-8 lg:p-10">
            <div className="mx-auto mb-12 max-w-3xl text-center reveal">
              <span className="inline-block rounded-full border border-indigo-400/30 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.28em] text-indigo-300">
                Why OTBValley
              </span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                The premium choice for calm, confident trading.
              </h2>
              <p className="mt-2 text-white/50">
                Engineered for speed, security, and the best rates in Nigeria.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`group rounded-2xl p-5 text-center reveal card-hover sm:p-6 ${
                    index === 1 ? "neumorph" : index === 2 ? "clay" : "glass"
                  }`}
                >
                  <div className="mb-3 flex justify-center text-indigo-300 transition-colors duration-300 group-hover:text-purple-400">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-1 text-sm text-white/50">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="giftcard" className="section-padding max-width">
          <div className="section-shell p-6 sm:p-8 lg:p-10">
            <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="reveal">
                <span className="inline-block rounded-full border border-indigo-400/30 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.28em] text-indigo-300">
                  Gift Card Hub
                </span>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                  Convert unused gift cards to Naira instantly.
                </h2>
                <p className="mt-3 text-lg text-white/50">
                  Premium rates for Apple, Steam, AMEX and 20+ more.
                </p>
                <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
                  {[
                    "Apple",
                    "Amazon",
                    "Steam",
                    "Google",
                    "Sephora",
                    "Nordstrom",
                  ].map((brand) => (
                    <span
                      key={brand}
                      className="glass rounded-full px-4 py-2 text-sm"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
                <a
                  href="#cta"
                  className="glass-button glass-button-primary mt-6 inline-block w-full text-center sm:w-auto"
                >
                  Start Selling Gift Cards →
                </a>
              </div>
              <div className="relative reveal overflow-hidden rounded-[1.6rem] border border-white/10">
                <img
                  src="https://i.pinimg.com/1200x/1e/2d/b7/1e2db7eec1cbbb72e664d655a1403420.jpg"
                  alt="Beautiful African lady smiling confidently"
                  className="w-full h-auto rounded-[1.6rem]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-slate-950/80 p-4 backdrop-blur-xl">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-indigo-300">
                    Trusted by real traders
                  </p>
                  <p className="mt-1 text-base font-semibold text-white">
                    Fast cashouts and better rates every day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="market" className="section-padding max-width">
          <div className="mx-auto mb-16 max-w-3xl text-center reveal">
            <span className="inline-block rounded-full border border-indigo-400/30 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.28em] text-indigo-300">
              Market Depth
            </span>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Premium Assets List
            </h2>
            <p className="mt-2 text-white/50">
              Trade verified assets with zero slippage. Our order books are
              updated millisecond-by-millisecond.
            </p>
          </div>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {marketAssets.map((asset, index) => (
              <div
                key={asset.symbol}
                className="glass flex items-center justify-between rounded-2xl p-5 reveal card-hover sm:p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl">
                    {asset.icon}
                  </div>
                  <div>
                    <span className="font-bold">{asset.name}</span>
                    <span className="ml-2 text-sm text-white/40">
                      {asset.symbol}
                    </span>
                  </div>
                </div>
                <span
                  className={`${asset.change.startsWith("-") ? "text-rose-400" : "text-green-400"} text-sm`}
                >
                  {asset.change}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="section-padding max-width">
          <div className="section-shell p-6 sm:p-8 lg:p-10">
            <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="reveal">
                <span className="inline-block rounded-full border border-indigo-400/30 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.28em] text-indigo-300">
                  Security First
                </span>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                  Bank-Grade Protection
                </h2>
                <p className="mt-2 text-white/50">
                  Your assets and data are protected by military-grade
                  encryption and multi-layer authentication.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {["2FA", "Cold storage", "AML ready"].map((item) => (
                    <span
                      key={item}
                      className="glass rounded-full px-4 py-2 text-sm text-white/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative reveal overflow-hidden rounded-[1.6rem] border border-white/10">
                <img
                  src="https://i.pinimg.com/736x/3f/d8/e2/3fd8e217cf681a705cba3fb186cc39e0.jpg"
                  alt="Confident African woman professional in business attire"
                  className="w-full h-80 sm:h-96 object-cover object-top rounded-[1.6rem]"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-slate-950/80 via-slate-900/20 to-transparent" />
              </div>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="group glass rounded-2xl p-6 text-center reveal card-hover">
                <div className="mb-3 flex justify-center text-indigo-300 transition-colors duration-300 group-hover:text-emerald-400">
                  <Lock className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold">2FA & Biometrics</h3>
                <p className="mt-1 text-sm text-white/50">
                  Multi-factor authentication with hardware key support.
                </p>
              </div>
              <div className="group neumorph rounded-2xl p-6 text-center reveal card-hover">
                <div className="mb-3 flex justify-center text-indigo-300 transition-colors duration-300 group-hover:text-emerald-400">
                  <ShieldCheck className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold">Cold Storage</h3>
                <p className="mt-1 text-sm text-white/50">
                  98% of assets held offline in geographically distributed
                  vaults.
                </p>
              </div>
              <div className="group clay rounded-2xl p-6 text-center reveal card-hover">
                <div className="mb-3 flex justify-center text-indigo-300 transition-colors duration-300 group-hover:text-emerald-400">
                  <FileCheck2 className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold">Regulatory Compliance</h3>
                <p className="mt-1 text-sm text-white/50">
                  Fully compliant with Nigerian financial regulations and global
                  AML standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="section-padding max-width">
          <div className="mx-auto mb-16 max-w-3xl text-center reveal">
            <span className="inline-block rounded-full border border-indigo-400/30 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.28em] text-indigo-300">
              Testimonials
            </span>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              What Our Traders Say
            </h2>
            <p className="mt-2 text-white/50">
              Real stories from real people who trust OTBValley.
            </p>
          </div>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="glass rounded-2xl p-5 reveal card-hover sm:p-6"
              >
                <div className="mb-3 flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-white/10"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-xs text-white/40">{testimonial.meta}</p>
                  </div>
                </div>
                <p className="text-sm text-white/70">“{testimonial.quote}”</p>
                <div className="mt-2 text-xs text-indigo-400">⭐ 5.0</div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-padding max-width">
          <div className="mx-auto mb-16 max-w-3xl text-center reveal">
            <span className="inline-block rounded-full border border-indigo-400/30 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.28em] text-indigo-300">
              Insights
            </span>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Latest from Our Blog
            </h2>
            <p className="mt-2 text-white/50">
              Stay ahead with market updates, tips, and announcements.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Bitcoin Hits New ATH: What's Next?",
                date: "June 12, 2026",
                image:
                  "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=900&q=80",
              },
              {
                title: "Top 5 Gift Cards to Sell This Month",
                date: "June 10, 2026",
                image:
                  "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80",
              },
              {
                title: "How We Protect Your Funds 24/7",
                date: "June 8, 2026",
                image:
                  "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80",
              },
            ].map((post) => (
              <div
                key={post.title}
                className="glass overflow-hidden rounded-2xl p-0 transition hover:bg-white/5 reveal card-hover"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-40 w-full object-cover"
                />
                <div className="p-5 sm:p-6">
                  <h3 className="font-semibold">{post.title}</h3>
                  <p className="mt-1 text-sm text-white/40">{post.date}</p>
                  <a
                    href="#"
                    className="mt-2 inline-block text-sm text-indigo-400 hover:underline"
                  >
                    Read →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="faq" className="section-padding max-width">
          <div className="mx-auto mb-16 max-w-3xl text-center reveal">
            <span className="inline-block rounded-full border border-indigo-400/30 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.28em] text-indigo-300">
              Support
            </span>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Got Questions?
            </h2>
            <p className="mt-2 text-white/50">
              Everything you need to know about the most premium exchange in
              Nigeria.
            </p>
          </div>
          <div className="mx-auto max-w-4xl rounded-3xl bg-white/5 p-6 backdrop-blur-sm sm:p-8">
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
              {faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className={`glass rounded-2xl p-5 reveal card-hover sm:p-6 ${
                    index === faqs.length - 1 ? "md:col-span-2" : ""
                  }`}
                >
                  <h3 className="font-semibold">{faq.question}</h3>
                  <p className="mt-1 text-sm text-white/50">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding max-width">
          <div className="glass rounded-3xl p-6 text-center reveal card-hover sm:p-8 md:p-12 lg:p-16">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Trade Anywhere, Anytime
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/50">
              Get the OTBValley mobile app for iOS and Android. Trade on the go.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
              <a
                href="https://apps.apple.com/app/quidax-pro/id6742988930"
                target="_blank"
                rel="noreferrer"
                className="glass-button glass-button-primary w-full px-6 py-3 text-base sm:w-auto sm:px-8 sm:py-4"
              >
                <Apple className="h-5 w-5" />
                <span>Download for iOS</span>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=io.quidax.app"
                target="_blank"
                rel="noreferrer"
                className="glass-button w-full px-6 py-3 text-base sm:w-auto sm:px-8 sm:py-4"
              >
                <Play className="h-5 w-5" />
                <span>Download for Android</span>
              </a>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-8 text-sm text-white/40">
              <span>⭐ 4.9 on App Store</span>
              <span>⭐ 4.8 on Google Play</span>
            </div>
          </div>
        </section>

        <section className="section-padding max-width">
          <div className="mx-auto mb-16 max-w-3xl text-center reveal">
            <span className="inline-block rounded-full border border-indigo-400/30 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.28em] text-indigo-300">
              Ecosystem
            </span>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Trusted by Industry Leaders
            </h2>
            <p className="mt-2 text-white/50">
              We partner with the best to deliver a seamless trading experience.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {[
              "Binance",
              "Coinbase",
              "Paystack",
              "Flutterwave",
              "Chainlink",
              "Solana",
            ].map((partner) => (
              <span
                key={partner}
                className="glass rounded-full px-4 py-2 text-sm font-medium sm:px-6 sm:py-3 card-hover"
              >
                {partner}
              </span>
            ))}
          </div>
        </section>

        <section id="cta" className="section-padding max-width">
          <div className="section-shell relative overflow-hidden p-6 text-center reveal sm:p-8 md:p-12 lg:p-16">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/15 via-fuchsia-500/10 to-cyan-500/10" />
            <div className="relative">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                The world of top rates awaits you.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-white/50">
                Join 50,000+ traders experiencing the premium side of crypto.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
                <Link
                  to="/signup"
                  className="glass-button glass-button-primary w-full px-6 py-3 text-base sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
                >
                  Create Account
                </Link>
                <a
                  href="#home"
                  className="glass-button w-full px-6 py-3 text-base sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
                >
                  Download App
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
