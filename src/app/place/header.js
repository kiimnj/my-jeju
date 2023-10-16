"use client"
import Image from 'next/image';
import logo from '/public/logo.png';
import { useRouter } from 'next/navigation';

export default function Header({location}) {

  let router = useRouter();


    return (
        <header className="d-flex align-items-center justify-content-center justify-content-md-between px-4 py-2 border-bottom">
          
            {location === "home" ?
              <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none"><Image src={logo} width={40} height={40} /></a> 
              :
              <i onClick={() => router.back()} className="fa-solid fa-chevron-left"></i>
              }                  
          

          <ul className="nav col-12 col-md-auto justify-content-end mb-md-0">
            <li><a href="/place/search" className="nav-link px-2 link-secondary"><i className="fa-solid fa-magnifying-glass"></i></a></li>
            <li><a href="#" className="nav-link px-2 link-secondary"><i className="fa-regular fa-user"></i></a></li>
            <li><a href="#" className="nav-link px-2 link-secondary"><i className="fa-solid fa-bars"></i></a></li>
          </ul>
        </header>
    )
}