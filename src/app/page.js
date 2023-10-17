import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'


export default function Home() {


  return (
    <div id='container'>
      <div id='background'>
        <img width={393} height={852} src='/home.PNG'></img>
        <div class="initBtn">
          <a href="/place">place</a>
        </div>
      </div>
    </div>
  )
}
