import type { Metadata } from "next"
import { Raleway } from "next/font/google"
import localFont from "next/font/local"
import "./globals.scss"
import Header from "@/components/header"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useGSAP } from "@gsap/react"

const comfortaa = Raleway({
    weight: ["500", "600", "800"],
    style: ["normal", "italic"],
    subsets: ["latin"],
    variable: "--font-jost",
})
// const avanta = localFont({ src: "../public/fonts/Avant-Garde.woff2", weight: "500", style: "normal" })
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export const metadata: Metadata = {
    title: "Animesh Garai",
    description: "My portfolio",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body className={comfortaa.className}>
                <Header />
                <div id='smooth-wrapper'>
                    <div id='smooth-content'>{children}</div>
                </div>
                {/* {children} */}
            </body>
        </html>
    )
}
