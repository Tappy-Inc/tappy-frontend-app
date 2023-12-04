"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useMutation } from "@tanstack/react-query";
import { api } from "@/utils/api";
import { redirect, useRouter } from "next/navigation";

const LoginSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(1),
});

const SignInForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const { mutateAsync } = useMutation({
    mutationKey: ["signIn"],
    mutationFn: api.auth.login,
    onSuccess: () => {
      return router.push("/");
    },
  });

  return (
    <Form {...form}>
      <form
        className="space-y-5"
        onSubmit={form.handleSubmit(async (data) => {
          await mutateAsync(data);
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
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
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
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
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
