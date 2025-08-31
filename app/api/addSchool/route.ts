import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
	try {
		const body = await req.json();
		console.log("SCHOOL", body);
		const school = await prisma.school.create({
			data: {
				name: body.name,
				address: body.address,
				city: body.city,
				state: body.state,
				contact: body.contact,
				email: body.email,
				image: body.image,
			},
		});
		console.log(school);
		return NextResponse.json({ success: true }, { status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ success: false, error: "Error while creating school" },
			{ status: 500 }
		);
	}
}
