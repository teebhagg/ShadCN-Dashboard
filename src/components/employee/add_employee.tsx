import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Employee } from "@prisma/client";
import EmployeeForm from "./employee_form";

interface Props {
  data?: Employee;
}

export function AddEmployee(props: Props) {
  const { data } = props;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="ml-auto hidden h-8 lg:flex">
          {" "}
          <PlusIcon className="mr-2 h-4 w-4" /> Add Employee
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Employee</DialogTitle>
          {/* <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription> */}
        </DialogHeader>
        <EmployeeForm data={data} action="add" submit={addNewEmployee} />
      </DialogContent>
    </Dialog>
  );
}

const addNewEmployee = async (formData: any) => {
  try {
    const res = await fetch("http://localhost:3000/api/employees", {
      method: "POST",
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
