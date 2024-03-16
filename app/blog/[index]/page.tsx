import React from "react"
import { articles } from "../page"
import RedirectClient from "../RedirectClient"

export default function Index({ params: { index } }: any) {
  const article = articles[parseInt(index)]
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
