import Link from 'next/link'

export default function Home() {

  return (
   <div>
      <h1 className="flex items-center justify-center text-4xl">
        <Link href="/about">Hello</Link>
      </h1>
      <h1 className="flex items-center justify-center text-4xl">
        <Link href="/novel">小说</Link>
      </h1>
      <h1 className="flex items-center justify-center text-4xl">
        <Link href="/about">漫画</Link>
      </h1>
      <h1 className="flex items-center justify-center text-4xl">
        <Link href="/about">视频</Link>
      </h1>
   </div>
  )
}
