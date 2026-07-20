const GlassInput = ({ className = "", ...props }) => {
  return (
    <input
      className={`w-full bg-white/5 neumorph rounded-xl px-5 py-4 text-white placeholder:text-white/20 outline-none transition-all duration-300 focus:border-primary/50 focus:shadow-[0_0_0_3px_rgba(0,229,255,0.1)] ${className}`}
      {...props}
    />
  );
};
export default GlassInput;
