import { createArticle } from "@/lib/actions/form.action"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    await createArticle()
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
  return NextResponse.json({ success: true }, { status: 200 })
}
