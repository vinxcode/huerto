'use client'

import React from 'react'
import Link from "next/link";
import "./globals.css";
import { usePathname } from "next/navigation";

const nav = [
    {
        icon: "icon-[tabler--book]",
        linkName: "Diario",
        route: "/diario"
    },
    {
        icon: "icon-[tabler--notes]",
        linkName: "Control",
        route: "/control"
    }
]

const Navigation = () => {

    const pathname = usePathname()

    return (
        <div className='w-full h-full py-5 flex justify-evenly'>
            {
                nav.map(link => (
                    <Link href={link.route} className={`flex flex-col justify-center items-center gap-2 ${pathname.includes(link.route) ? 'text-dark-green border-b-2 border-dark-green ' : ""}`}>
                        <span className={`${link.icon} text-2xl `}></span>
                        <p>{link.linkName}</p>
                    </Link>
                ))

            }

        </div>
    )
}

export default Navigation