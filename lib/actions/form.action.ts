'use server'

import twilioClient from '../twilioClient'

export async function sendMessage(
  name: string,
  number: string,
  message: string
) {
  try {
    await twilioClient.messages.create({
      body: `New Client: ${name}\n\n\nPhone Number: ${number}\n\n\nMessage: ${message}`,
      to: '+19136363773',
      from: process.env.TWILIO_PHONE_NUMBER,
    })
  } catch (error) {
    console.log(error)
  }
}
