"use server"
import { Resend } from "resend"
import { cookies } from "next/headers"
import { createClient } from "../supabase"
import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendMessage(
  name: string,
  number: string,
  message: string
) {
  try {
    await resend.emails.send({
      from: "Stone Concepts <tim@brightsidedeveloper.com>",
      to: "tim.stoneconcepts@gmail.com",
      subject: "New Customer Inquiry!",
      html: `<p><strong>Name: </strong>${name}</p>
      <p><strong>Number: </strong>${number}</p>
      <p><strong>Message: </strong>${message}</p>
      `,
    })
  } catch (error) {
    console.log(error)
  }
}

export async function addArticles(articles: { title: string; body: string }[]) {
  const cookiez = cookies()
  const supabase = createClient(cookiez)
  await supabase.from("article").insert(articles)
}

export async function createArticle(seed?: string) {
  if (!seed) seed = crypto.randomUUID()
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `You Stone Veneer Expert, and a skilled SEO Blog Writer.`,
      },
      {
        role: "user",
        content: `Write me a blog post in JSON for the site seo in this exact format. Here is a seed in this request to ensure each article is unique: 2j24n32j-2n34n234-sdfdf`,
      },
      {
        role: "assistant",
        content: `{"title":"Mastering the Art of Stone Veneer Installation: Insider Tips and Pro Techniques","body":"Installing stone veneer is both an art and a science, requiring precision, skill, and attention to detail. In this comprehensive guide, we share insider tips and pro techniques for mastering the art of stone veneer installation. From surface preparation and mortar application to cutting and shaping stones, learn the secrets to achieving professional-quality results that stand the test of time. Whether you're a seasoned contractor or a DIY enthusiast, this article will empower you to tackle your next stone veneer project with confidence and expertise."}`,
      },
      {
        role: "user",
        content: `Write me a blog post in JSON for the site seo in this exact format. Here is a seed in this request to ensure each article is unique: ${seed}`,
      },
    ],
    model: "gpt-3.5-turbo",
  })
  const article = completion.choices[0]?.message?.content
  if (!article) return
  try {
    const parsed = JSON.parse(article)
    addArticles([parsed])
  } catch (error) {
    console.log(error)
  }
}
