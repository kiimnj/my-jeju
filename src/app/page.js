import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'


export default function Home() {


  return (
    <div id='container'>
      <h1>Home</h1>
      <Link href="/place">place</Link>
    </div>
  )
}
