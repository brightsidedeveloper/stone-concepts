import React from "react"
import RedirectClient from "../RedirectClient"
import { cookies } from "next/headers"
import { createClient } from "@/lib/supabase"

export default async function Index({ params: { index } }: any) {
  const cookiez = cookies()
  const supabase = createClient(cookiez)
  let num = Number(index)
  if (Number.isNaN(num)) num = 1
  const { data: articles } = await supabase
    .from("article")
    .select("*")
    .eq("id", num)

  const article = articles?.[0]

  if (!article) return <RedirectClient />
  return (
    <div>
      <RedirectClient />
      <article className="opacity-0">
        <h1>{article.title}</h1>
        <p>{article.body}</p>
      </article>
    </div>
  )
}
