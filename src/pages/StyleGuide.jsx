import GlassCard from "../components/ui/GlassCard";
import GlassButton from "../components/ui/GlassButton";
import GlassInput from "../components/ui/GlassInput";

const StyleGuide = () => {
  return (
    <div className="min-h-screen p-10 bg-darkBg">
      <h1 className="text-4xl font-bold text-white mb-2">Design System</h1>
      <p className="text-white/40 mb-10">
        Glassmorphism · Neumorphism · Claymorphism
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <GlassCard variant="glass">
          <h3 className="text-xl font-semibold text-white">Glass</h3>
          <p className="text-white/50 text-sm">
            Frosted blur, standard elegance.
          </p>
        </GlassCard>
        <GlassCard variant="neumorph">
          <h3 className="text-xl font-semibold text-white">Neumorphism</h3>
          <p className="text-white/50 text-sm">Soft, inset, tactile shadows.</p>
        </GlassCard>
        <GlassCard variant="clay">
          <h3 className="text-xl font-semibold text-primary">Claymorphism</h3>
          <p className="text-white/50 text-sm">
            Chubby, bright, playful depth.
          </p>
        </GlassCard>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 mb-12">
        <GlassButton variant="primary">Glass Button</GlassButton>
        <GlassButton variant="clay">Clay CTA</GlassButton>
        <GlassButton variant="neumorph">Neumorph</GlassButton>
      </div>

      {/* Inputs */}
      <div className="max-w-md space-y-4">
        <GlassInput placeholder="Glass/Neumorph Input" />
        <GlassInput placeholder="Email address" type="email" />
      </div>
    </div>
  );
};
export default StyleGuide;
