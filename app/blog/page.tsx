import React from "react"
import RedirectClient from "./RedirectClient"
import { cookies } from "next/headers"
import { createClient } from "@/lib/supabase"

export default async function page() {
  const cookiez = cookies()
  const supabase = createClient(cookiez)
  const { data: articles } = await supabase.from("article").select("*")

  if (articles?.length)
    return (
      <>
        <RedirectClient />
        <section className="opacity-0">
          {articles.map((article, index) => (
            <article key={index}>
              <h1>{article.title}</h1>
              <p>{article.body}</p>
            </article>
          ))}
        </section>
      </>
    )
}
