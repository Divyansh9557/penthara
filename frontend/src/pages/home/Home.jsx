import { Link } from "react-router";

const Home = () => {
  return (
    <section className="   min-h-screen bg-black flex items-center justify-center px-4 sm:px-6">
      <div className="text-center -translate-y-50 md:translate-y-0 h-50 max-w-4xl w-full">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 mb-6">
          <span className="text-xs sm:text-sm text-gray-300">
            Employee Management
          </span>
        </div>

        <h1
          className="
          text-4xl 
          sm:text-5xl 
          md:text-7xl 
          lg:text-8xl 
          font-bold 
          tracking-tight 
          mb-6 
          bg-linear-to-b 
          from-white 
          to-gray-500 
          bg-clip-text 
          text-transparent
        "
        >
          Employee Diary
        </h1>

        <p
          className="
          text-base 
          sm:text-lg 
          text-gray-400 
          max-w-2xl 
          mx-auto 
          mb-10
          px-2
        "
        >
          This is one place solution for all employee entry and management
        </p>

        <Link
          to="/employee"
          className="
            inline-flex 
            items-center 
            gap-2 
            px-6 
            sm:px-8 
            py-3 
            sm:py-4 
            bg-white 
            text-black 
            font-semibold 
            rounded-lg 
            hover:bg-gray-200 
            transition
          "
        >
          Employee List
          <span>→</span>
        </Link>
      </div>
    </section>
  );
};

export default Home;
