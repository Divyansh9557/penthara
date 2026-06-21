import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import toast from "react-hot-toast";

const EmployeeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const isEditMode = Boolean(id);

  const {
    register,
    handleSubmit,
    control,
    reset,
  } = useForm({
    defaultValues: {
      fullname: "",
      role: "",
      department: "",
      email: "",
    },
  });

  const { data: employee, isLoading } = useQuery({
    queryKey: ["employee", id],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/employee/user/${id}`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch employee");
      }

      return res.json();
    },
    enabled: isEditMode,
  });


  useEffect(() => {
    if (employee) {
      reset({
        fullname: employee.fullname || "",
        role: employee.role || "",
        department: employee.department || "",
        email: employee.email || "",
      });
    }
  }, [employee, reset]);

  const { mutate: createEmployee, isPending: isCreating } =
    useMutation({
      mutationFn: async (formData) => {
        const res = await fetch(
          "http://localhost:5000/employee/create",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (!res.ok) {
          throw new Error("Failed to create employee");
        }

        return res.json();
      },

      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ["employeeData"],
        });
      toast.success("User Created Sucessfully")
        navigate("/employee");
      },
    });


  const { mutate: updateEmployee, isPending: isUpdating } =
    useMutation({
      mutationFn: async (formData) => {
        const res = await fetch(
          `http://localhost:5000/employee/update/${id}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (!res.ok) {
          throw new Error("Failed to update employee");
        }

        return res.json();
      },

      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ["employeeData"],
        });
        toast.success("User Updated Sucessfully")
        navigate("/employee");
      },
    });

  const onSubmit = (formData) => {
    if (isEditMode) {
      updateEmployee(formData);
    } else {
      createEmployee(formData);
    }
  };

  if (isEditMode && isLoading) {
    return <div className="text-white">Loading employee...</div>;
  }

  return (
    <Card
      className="
        bg-zinc-900/70
        border-zinc-800
        rounded-3xl
        shadow-xl
      "
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            
            <div className="space-y-3">
              <Label className="text-white">
                Full Name
              </Label>

              <Input
                placeholder="Divyansh Saini"
                className="
                  bg-zinc-950
                  border-zinc-700
                  h-12
                  rounded-xl
                  text-white
                "
                {...register("fullname",{required:"fullname is required"})}
              />
            </div>

         
            <div className="space-y-3">
              <Label className="text-white">
                Role
              </Label>

              <Controller
                name="role"
                control={control}
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                    required
                  >
                    <SelectTrigger
                      className="
                        bg-zinc-950
                        border-zinc-700
                        h-12
                        rounded-xl
                        text-white
                      "
                    >
                      <SelectValue placeholder="Select Role" />
                    </SelectTrigger>

                    <SelectContent className="bg-zinc-900 text-white">
                      <SelectItem value="software-engineer">
                        Software Engineer
                      </SelectItem>

                      <SelectItem value="frontend-developer">
                        Frontend Developer
                      </SelectItem>

                      <SelectItem value="backend-developer">
                        Backend Developer
                      </SelectItem>

                      <SelectItem value="fullstack-developer">
                        Full Stack Developer
                      </SelectItem>

                      <SelectItem value="ui-ux-designer">
                        UI/UX Designer
                      </SelectItem>

                      <SelectItem value="product-manager">
                        Product Manager
                      </SelectItem>

                      <SelectItem value="project-manager">
                        Project Manager
                      </SelectItem>

                      <SelectItem value="hr-manager">
                        HR Manager
                      </SelectItem>

                      <SelectItem value="marketing-manager">
                        Marketing Manager
                      </SelectItem>

                      <SelectItem value="sales-executive">
                        Sales Executive
                      </SelectItem>

                      <SelectItem value="intern">
                        Intern
                      </SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>

           
            <div className="space-y-3">
              <Label className="text-white">
                Department
              </Label>

              <Input
                placeholder="Engineering"
                className="
                  bg-zinc-950
                  border-zinc-700
                  h-12
                  rounded-xl
                  text-white
                "
                {...register("department",{required:"Department is required"})}
              />
            </div>

            {/* Email */}
            <div className="space-y-3">
              <Label className="text-white">
                Email
              </Label>

              <Input
                type="email"
                placeholder="penthara@company.com"
                className="
                  bg-zinc-950
                  border-zinc-700
                  h-12
                  rounded-xl
                  text-white
                "
                {...register("email",{required:"Email is required"})}
              />
            </div>
          </div>

          <Separator className="my-8 bg-zinc-800" />

          <div className="flex justify-end gap-4">
            <Button
              type="button"
              variant="ghost"
              onClick={() => navigate("/employee")}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              className="
                bg-white
                text-black
                hover:bg-zinc-200
                rounded-xl
                px-8
                h-12
              "
              disabled={isCreating || isUpdating}
            >
              {isEditMode
                ? isUpdating
                  ? "Updating..."
                  : "Update Employee"
                : isCreating
                ? "Adding..."
                : "Add Employee"}
            </Button>
          </div>
        </CardContent>
      </form>
    </Card>
  );
};

export default EmployeeForm;