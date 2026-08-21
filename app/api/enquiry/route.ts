import { NextResponse } from "next/server";
import { enquirySchema, submitEnquiry } from "@/lib/submitEnquiry";

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = enquirySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid submission", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  // Honeypot: if the hidden field has anything in it, silently pretend success.
  if (parsed.data.companyWebsite) {
    return NextResponse.json({ ok: true });
  }

  try {
    await submitEnquiry(parsed.data);
  } catch (error) {
    console.error("Enquiry submission failed", error);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
