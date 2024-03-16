import { createArticle } from "@/lib/actions/form.action"
import { NextResponse } from "next/server"

export async function GET() {
  createArticle()
  return NextResponse.json({ success: true }, { status: 200 })
}
