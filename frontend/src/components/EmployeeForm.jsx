import {
  Card,
  CardContent,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { useForm } from "react-hook-form"
import {
  Select,
  SelectContent,

  SelectItem,
 
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const EmployeeForm = () => {

    

    const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm()


  const onSubmit = (data)=>{
   console.log(data);
   
  }

  return (
   
        <Card className="
          bg-zinc-900/70 
          border-zinc-800 
          rounded-3xl
          shadow-xl
        ">

     <form onSubmit={handleSubmit(onSubmit)} >
          <CardContent className="p-10">

            <div  className="grid grid-cols-1 md:grid-cols-2 gap-8">


              <div className="space-y-3">
                <Label className="text-white">
                  Full name
                </Label>

                <Input
                  placeholder="Jane Doe"
                  className="
                    bg-zinc-950
                    border-zinc-700
                    h-12
                    rounded-xl
                    text-white
                  "
                
                  {...register("fullname")}
                />
              </div>


              <div className="space-y-3">
                <Label className="text-white">
                  Role
                </Label>

               <Select
  onValueChange={(value) => setValue("role", value)}
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
              </div>



              <div className="space-y-3">
                <Label className="text-white">
                  Department
                </Label>

                <Input
                  placeholder="Design"
                  className="
                    bg-zinc-950
                    border-zinc-700
                    h-12
                    text-white
                    rounded-xl
                  "
                  {...register("department")}
                />
              </div>



              <div className="space-y-3">
                <Label className="text-white">
                  Email
                </Label>

                <Input
                  type="email"
                  placeholder="jane@company.com"
                  className="
                    bg-zinc-950
                    border-zinc-700
                    text-white
                    h-12
                    rounded-xl
                  "
                  {...register("email")}
                />
              </div>


            </div>


            <Separator className="my-8 bg-zinc-800"/>


            <div className="flex justify-end gap-4">

              <Button
                variant="ghost"
                className="
                  text-zinc-300
                  hover:text-white
                "
              >
                Cancel
              </Button>


              <Button
                className="
                  bg-white
                  text-black
                  hover:bg-zinc-200
                  rounded-xl
                  px-8
                  h-12
                "
                type='submit'
              >
                Add
              </Button>

            </div>


          </CardContent>

          </form>

        </Card>
  )
}

export default EmployeeForm