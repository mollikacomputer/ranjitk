
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h2 className="text-3xl"> Ranjit Home page</h2>
      <button className="btn btn-secondary">Button</button>
    </main>
  )
}
