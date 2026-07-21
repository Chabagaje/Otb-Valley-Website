import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <section className="section-padding max-width flex min-h-[70vh] items-center justify-center py-12">
      <div className="glass w-full max-w-md rounded-3xl p-8 shadow-2xl">
        <div className="text-center">
          <span className="inline-block rounded-full border border-indigo-400/30 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.28em] text-indigo-300">
            Create Account
          </span>
          <h1 className="mt-4 text-3xl font-bold text-white">
            Join OTBValley today
          </h1>
          <p className="mt-3 text-sm text-white/60">
            Start trading with premium rates and instant payouts.
          </p>
        </div>

        <form className="mt-8 space-y-4">
          <input className="glass-input" type="text" placeholder="Full name" />
          <input
            className="glass-input"
            type="email"
            placeholder="Email address"
          />
          <input
            className="glass-input"
            type="password"
            placeholder="Create password"
          />
          <button className="glass-button glass-button-primary w-full justify-center">
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-white/60">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="font-semibold text-indigo-300 hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignUp;
