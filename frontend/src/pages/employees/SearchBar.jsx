
// import { useQueryClient } from "@tanstack/react-query";
import { Search } from "lucide-react";

const SearchBar = ({search,setSearch}) => {
 
  // const queryClient= useQueryClient()

  const handleChange = async(e)=>{
     setSearch(e.target.value)
     
  }

  return (
    <div className="w-full bg-black px-6 py-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 focus-within:border-white/20 transition">
          
          
          <Search className="text-gray-400 w-5 h-5" />

         
          <input
            type="text"
            placeholder="Search by name or department..."
            className="w-full bg-transparent outline-none text-white placeholder-gray-500"
            value={search}
            onChange={handleChange }
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;