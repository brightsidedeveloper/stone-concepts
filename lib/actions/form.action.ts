'use server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendMessage(
  name: string,
  number: string,
  message: string
) {
  try {
    await resend.emails.send({
      from: 'Stone Concepts <tim@brightsidedeveloper.com>',
      to: 'tim.stoneconcepts@gmail.com',
      subject: 'New Customer Inquiry!',
      html: `<p><strong>Name: </strong>${name}</p>
      <p><strong>Number: </strong>${number}</p>
      <p><strong>Message: </strong>${message}</p>
      `,
    })
  } catch (error) {
    console.log(error)
  }
}
