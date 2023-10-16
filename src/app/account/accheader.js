"use client"
import Image from 'next/image';
import logo from '/public/logo.png';

export default function Header({location}) {
    return (
        <header className="d-flex align-items-center justify-content-center justify-content-md-between px-4 py-2 border-bottom">
          <a href='/' className="d-inline-flex link-body-emphasis text-decoration-none">
            <i class="fa-solid fa-chevron-left"></i>
          </a>

          <ul className="nav col-12 col-md-auto justify-content-end mb-md-0">
            <li><a href="#" className="nav-link px-2 link-secondary"><i className="fa-solid fa-magnifying-glass"></i></a></li>
            <li><a href="#" className="nav-link px-2 link-secondary"><i className="fa-solid fa-house"></i></a></li>
            <li><a href="#" className="nav-link px-2 link-secondary"><i className="fa-solid fa-bars"></i></a></li>
          </ul>
        </header>
    )
}