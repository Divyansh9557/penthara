import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Mail, Building, Edit, Trash } from "lucide-react";
import toast from "react-hot-toast";
import { Link } from "react-router";

const EmployeeCard = ({ user }) => {
  const first = user.fullname[0]?.toUpperCase();
  const second = user.fullname[1]?.toUpperCase();

  const { _id: id } = user;

  const queryClient = useQueryClient();

  const { mutate: deleteUser } = useMutation({
    mutationFn: async (id) => {
      const res = await fetch("http://localhost:5000/employee/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      return await res.json();
    },

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["employeeData"],
      });

      toast.success("User Deleted Successfully");
    },
  });

  const handleDelete = () => {
    deleteUser(id);
  };

  return (
    <div
      key={id}
      className="
border border-white/10 
rounded-2xl 
p-3 sm:p-5
bg-zinc-900
hover:border-white/20 
transition
w-full
"
    >
      

      <div
        className="
flex 
flex-col-reverse 
sm:flex-row 
sm:items-start 
justify-between 
gap-4
"
      >
       

        <div
          className="
flex 
items-center 
gap-3 
min-w-0
"
        >
          <div
            className="
md:w-12 md:h-12
w-6 h-6
text-sm 
shrink-0
rounded-full 
bg-emerald-400/10 
text-emerald-400 
flex 
items-center 
justify-center 
font-semibold

"
          >
            {first}
            {second}
          </div>

          <div className="min-w-0">
            <h2
              className="
text-white 
font-semibold 
text-base 
sm:text-lg
truncate
"
            >
              {user.fullname}
            </h2>

            <p
              className="
text-gray-400 
md:text-sm
text-[10px]
truncate
"
            >
              {user.role}
            </p>
          </div>
        </div>

       

        <div
          className="
flex 
gap-2
self-end
sm:self-auto
"
        >
          <Link
            to={`/employee/edit/${id}`}
            className="
text-gray-400 
hover:text-white 
p-2 
rounded-lg 
hover:bg-white/10 
transition
"
          >
            <Edit size={20} />
          </Link>

          <button
            onClick={handleDelete}
            className="
text-gray-400 
hover:text-red-400 
p-2 
rounded-lg 
hover:bg-red-500/10 
transition
"
          >
            <Trash size={20} />
          </button>
        </div>
      </div>

     

      <div
        className="
border-t 
border-white/10 
my-4
"
      ></div>

      

      <div
        className="
space-y-3 
text-sm
"
      >
        <div
          className="
flex 
items-center 
gap-2 
text-gray-400
"
        >
          <Building size={16} />

          <span className="truncate">{user.department}</span>
        </div>

        <div
          className="
flex 
items-center 
gap-2 
text-[9px]
sm:text-[13.5px]
text-gray-400
"
        >
          <Mail size={16} />

          <span className="truncate">{user.email}</span>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
