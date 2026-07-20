const Home = () => {
  return (
    <div className="px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-semibold text-white mb-8">Home</h1>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-xl bg-darkCard text-white shadow-neumorph">
            <h2 className="text-xl font-semibold mb-2">Neumorphism</h2>
            <p className="text-sm text-gray-300">Soft outer glow shadow.</p>
          </div>

          <div className="p-8 rounded-xl bg-darkCard text-white shadow-clay">
            <h2 className="text-xl font-semibold mb-2">Claymorphism</h2>
            <p className="text-sm text-gray-300">Thick lifted border shadow.</p>
          </div>

          <div className="p-8 rounded-xl bg-darkCard text-white shadow-glass">
            <h2 className="text-xl font-semibold mb-2">Glass</h2>
            <p className="text-sm text-gray-300">Subtle inner glass shadow.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
