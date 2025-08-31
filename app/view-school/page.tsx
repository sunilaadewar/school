"use client";
import React, { useEffect, useState } from "react";
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
import { toast } from "sonner";
import { ChevronRightIcon, Loader2Icon } from "lucide-react";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";

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

type School = {
	id: number;
	name: string;
	address: string;
	city: string;
	state: string;
	contact: string;
	email: string;
	image: string;
};
const Page = () => {
	const [schools, setSchools] = useState<School[]>([]);
	const [loading, setLoading] = useState(true);
	const [pagiLoading, setPagiLoading] = useState(false);
	const [error, setError] = useState(false);
	const [offset, setOffset] = useState(0);
	const [pagiDisabled, setPagiDisabled] = useState(false);

	useEffect(() => {
		async function fetchSchools() {
			try {
				const res = await fetch(`/api/getSchool?offset=${offset}`);
				if (!res.ok) {
					toast.error("Error while fetching school");
					throw new Error();
				}
				const data = await res.json();
				console.log(data);
				setSchools((prev) => [...prev, ...data.data]);
				setPagiDisabled(data.data.length < 10 ? true : false);
			} catch (err) {
				setError(true);
			} finally {
				setLoading(false);
				setPagiLoading(false);
			}
		}

		fetchSchools();
	}, [offset]);

	if (loading)
		return (
			<div className="h-full w-full flex justify-center items-center">
				<Loader2Icon
					width={50}
					height={50}
					className="animate-spin"
				/>
			</div>
		);
	if (error)
		return (
			<div className="h-full w-full flex justify-center items-center">
				<p className="text-muted-foreground text-xl">NO RESULT!!</p>
			</div>
		);
	return (
		<div className="h-full w-full">
			{schools.length ? (
				<div className="h-full flex flex-col gap-4 justify-between">
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
											src={
												item.image ||
												"https://avatars.githubusercontent.com/u/124599?v=4"
											}
											alt={item.name}
											fill
											sizes="(max-width: 640px) 100vw, 
                       (max-width: 1024px) 50vw, 
                       33vw"
										/>
									</div>
								</CardContent>
								<CardFooter className="flex flex-col items-start space-y-1 px-4">
									<div className="text-lg font-bold text-gray-900">
										{item.name}
									</div>
									<div className="text-base leading-7">
										Address: {item.address}
									</div>
									<div className="text-sm text-gray-500">City: {item.city}</div>
								</CardFooter>
							</Card>
						))}
					</div>
					<div className="flex flex-col gap-2">
						{pagiLoading && (
							<div className="h-full w-full flex justify-center items-center">
								<Loader2Icon className="animate-spin" />
							</div>
						)}
						<Pagination>
							<PaginationContent>
								<PaginationItem aria-disabled={true}>
									<Button
										onClick={() => {
											setOffset((pre) => pre + 10);
											setPagiLoading(true);
										}}
										aria-label="Go to next page"
										size="default"
										variant={"ghost"}
										className={"gap-1 px-2.5 sm:pr-2.5"}
										disabled={pagiDisabled}
									>
										<span className="hidden sm:block">Next</span>
										<ChevronRightIcon />
									</Button>
								</PaginationItem>
							</PaginationContent>
						</Pagination>
					</div>
				</div>
			) : (
				<div className="flex flex-1 items-center justify-center w-full h-full min-h-[200px]">
					<p className="text-muted-foreground text-xl">NO RESULT!!</p>
				</div>
			)}
		</div>
	);
};

export default Page;
