"use client";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Cover } from "@/components/ui/cover";
import { Button } from "@/components/ui/stateful-button";

export function SignupForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
   
  };

  return (
    
    <div className="relative mx-auto w-full max-w-lg rounded-2xl overflow-hidden ">
     
      {/* Form içeriği */}
      <div className="relative z-10 bg-zinc-10 dark:bg-zinc-10   shadow-lg p-8 rounded-2xl">
        <h1 className="text-3xl font-semibold text-black dark:text-black text-center">
         Bizimle İletişim Kurun
        </h1>
        

        <form className="my-8" onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2 ">
            <LabelInputContainer>
              <Label htmlFor="firstname">Ad</Label>
              <Input id="firstname" placeholder="Tyler" type="text" />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Soyad</Label>
              <Input id="lastname" placeholder="Durden" type="text" />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email </Label>
            <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="message">Mesaj</Label>
            <Input id="message" placeholder="Mesajınızı yazın..." type="text" />
          </LabelInputContainer>
       
  
  <Button type="submit">
    Gönder &rarr;
  </Button>


          
        </form>
      </div>
    </div>
  
  );
}



const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};



