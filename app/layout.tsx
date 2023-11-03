import Link from "next/link";
import "../styles/global.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <nav>
                    <ul>
                        <li><Link href="/login">Login</Link></li>
                    </ul>
                </nav>
                {children}</body>
        </html>
    )
}