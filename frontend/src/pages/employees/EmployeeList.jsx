import { Loader } from "lucide-react";
import EmployeeCard from "../../components/EmployeeCard";

const EmployeeList = ({ users, isLoading }) => {
  return (
    <div className="bg-black min-h-screen px-6 py-10">
      {isLoading ? (
        <Loader className="text-white h-20 w-20 mx-auto animate-spin " />
      ) : (
        <div className="max-w-7xl mx-auto  grid grid-cols-2 md:grid md:grid-cols-3 gap-6">
          { users?.lenght===0 ? <UserNotFound/>  :users?.map((user, index) => (
            <EmployeeCard user={user} key={user._id} index={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default EmployeeList;



import { SearchX } from "lucide-react";

const UserNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center  py-20 px-6">
      <div className="bg-zinc-900 border border-zinc-800 rounded-full p-5 mb-6">
        <SearchX className="h-12 w-12 text-zinc-400" />
      </div>

      <h2 className="text-2xl font-semibold text-white mb-2">
        User Not Found
      </h2>

      <p className="text-zinc-400 text-center max-w-md">
        We couldn't find any employee matching your search.
        Try searching with a different name, email, role, or department.
      </p>
    </div>
  );
};

 