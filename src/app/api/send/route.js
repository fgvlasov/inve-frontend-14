import { NextResponse } from "next/server";
import { SendMail } from "@/components/Brief/Email/nodemailer";

export const runtime = "nodejs";

export async function POST(request) {
  try {
    const contentType = request.headers.get("content-type") || "";
    const raw = await request.text(); // читаем как текст для дебага

    console.log("[/api/send] content-type:", contentType);
    console.log("[/api/send] raw body:", raw);

    const body = contentType.includes("application/json") ? JSON.parse(raw) : raw;

    const result = await SendMail(body);

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("[/api/send] error:", error);

    // ВРЕМЕННО: верни ошибку в ответ, чтобы увидеть её в браузере
    return NextResponse.json(
      {
        ok: false,
        status: "error",
        message: error?.message || String(error),
      },
      { status: 400 },
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
}
