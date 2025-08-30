import React from "react";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const schools = [
	{
		id: 1,
		School: "school name",
		address: "address",
		city: "city",
		image: "image",
	},
	{
		id: 2,
		School: "school name",
		address: "address",
		city: "city",
		image: "image",
	},
	{
		id: 3,
		School: "school name",
		address: "address",
		city: "city",
		image: "image",
	},
	{
		id: 4,
		School: "school name",
		address: "address",
		city: "city",
		image: "image",
	},
	{
		id: 5,
		School: "school name",
		address: "address",
		city: "city",
		image: "image",
	},
	{
		id: 6,
		School: "school name",
		address: "address",
		city: "city",
		image: "image",
	},
];
const Page = () => {
	return (
		<div className="h-full w-full">
			{schools.length ? (
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-4">
					{schools.map((item) => (
						<Card
							key={item.id}
							className="w-full max-w-sm mx-auto pt-0"
						>
							<CardContent className="p-0">
								<div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-80">
									<Image
										className="rounded-t-xl object-cover"
										src={"https://avatars.githubusercontent.com/u/124599?v=4"}
										alt={item.School}
										fill
										sizes="(max-width: 640px) 100vw, 
                       (max-width: 1024px) 50vw, 
                       33vw"
									/>
								</div>
							</CardContent>
							<CardFooter className="flex flex-col items-start space-y-1 px-4">
								<div className="text-lg font-bold text-gray-900">
									{item.School}
								</div>
								<div className="text-base leading-7">
									Address: {item.address}
								</div>
								<div className="text-sm text-gray-500">City: {item.city}</div>
							</CardFooter>
						</Card>
					))}
				</div>
			) : (
				<div className="flex flex-1 items-center justify-center w-full h-full min-h-[200px]">
					<p className="text-muted-foreground text-xl">NO RESULT</p>
				</div>
			)}
		</div>
	);
};

export default Page;
