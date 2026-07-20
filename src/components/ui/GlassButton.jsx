const GlassButton = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const base =
    "px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2";
  const variants = {
    primary:
      "glass text-white hover:bg-primary/20 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(0,229,255,0.15)]",
    clay: "clay text-primary hover:scale-105 active:scale-95",
    neumorph: "neumorph text-white/70 hover:text-white hover:border-white/20",
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
export default GlassButton;
