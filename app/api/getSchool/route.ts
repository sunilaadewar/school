import { NextResponse, type NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams;
	const offset = searchParams.get("offset");
	console.log("OFFSET", offset);
	try {
		const schools = await prisma.school.findMany({
			skip: Number(offset),
			take: 10,
			orderBy: { id: "asc" },
		});
		return NextResponse.json({ success: true, data: schools }, { status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ success: false, error: "Error while fetching schools" },
			{ status: 500 }
		);
	}
}
