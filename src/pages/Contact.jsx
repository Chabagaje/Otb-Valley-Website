import { Mail, Phone, MapPin } from "lucide-react";
import GlassCard from "../components/ui/GlassCard";
import GlassButton from "../components/ui/GlassButton";

const Contact = () => {
  const details = [
    {
      icon: <Mail size={18} />,
      label: "Email",
      value: "support@otbvalley.com",
    },
    { icon: <Phone size={18} />, label: "Phone", value: "+234 800 000 0000" },
    { icon: <MapPin size={18} />, label: "Office", value: "Lagos, Nigeria" },
  ];

  return (
    <div className="px-4 pb-20 pt-24 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Contact us
          </p>
          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
            Speak with our team anytime.
          </h1>
          <p className="mt-4 text-lg leading-8 text-white/55">
            Need help with a trade, a support request, or a business
            partnership? We are here and ready to help.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <GlassCard variant="glass" className="p-8">
            <h2 className="text-2xl font-semibold text-white">Get in touch</h2>
            <p className="mt-3 text-base leading-8 text-white/55">
              Whether you need guidance or want to discuss rates and services,
              our support team is ready to respond quickly.
            </p>
            <div className="mt-6 space-y-4">
              {details.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {item.label}
                    </p>
                    <p className="text-sm text-white/55">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard variant="clay" className="p-8">
            <h2 className="text-2xl font-semibold text-white">
              Send a message
            </h2>
            <div className="mt-6 space-y-4">
              <input
                className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none"
                placeholder="Your name"
              />
              <input
                className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none"
                placeholder="Your email"
              />
              <textarea
                className="min-h-32 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none"
                placeholder="Tell us what you need"
              />
              <GlassButton variant="clay" className="w-full py-3">
                Send Message
              </GlassButton>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default Contact;
