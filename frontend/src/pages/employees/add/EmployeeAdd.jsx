"use client"

import { ArrowLeft } from "lucide-react"

import {
  Card,
  CardContent,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Link } from "react-router"


export default function EmployeeAdd() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-6">

      <div className="w-full max-w-4xl">

       
        <div className="mb-8">
          <Link to={'/employee'} className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white">
            <ArrowLeft size={16}/>
            Back to directory
          </Link>

          <h1 className="mt-8 text-5xl font-semibold tracking-tight">
            Add a new teammate
          </h1>

          <p className="mt-3 text-zinc-400 text-lg">
            Capture the essentials — you can always edit later.
          </p>
        </div>


      
        <Card className="
          bg-zinc-900/70 
          border-zinc-800 
          rounded-3xl
          shadow-xl
        ">

          <CardContent className="p-10">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">


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
                />
              </div>


              <div className="space-y-3">
                <Label className="text-white">
                  Role
                </Label>

                <Input
                  placeholder="Product Designer"
                  className="
                    bg-zinc-950
                    border-zinc-700
                    h-12
                    rounded-xl
                  "
                />
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
                    rounded-xl
                  "
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
                    h-12
                    rounded-xl
                  "
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
              >
                Add to directory
              </Button>

            </div>


          </CardContent>

        </Card>


      </div>

    </div>
  )
}