const GlassCard = ({ children, className = "", variant = "glass" }) => {
  const variants = {
    glass: "glass",
    neumorph: "neumorph",
    clay: "clay",
  };
  return (
    <div
      className={`${variants[variant]} rounded-[24px] p-6 transition-all duration-300 hover:scale-[1.01] ${className}`}
    >
      {children}
    </div>
  );
};
export default GlassCard;
