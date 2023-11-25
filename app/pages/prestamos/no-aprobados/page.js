import React from 'react'
import { Topbar, Sidebar } from '@/app/layouts/dashboard'
import Link from 'next/link'

const PrestamosNoAprobados = () => {
    return (
        <div>
            <div>
                <div className='flex flex-col'>

                    <div className="grid h-screen grid-cols-[230px,1fr,1fr,1fr,1fr,1fr] grid-rows-[1fr,1fr] overflow-hidden">

                        <section className="col-span-6">
                            <Topbar />
                        </section>

                        <section className="col-span-1 row-start-2">
                            <Sidebar />
                        </section>

                        <section className="col-span-5 row-start-2">
                            <div className='h-screen overflow-auto bg-gray-200'>

                                <article className='flex items-center pl-6 text-base text-white bg-gray-700 h-14'>
                                    <div className='mr-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
                                            <g clip-path="url(#clip0_398_2160)">
                                                <path d="M7.2 8.4H10.8V7.5H9.6V3.3H8.53125L7.14375 4.58438L7.86563 5.33438C8.12813 5.10313 8.3 4.925 8.38125 4.8H8.4V7.5H7.2V8.4ZM12 6C12 6.4375 11.9344 6.88125 11.8031 7.33125C11.6719 7.78125 11.4859 8.2 11.2453 8.5875C11.0047 8.975 10.6875 9.29063 10.2938 9.53438C9.9 9.77813 9.46875 9.9 9 9.9C8.53125 9.9 8.1 9.77813 7.70625 9.53438C7.3125 9.29063 6.99531 8.975 6.75469 8.5875C6.51406 8.2 6.32813 7.78125 6.19688 7.33125C6.06563 6.88125 6 6.4375 6 6C6 5.5625 6.06563 5.11875 6.19688 4.66875C6.32813 4.21875 6.51406 3.8 6.75469 3.4125C6.99531 3.025 7.3125 2.70938 7.70625 2.46563C8.1 2.22188 8.53125 2.1 9 2.1C9.46875 2.1 9.9 2.22188 10.2938 2.46563C10.6875 2.70938 11.0047 3.025 11.2453 3.4125C11.4859 3.8 11.6719 4.21875 11.8031 4.66875C11.9344 5.11875 12 5.5625 12 6ZM16.8 8.4V3.6C16.1375 3.6 15.5719 3.36563 15.1031 2.89688C14.6344 2.42813 14.4 1.8625 14.4 1.2H3.6C3.6 1.8625 3.36563 2.42813 2.89688 2.89688C2.42813 3.36563 1.8625 3.6 1.2 3.6V8.4C1.8625 8.4 2.42813 8.63438 2.89688 9.10313C3.36563 9.57188 3.6 10.1375 3.6 10.8H14.4C14.4 10.1375 14.6344 9.57188 15.1031 9.10313C15.5719 8.63438 16.1375 8.4 16.8 8.4ZM18 0.6V11.4C18 11.5625 17.9406 11.7031 17.8219 11.8219C17.7031 11.9406 17.5625 12 17.4 12H0.6C0.4375 12 0.296875 11.9406 0.178125 11.8219C0.059375 11.7031 0 11.5625 0 11.4V0.6C0 0.4375 0.059375 0.296875 0.178125 0.178125C0.296875 0.059375 0.4375 0 0.6 0H17.4C17.5625 0 17.7031 0.059375 17.8219 0.178125C17.9406 0.296875 18 0.4375 18 0.6Z" fill="white" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_398_2160">
                                                    <rect width="18" height="12" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <span>Préstamos</span>
                                </article>

                                <ul className='flex items-center text-base bg-gray-100 select-none text-gray h-14'>
                                    <li className='flex items-center justify-center h-full px-6 font-medium tracking-wide text-gray-600 cursor-pointer hover:bg-gray-200'>
                                        <Link href="./">
                                            Empeñados
                                        </Link>
                                    </li>
                                    <li className='flex items-center justify-center h-full px-6 font-medium tracking-wide text-gray-600 cursor-pointer hover:bg-gray-200'>
                                        <Link href="./vencidos">
                                            Vencidos
                                        </Link>
                                    </li>
                                    <li className='flex items-center justify-center h-full px-6 font-medium tracking-wide text-gray-600 cursor-pointer hover:bg-gray-200'>
                                        <Link href="./perdidos">
                                            Perdidos
                                        </Link>
                                    </li>
                                    <li className='flex items-center justify-center h-full px-6 font-medium tracking-wide text-gray-600 cursor-pointer hover:bg-gray-200'>
                                        <Link href="./desempenados">
                                            Desempeñados
                                        </Link>
                                    </li>
                                    <li className='flex items-center justify-center h-full px-6 font-medium tracking-wide text-blue-500 border-b-4 border-blue-500 cursor-pointer hover:bg-gray-200'>
                                        <Link href="#">
                                            No Aprobados
                                        </Link>
                                    </li>
                                </ul>


                                <section className='mt-10 ml-5'>

                                    <div className='flex'>
                                        <div className='flex border border-gray-300 bg-gray-50 w-96'>
                                            <input type="text" placeholder="Buscar" class="w-96  text-gray-900 text-sm rounded-md block p-2.5" />
                                            <a className='block px-3 py-3 text-xs tracking-wide text-gray-600 bg-white border-l border-gray-300 cursor-pointer text-gray active:bg-gray-300'>
                                                <div className='flex justify-center'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                        <g clip-path="url(#clip0_326_3552)">
                                                            <path d="M5.1825 0.182501C5.24065 0.124499 5.30966 0.0785261 5.38559 0.0472115C5.46151 0.0158969 5.54287 -0.000145687 5.625 9.96867e-07H14.375C14.5408 9.96867e-07 14.6997 0.065849 14.8169 0.183059C14.9342 0.30027 15 0.459241 15 0.625001C15 1.475 14.5725 2.0925 14.1925 2.47375C14.035 2.63 13.88 2.75375 13.75 2.84625V8.385L13.8475 8.445C14.1013 8.60375 14.4425 8.8375 14.7863 9.13875C15.45 9.71875 16.25 10.6588 16.25 11.875C16.25 12.0408 16.1842 12.1997 16.0669 12.3169C15.9497 12.4342 15.7908 12.5 15.625 12.5H10.625V18.125C10.625 18.47 10.345 20 10 20C9.655 20 9.375 18.47 9.375 18.125V12.5H4.375C4.20924 12.5 4.05027 12.4342 3.93306 12.3169C3.81585 12.1997 3.75 12.0408 3.75 11.875C3.75 10.6588 4.55 9.71875 5.2125 9.13875C5.53587 8.85796 5.88301 8.60576 6.25 8.385V2.84625C6.09237 2.73464 5.94435 2.61004 5.8075 2.47375C5.4275 2.0925 5 1.47375 5 0.625001C4.99985 0.54287 5.0159 0.461515 5.04721 0.385588C5.07853 0.309661 5.1245 0.24065 5.1825 0.182501Z" fill="black" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_326_3552">
                                                                <rect width="20" height="20" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                            </a>
                                            <a className='block px-3 py-3 text-xs tracking-wide text-gray-600 bg-white border-l border-gray-300 cursor-pointer text-gray active:bg-gray-300'>
                                                <div className='flex justify-center'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                        <g clip-path="url(#clip0_103_1505)">
                                                            <path d="M16.6154 10.1538C16.6154 8.375 15.9832 6.85337 14.7188 5.58894C13.4543 4.32452 11.9327 3.69231 10.1538 3.69231C8.375 3.69231 6.85337 4.32452 5.58894 5.58894C4.32452 6.85337 3.69231 8.375 3.69231 10.1538C3.69231 11.9327 4.32452 13.4543 5.58894 14.7188C6.85337 15.9832 8.375 16.6154 10.1538 16.6154C11.9327 16.6154 13.4543 15.9832 14.7188 14.7188C15.9832 13.4543 16.6154 11.9327 16.6154 10.1538ZM24 22.1538C24 22.6538 23.8173 23.0865 23.4519 23.4519C23.0865 23.8173 22.6538 24 22.1538 24C21.6346 24 21.2019 23.8173 20.8558 23.4519L15.9087 18.5192C14.1875 19.7115 12.2692 20.3077 10.1538 20.3077C8.77885 20.3077 7.46394 20.0409 6.20913 19.5072C4.95433 18.9736 3.8726 18.2524 2.96394 17.3438C2.05529 16.4351 1.33413 15.3534 0.800481 14.0986C0.266827 12.8438 0 11.5288 0 10.1538C0 8.77885 0.266827 7.46394 0.800481 6.20913C1.33413 4.95433 2.05529 3.8726 2.96394 2.96394C3.8726 2.05529 4.95433 1.33413 6.20913 0.800481C7.46394 0.266827 8.77885 0 10.1538 0C11.5288 0 12.8438 0.266827 14.0986 0.800481C15.3534 1.33413 16.4351 2.05529 17.3438 2.96394C18.2524 3.8726 18.9736 4.95433 19.5072 6.20913C20.0409 7.46394 20.3077 8.77885 20.3077 10.1538C20.3077 12.2692 19.7115 14.1875 18.5192 15.9087L23.4663 20.8558C23.8221 21.2115 24 21.6442 24 22.1538Z" fill="black" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_103_1505">
                                                                <rect width="24" height="24" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                            </a>
                                        </div>
                                    </div>

                                    <section id="activos" onclick="ocultar('activos')" className='mt-10'>

                                        <label for="prestamos" class="block text-sm font-semibold text-gray-700 mb-4">TODAS LOS PRÉSTAMOS NO APROBADOS</label>

                                        <div className='grid gap-5  grid-cols-[600px,600px]'>

                                            <Link href="#" className='flex cursor-pointer'>
                                                <div>
                                                    <div className='flex items-center justify-center w-32 h-full bg-gray-300'>
                                                        2
                                                    </div>
                                                </div>
                                                <div className='relative flex justify-between w-full p-4 bg-white'>
                                                    <div>
                                                        <p className=''>Héctor Hernández Copca</p>
                                                        <p className='tracking-wide text-gray-500'>Nissan Sentra 2017</p>
                                                        <p className='tracking-wide text-gray-500'>30 May 2023 - 30 jun 2023</p>
                                                    </div>
                                                    <div>
                                                        <div className='flex items-center'>
                                                            <p className='mr-2 text-2xl'>$32,200.00</p>
                                                            <a className='flex items-center justify-center w-6 h-6 bg-gray-100 rounded-sm hover:bg-gray-300'>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                                    <path d="M7.5 9C7.5 9.39782 7.65804 9.77936 7.93934 10.0607C8.22064 10.342 8.60218 10.5 9 10.5C9.39782 10.5 9.77936 10.342 10.0607 10.0607C10.342 9.77936 10.5 9.39782 10.5 9C10.5 8.60218 10.342 8.22064 10.0607 7.93934C9.77936 7.65804 9.39782 7.5 9 7.5C8.60218 7.5 8.22064 7.65804 7.93934 7.93934C7.65804 8.22064 7.5 8.60218 7.5 9ZM7.5 4.5C7.5 4.89782 7.65804 5.27936 7.93934 5.56066C8.22064 5.84196 8.60218 6 9 6C9.39782 6 9.77936 5.84196 10.0607 5.56066C10.342 5.27936 10.5 4.89782 10.5 4.5C10.5 4.10218 10.342 3.72064 10.0607 3.43934C9.77936 3.15804 9.39782 3 9 3C8.60218 3 8.22064 3.15804 7.93934 3.43934C7.65804 3.72064 7.5 4.10218 7.5 4.5ZM7.5 13.5C7.5 13.8978 7.65804 14.2794 7.93934 14.5607C8.22064 14.842 8.60218 15 9 15C9.39782 15 9.77936 14.842 10.0607 14.5607C10.342 14.2794 10.5 13.8978 10.5 13.5C10.5 13.1022 10.342 12.7206 10.0607 12.4393C9.77936 12.158 9.39782 12 9 12C8.60218 12 8.22064 12.158 7.93934 12.4393C7.65804 12.7206 7.5 13.1022 7.5 13.5Z" fill="#4B5563" />
                                                                </svg>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className='absolute bottom-0 right-0 flex items-center justify-center h-6 px-4 bg-gray-500'>
                                                        <p className='text-xs tracking-wider text-white'>No Aprobado</p>
                                                    </div>
                                                </div>
                                            </Link>

                                        </div>

                                    </section>

                                    <div class="border-t border-gray-200 py-10">
                                        <div class="flex flex-1 justify-between sm:hidden ">
                                            <a href="#" class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
                                            <a href="#" class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
                                        </div>
                                        <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between ">

                                            <div className='bg-white rounded-md'>
                                                <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                                                    <a href="#" class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                                        <span class="sr-only">Previous</span>
                                                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                            <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
                                                        </svg>
                                                    </a>

                                                    <a href="#" aria-current="page" class="relative z-10 inline-flex items-center bg-blue-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">1</a>
                                                    <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</a>
                                                    <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
                                                    <span class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">...</span>
                                                    <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">8</a>
                                                    <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">9</a>
                                                    <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">10</a>
                                                    <a href="#" class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                                        <span class="sr-only">Next</span>
                                                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                            <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                                                        </svg>
                                                    </a>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>

                                </section>


                            </div>
                        </section>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default PrestamosNoAprobados