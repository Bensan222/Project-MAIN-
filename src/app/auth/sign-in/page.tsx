"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import router from "next/router";
import { passwordSchema } from "@/schemas/phone-number";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from "@/components/ui/form";

const formSchema = z.object({
  email: z.string().email(),
  password: passwordSchema,
});
type LoginForm = z.infer<typeof formSchema>;

export default function Page() {
  const form = useForm<LoginForm>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    // TODO: Implement the login logic
    // For example, you might call an API to authenticate the user
    // mutation.mutate(data, {
    //   onSuccess: (data) => {
    //     form.reset();
    //     router.push("/dashboard"); // Redirect to a dashboard or home page after successful login
    //   },
    // });
  };

  return (
    <Form {...form}>
      <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <form
          className="mx-auto max-w-md space-y-6"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="space-y-2 text-center">
            <img
              src="/efcc-logo.jpg"
              alt="EFCC Logo"
              width={100}
              height={100}
              className="mx-auto rounded"
              style={{ aspectRatio: "100/100", objectFit: "cover" }}
            />
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              EFCC Officials Portal
            </h1>
            <p className="text-muted-foreground">
              Secure access to your EFCC work accounts
            </p>
          </div>
          <Card className="space-y-4">
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Enter your credentials to access your EFCC account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="johndoe@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center justify-between">
                        <FormLabel>Password</FormLabel>
                        <Link
                          href="/forgot-password"
                          className="text-sm font-medium text-primary hover:underline"
                          prefetch={false}
                        >
                          Forgot password?
                        </Link>
                      </div>
                      <FormControl>
                        <Input placeholder="************" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </div>
              <div className="text-sm mt-4 text-muted-foreground">
                <span className="">Don&apos;t have an account here?</span>
                <Button variant={"link"} size={"none"} asChild>
                  <Link className="ml-1" href="/auth/sign-up">
                    Sign up
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
          <div className="text-center text-sm text-muted-foreground">
            <p>
              The Economic and Financial Crimes Commission (EFCC) is
              Nigeria&apos;s premier anti-graft agency, established to
              investigate financial crimes such as advance fee fraud (419),
              money laundering, and cybercrime.
            </p>
          </div>
        </form>
      </div>
    </Form>
  );
}
