import { NextResponse } from "next/server";
import { fetchAPI } from "@/lib/api";

export async function POST(request) {
  try {
    const body = await request.json();

    const globalRes = await fetchAPI("/global", {
      populate: {
        defaultSeo: {
          populate: "*",
        },
      },
    });

    const secretKey = globalRes?.data?.attributes?.CAPTCHA_SECRET_KEY;

    if (!secretKey) {
      return NextResponse.json({ status: "failure", message: "CAPTCHA secret key is missing" }, { status: 500 });
    }

    const reCaptchaRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${encodeURIComponent(secretKey)}&response=${encodeURIComponent(body?.gRecaptchaToken || "")}`,
    });

    const json = await reCaptchaRes.json();
    console.log(json, "Response from Google reCaptcha verification API");

    if (json?.score > 0.5) {
      return NextResponse.json({ status: "success", message: "Enquiry submitted successfully" }, { status: 200 });
    }

    return NextResponse.json({ status: "failure", message: "Google ReCaptcha Failure" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ status: "failure", message: "Error submitting the enquiry form" }, { status: 405 });
  }
}

export async function GET() {
  return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
}
