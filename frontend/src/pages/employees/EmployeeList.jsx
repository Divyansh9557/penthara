

import EmployeeCard from "../../components/EmployeeCard";

const users = [
  {
    name: "Ava Chen",
    role: "Product Designer",
    dept: "Design",
    email: "ava@acme.co",
    initials: "AC",
  },
  {
    name: "Marcus Reed",
    role: "Senior Engineer",
    dept: "Engineering",
    email: "marcus@acme.co",
    initials: "MR",
  },
  {
    name: "Priya Patel",
    role: "Engineering Manager",
    dept: "Engineering",
    email: "priya@acme.co",
    initials: "PP",
  },
  {
    name: "Liam O'Brien",
    role: "Sales Lead",
    dept: "Sales",
    email: "liam@acme.co",
    initials: "LO",
  },
  {
    name: "Sofia Garcia",
    role: "People Partner",
    dept: "People",
    email: "sofia@acme.co",
    initials: "SG",
  },
  {
    name: "Noah Kim",
    role: "Data Analyst",
    dept: "Data",
    email: "noah@acme.co",
    initials: "NK",
  },
];

const EmployeeList = () => {
  return (
    <div className="bg-black min-h-screen px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-6">
        {users.map((user, index) => (
         <EmployeeCard user={user} index={index}  />
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;