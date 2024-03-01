import type { Metadata } from "next"
import { Raleway } from "next/font/google"
import localFont from "next/font/local"
import "./globals.scss"
import Header from "@/components/header"

const comfortaa = Raleway({
    weight: ["500", "600", "800"],
    style: ["normal", "italic"],
    subsets: ["latin"],
    variable: "--font-jost",
})
// const avanta = localFont({ src: "../public/fonts/Avant-Garde.woff2", weight: "500", style: "normal" })

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
                {children}
            </body>
        </html>
    )
}
