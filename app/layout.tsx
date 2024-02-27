import type { Metadata } from "next"
import { Raleway } from "next/font/google"
import "./globals.scss"
import Header from "@/components/header"
import FloatingNav from "@/components/FloatingNav"
const comfortaa = Raleway({
    weight: ["500", "600", "800"],
    style: ["normal", "italic"],
    subsets: ["latin"],
    variable: "--font-jost",
})

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
                <main className=''>{children}</main>
                {/* <Header />
                <div className='layout__container'>
                    <div className='layout'>
                        <div className='side-nav'>
                            <FloatingNav />
                        </div>
                        <main className=''>{children}</main>
                        <div className='hero'>
                            <h1>BUILDING WEB COMPONENT</h1>
                        </div>
                    </div>
                </div> */}
            </body>
        </html>
    )
}
