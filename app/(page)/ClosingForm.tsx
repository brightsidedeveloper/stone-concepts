import CallNow from "@/components/CallNow"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { sendMessage } from "@/lib/actions/form.action"
import { Check } from "lucide-react"
import Image from "next/image"
import React from "react"
import toast from "react-hot-toast"

export default function ClosingForm() {
  const [submitted, setSubmitted] = React.useState(false)

  const [name, setName] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [message, setMessage] = React.useState("")

  const onSubmit = React.useCallback(() => {
    if (!name) return toast.error("Please enter your name")
    else if (!phone) return toast.error("Please enter your phone number")
    sendMessage(name, phone, message)
    setSubmitted(true)
    setName("")
    setPhone("")
    setMessage("")
    toast.success("Message sent!")
    setTimeout(() => setSubmitted(false), 3_000)
  }, [message, name, phone])

  return (
    <section
      className={
        "relative h-screen bg-stone-800/40 flex justify-center items-center"
      }
    >
      <Image
        priority
        src="/assets/SC.png"
        alt="hero"
        fill
        objectFit="cover"
        objectPosition="center"
        className="absolute z-[-1]"
      />
      <div className="flex flex-col gap-10 p-10 bg-stone-900/40 w-full max-w-xl items-center justify-center h-fit rounded-lg">
        <h1 className="text-2xl lg:text-4xl font-bold text-white text-center">
          GET STARTED TODAY
        </h1>
        <CallNow />
        <div className="text-stone-300 -mt-5 -mb-5">
          <p>- Mon-Fri: 8AM-5PM</p>
          <p>- Sat-Sun: Closed</p>
        </div>
        <div className="flex w-full text-stone-300 items-center gap-4">
          <div className="h-0.5 w-full bg-stone-300 rounded-full" /> or{" "}
          <div className="h-0.5 w-full bg-stone-300 rounded-full" />
        </div>
        <p className="text-stone-300 text-center">
          We are here to help you transform your space. Leave your details and
          we’ll get in touch.
        </p>
        <div className="flex flex-col w-full gap-5 items-center justify-center">
          <Input
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="bg-stone-300"
          />
          <Input
            placeholder="Phone"
            type="tel"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            className="bg-stone-300"
          />
          <Textarea
            placeholder="Message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            className="bg-stone-300"
          />
          <Button
            disabled={submitted}
            onClick={onSubmit}
            className="ml-auto bg-stone-300 text-stone-800 hover:bg-stone-400 hover:text-stone-900 transition-all"
          >
            {submitted ? <Check className="w-5 h-5" /> : "Submit"}
          </Button>
        </div>
      </div>
    </section>
  )
}
