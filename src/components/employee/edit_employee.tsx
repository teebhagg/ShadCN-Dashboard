import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import EmployeeForm from "./employee_form"
import { PlusIcon } from "@heroicons/react/24/outline"
import { Employee } from "@prisma/client"

interface Props {
      data?: Employee;
    }

export function EditEmployee(props: Props) {
    const { data } = props
  return (
    <Dialog>
      <DialogTrigger>
        Edit Employee
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update Employee</DialogTitle>
        </DialogHeader>
        <EmployeeForm data={data} action="edit" submit={updateEmployee}/>
      </DialogContent>
    </Dialog>
  )
}

const updateEmployee = async (formData: any) => {
    try {
      const res = await fetch("http://localhost:3000/api/employees", {
        method: "PUT",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        }
      });
      const data = await res.json()
    } catch (error) {
      console.log(error)
    }
  };