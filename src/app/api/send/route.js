import { NextResponse } from "next/server";
import { SendMail } from "@/components/Brief/Email/nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    await SendMail(body);
    return NextResponse.json("Email send successfully", { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: "error" }, { status: 400 });
  }
}

export const runtime = "nodejs";

export async function GET() {
  return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
}
