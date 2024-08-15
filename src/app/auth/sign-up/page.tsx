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
import { passwordSchema } from "@/schemas/phone-number";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
  name: z.string().min(1),
  password: passwordSchema,
});
type SignUpForm = z.infer<typeof formSchema>;

export default function Page() {
  const form = useForm<SignUpForm>({
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<SignUpForm> = (data) => {
    // TODO:
    // mutation.mutate(data, {
    //   onSuccess: (data) => {
    //     form.reset();
    //     router.push(pathname + "?" + createQueryString("hash", data.hash));
    //   },
    // });
  };

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <Form {...form}>
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
              <CardTitle>Create account</CardTitle>
              <CardDescription>
                Enter your credentials to access your EFCC account
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
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
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
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
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input placeholder="************" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  Create account
                </Button>
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="">Already have an account here?</span>
                <Button variant={"link"} size={"none"} asChild>
                  <Link className="ml-1" href="/auth/sign-in">
                    Login
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
      </Form>
    </div>
  );
}
