import Image from "next/image"

export default function Home() {
  return (
    <div>
      <header className="flex items-center justify-between px-20 py-5 text-white bg-slate-800">
        <h1 className="text-3xl">Stone Concepts</h1>
        <a
          href="tel:9136363773"
          className="bg-rose-500 rounded-xl px-4 py-3 hover:shadow-md hover:brightness-105"
        >
          Call NOW
        </a>
      </header>
      <main>
        <section className="bg-slate-900 h-[500px]"></section>
      </main>
    </div>
  )
}
