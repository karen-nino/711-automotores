import Image from 'next/image'
import { Topbar, Sidebar } from './layouts/dashboard'

export default function Home() {
  return (
    <main className='min-h-screen bg-gray-200'>
      <Topbar/>
      <Sidebar/>
    </main>
  )
}
