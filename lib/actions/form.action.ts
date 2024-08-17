'use server'
import { Resend } from 'resend'
import { cookies } from 'next/headers'
import { createClient } from '../supabase'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendMessage(name: string, number: string, message: string) {
  try {
    await resend.emails.send({
      from: 'Stone Concepts <tim@brightsidedeveloper.com>',
      to: '19132065030@tmomail.net',
      subject: 'BRIGHTSIDE BOT',
      text: `
      Potential New Customer:

      Name:${name}

      Number: ${number}

      Message: ${message}
      `,
    })
    await resend.emails.send({
      from: 'Stone Concepts <tim@brightsidedeveloper.com>',
      to: '19136363773@tmomail.net',
      subject: 'BRIGHTSIDE BOT',
      text: `
      Potential New Customer:
      
      Name:${name}

      Number: ${number}
      
      Message: ${message}
      `,
    })
  } catch (error) {
    console.log(error)
  }
}

export async function addArticles(articles: { title: string; body: string }[]) {
  const cookiez = cookies()
  const supabase = createClient(cookiez)
  await supabase.from('article').insert(articles)
}

export async function createArticle(seed?: string) {
  if (!seed) seed = crypto.randomUUID()

  const article = ''
  if (!article) return
  try {
    const parsed = JSON.parse(article)
    addArticles([parsed])
  } catch (error) {
    console.log(error)
  }
}
