

import EmployeeCard from "../../components/EmployeeCard";



const EmployeeList = ({users}) => {
  return (
    <div className="bg-black min-h-screen px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-6">
        {users?.map((user, index) => (
         <EmployeeCard user={user} index={index}  />
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;