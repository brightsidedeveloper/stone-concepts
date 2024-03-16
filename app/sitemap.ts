import { createClient } from "@/lib/supabase"
import { MetadataRoute } from "next"
import { cookies } from "next/headers"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Get posts
  const cookiez = cookies()
  const supabase = createClient(cookiez)
  const { data: articles } = await supabase.from("article").select("*")

  const map =
    articles?.map(article => ({
      url: `https://stoneconceptskc.com/blog/${article.id}`,
      changeFrequency: "never" as "never",
      priority: 0.6,
    })) ?? []

  return [
    {
      url: "https://stoneconceptskc.com",
      priority: 1,
    },
    {
      url: "https://stoneconceptskc.com/blog",
      changeFrequency: "daily",
      priority: 0.8,
    },
    ...map,
  ]
}
