import { Inter } from 'next/font/google'
import styles from "./ui/globals.css"


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Titanium-Gym',
  description: 'Intranet del Gimnasio TitaniumGym',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
