import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Employee } from "@prisma/client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

//Employee Schema
const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First Name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Must be a valid email.",
  }),
  role: z.string().min(5, {
    message: "Role must be at least 5 characters.",
  }),
  teamName: z.string(),
});

interface Props {
  submit: (values: FormData) => void;
  data?: Employee;
  action: "edit" | "add";
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  teamName?: string;
}

function EmployeeForm(props: Props) {
  const { data, submit } = props;

  const [loading, setLoading] = useState<boolean>(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: data?.email ?? "",
      role: data?.role ?? "",
      teamName: data?.teamName ?? "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    let data;
    if (values.teamName.length < 1) {
      data = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        role: values.role,
      };
    } else{
      data = values
    }
    submit(data);
    setLoading(false);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="John" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="johndoe@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <FormControl>
                <Input placeholder="Backend Engineer" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="teamName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Team</FormLabel>
              <FormControl>
                <Input placeholder="Team One" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export default EmployeeForm;
