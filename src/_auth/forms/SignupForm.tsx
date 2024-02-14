import * as z from "zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SignupValidation } from "@/lib/validation";
import { Divide } from "lucide-react";
import Loader from "@/components/shared/Loader";

const SignupForm = () => {
   const isLoading = true;
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  }); 

   return (
      <Form {...form}>
         <div className="sm:w-420 flex-center flex-col">
            <div className="flex flex-row gap-2 items-center">
               <img
                  src="https://cdn.pixabay.com/photo/2016/08/25/07/30/orange-1618917_1280.png "
                  alt="logo"
                  className="w-10 h-10 rounded-l-full object-cover"
               />
               <h1 className="h1-bold">InfinityInflux</h1>
            </div>
            

            <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">
               Create a new account
            </h2>
            <p className="text-light-3 small-medium md:base-regular mt-2">
               To use InfinityInflux, Please enter your details
            </p>

            <form
               
               className="flex flex-col gap-5 w-full mt-4">
               <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel className="shad-form_label">Name</FormLabel>
                        <FormControl>
                           <Input type="text" className="shad-input" {...field} />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel className="shad-form_label">Username</FormLabel>
                        <FormControl>
                           <Input type="text" className="shad-input" {...field} />
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
                        <FormLabel className="shad-form_label">Email</FormLabel>
                        <FormControl>
                           <Input type="email" className="shad-input" {...field} />
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
                        <FormLabel className="shad-form_label">Password</FormLabel>
                        <FormControl>
                           <Input type="password" className="shad-input" {...field} />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <Button type="submit" className="shad-button_primary">
                  {isLoading ? (
                     <div className="flex gap-2 items-center">
                        <Loader/>Loading...
                     </div>
                  ) : "Sign Up"}                  
               </Button>

               <p className="text-small-regular text-light-2 text-center mt-2">
                  Already have an account?
                  <Link
                     to="/sign-in"
                     className="text-primary-500 text-small-semibold ml-1">
                     Log in
                  </Link>
               </p>
            </form>
         </div>
      </Form>
   );
};

export default SignupForm;