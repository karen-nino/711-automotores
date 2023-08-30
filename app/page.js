import Image from 'next/image'
import { Topnav, Sidebar } from './layouts/dashboard'

export default function Home() {
  return (
    <main className='min-h-screen bg-gray-200'>
      <Topnav/>
      <Sidebar/>
    </main>
  )
}
