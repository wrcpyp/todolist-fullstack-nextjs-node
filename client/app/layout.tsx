import type { Metadata } from "next"
import "./globals.css"
import { Toaster } from "react-hot-toast"

export const metadata: Metadata = {
    title: "Todo App",
    description: "Todo App",
    manifest: '/manifest.json'
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Toaster />
                {children}
            </body>
        </html>
    )
}
