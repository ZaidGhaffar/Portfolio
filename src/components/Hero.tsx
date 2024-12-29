import Showcaseimage from '../assets/profile.png'
export const Hero = () => {
  return (
    <div className="min-h-screen pt-16 overflow-hidden bg-gradient-to-b from-[#4c2889] via-[#2a1d3f] to-[#0d1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight">
            Exactly what
            <br />
            you're looking for
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/70">
            Super Excited to have a conversation with you
            <br />
             Just fill the Contact form and I will get back to you
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button className="px-6 py-3 bg-white rounded-md text-[#1c1c3b] font-semibold hover:bg-white/90">
              Try it now
            </button>
            <button className="px-6 py-3 bg-transparent border border-white/30 rounded-md text-white font-semibold hover:border-white/50">
              fill form
            </button>
          </div>
        </div>

        {/* Showcase Image */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent z-10" />
          <img
            src={Showcaseimage}
            alt="GitHub code search interface"
            className="w-full rounded-t-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  )
}

