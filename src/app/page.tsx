import Link from 'next/link'

export default function Home() {
  return (
   <div style={{height: '100vh'}}>
      <h1 className="h-full flex items-center justify-center text-4xl">
        <Link href="/about">Hello</Link>
      </h1>
   </div>
  )
}
