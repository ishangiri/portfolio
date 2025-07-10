'use client';
import React, { useEffect, useRef, useState } from 'react'
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {
Form,
FormControl,
FormDescription,
FormField,
FormItem,
FormLabel,
FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from '../ui/button';

const FormComponent = ({onSubmit, isLoading}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);

  const formSchema = z.object({
    name : z.string().min(2, {
      message : "Your name must be 2 characters"
    }),
    email : z.string().email({
      message : "Please provide a valid email address"
    }),
    inquiry: z.string().min(10, {
      message : "Your message should be atleast 10 characters"
    }),
  })

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      inquiry: "",
    },
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger animation every time it becomes visible
        setIsLoaded(entry.isIntersecting)
      },
      {
        threshold: 0.5, 
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const handleFormSubmit = (values) => {
    onSubmit(values);
  };

  return (
    <div ref={containerRef} id='contact' className="min-h-screen flex items-center justify-center overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleFormSubmit)}>
            <div className='flex items-center justify-center flex-col py-20 space-y-8'>
              
              {/* Title - Coming from right */}
              <div className={`transform transition-all duration-1000 ease-out delay-200 ${
                isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}>
                <h3 className='text-3xl sm:text-4xl lg:text-5xl mb-2 font-semibold text-blue-900 dark:text-white bg-clip-text'>
                  Contact your dev
                </h3>
              </div>
              
              {/* Name Field - Coming from right */}
              <div className={`md:max-w-2xl w-full max-w-lg transform transition-all cursor-pointer duration-1000 ease-out delay-400 ${
                isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
              }`}>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              {/* Email Field - Coming from right */}
              <div className={`md:max-w-2xl w-full  transform transition-all cursor-pointer duration-1000 ease-out delay-600 ${
                isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-30 opacity-0'
              }`}>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              {/* Inquiry Field - Coming from right */}
              <div className={`md:max-w-2xl w-full max-w-lg transform transition-all duration-1000 ease-out delay-800 ${
                isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-40 opacity-0'
              }`}>
                <FormField
                  control={form.control}
                  name="inquiry"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Inquiry</FormLabel>
                      <FormControl>
                        <textarea 
                          className={'border-2 rounded-lg md:h-32 h-32 w-full cursor-pointer px-3 py-2'} 
                          placeholder="Your message" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              {/* Submit Button - Coming from right */}
              <div className={`flex items-center justify-center mt-2 transform transition-all duration-1000 ease-out delay-1000 ${
                isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-50 opacity-0'
              }`}>
                <Button className={'md:w-2xl px-8 cursor-pointer py-3 bg-none border-2 text hover:border-black dark:hover:border-white bg-transparent hover:bg-transparent'} type="submit">{isLoading? "Submitting...." : "Submit"}</Button>
                
              </div>
              
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default FormComponent;