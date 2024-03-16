import React from "react"
import RedirectClient from "./RedirectClient"
import { articles } from "@/lib/constants/articles"

export default function page() {
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
