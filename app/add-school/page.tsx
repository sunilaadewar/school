"use client";

import React from "react";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormDescription,
	FormMessage,
	Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
	name: z.string().min(2, {
		message: "School name must be at least 2 characters.",
	}),
	address: z.string().min(2, {
		message: "address must be at least 2 characters.",
	}),
	city: z.string().min(2, {
		message: "city must be at least 2 characters.",
	}),
	state: z.string().min(2, {
		message: "state must be at least 2 characters.",
	}),
	contact: z.string().min(2, {
		message: "Contact must be at least 2 characters.",
	}),
	image: z.string().min(2, {
		message: "image must be at least 2 characters.",
	}),
	email: z.string().min(2, {
		message: "email must be at least 2 characters.",
	}),
});

const Page = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			address: "",
			city: "",
			state: "",
			contact: "",
			image: "",
			email: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}

	return (
		<div className="xl:px-16 p-2">
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="grid grid-cols-1 lg:grid-cols-2 gap-6"
				>
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>School Name</FormLabel>
								<FormControl>
									<Input
										className="p-6"
										placeholder="Enter school name"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="contact"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Contact Number</FormLabel>
								<FormControl>
									<Input
										className="p-6"
										placeholder="Enter contact number"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="address"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Address</FormLabel>
								<FormControl>
									<Input
										className="p-6"
										placeholder="Enter full address"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="city"
						render={({ field }) => (
							<FormItem>
								<FormLabel>City</FormLabel>
								<FormControl>
									<Input
										className="p-6"
										placeholder="Enter city"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="state"
						render={({ field }) => (
							<FormItem>
								<FormLabel>State</FormLabel>
								<FormControl>
									<Input
										className="p-6"
										placeholder="Enter state"
										{...field}
									/>
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
									<Input
										className="p-6"
										type="email"
										placeholder="Enter email"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="image"
						render={({ field }) => (
							<FormItem className="lg:col-span-1">
								<FormLabel>School Image</FormLabel>
								<FormControl>
									<Input
										className="p-6"
										type="text"
										placeholder="Image"
										{...field}
									/>
								</FormControl>
								{/* <FormDescription>
									 school image.
								</FormDescription> */}
								<FormMessage />
							</FormItem>
						)}
					/>

					<div className="lg:col-span-2 flex flex-col lg:flex-row justify-start">
						<Button
							type="submit"
							className="w-full lg:w-auto"
						>
							Submit
						</Button>
					</div>
				</form>
			</Form>
		</div>
	);
};

export default Page;
