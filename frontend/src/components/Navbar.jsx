import { Link } from "react-router";


const Navbar = () => {
  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          
        
          <div className="text-2xl font-bold tracking-wide">
            Employee Diary
          </div>

         
          <div className="flex items-center space-x-8">
            <a href="#" className="hover:text-blue-400 transition">Home</a>
            <Link to={"/about"}  className="hover:text-blue-400 transition" >About</Link>
            <a href="#" className="hover:text-blue-400 transition">Services</a>
            <a href="#" className="hover:text-blue-400 transition">Contact</a>
          </div>

         
          <div>
            <button className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              Login
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;