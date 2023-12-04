"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const LoginSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(1),
});

const SignInForm = () => {
  const form = useForm({
    resolver: zodResolver(LoginSchema),
  });

  return (
    <Form {...form}>
      <form
        className="space-y-5"
        onSubmit={form.handleSubmit((data) => {
          console.log(data);
        })}
      >
        <div className="grid w-full items-center gap-4">
          <FormField
            name="username"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <div className="flex flex-col space-y-1.5">
                  <FormLabel>Username</FormLabel>
                  <Input id="username" {...field} />
                </div>
              </FormItem>
            )}
          />
          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <div className="flex flex-col space-y-1.5">
                  <FormLabel>Password</FormLabel>
                  <Input id="password" {...field} />
                </div>
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-full text-base" size="lg">
          Login
        </Button>
        <Button type="button" className="w-full" variant="outline">
          Forgot password?
        </Button>
      </form>
    </Form>
  );
};

export default SignInForm;
