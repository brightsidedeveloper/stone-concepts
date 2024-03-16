"use client"

import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function RedirectClient() {
  const router = useRouter()
  useEffect(() => {
    router.replace("/")
  }, [router])
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black/30">
      <Loader2 className="w-44 h-44 text-gray-50 animate-spin" />
    </div>
  )
}
