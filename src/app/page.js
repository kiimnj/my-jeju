import Image from 'next/image'
import Link from 'next/link'
import Script from "next/script";


export default function Home() {


  return (
    <>
      {/* <Script src="https://kit.fontawesome.com/fefbaa8eb2.js"
        onLoad={() => {
          console.log('Script has loaded')
        }}
      /> */}


      <Link href="/place">place</Link>
    </>
  )
}
