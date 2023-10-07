import React from 'react'
import { Topbar, Sidebar } from '@/app/layouts/dashboard'


const prendas = () => {
    return (
        <div className='flex flex-col'>

            <div className="grid h-screen grid-cols-[230px,1fr,1fr,1fr,1fr,1fr] grid-rows-[1fr,1fr] overflow-hidden">

                <section className="col-span-6">
                    <Topbar />
                </section>

                <section className="col-span-1 row-start-2">
                    <Sidebar />
                </section>

                <section className="col-span-5 row-start-2">
                    <div className='min-h-screen overflow-auto bg-gray-200'>

                        <article className='flex items-center pl-6 text-base text-white bg-gray-700 h-14'>
                            <div className='mr-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none">
                                    <g clip-path="url(#clip0_372_3024)">
                                        <path d="M3 8.25V8.75C3 8.81771 2.97526 8.8763 2.92578 8.92578C2.8763 8.97526 2.81771 9 2.75 9H2.25C2.18229 9 2.1237 8.97526 2.07422 8.92578C2.02474 8.8763 2 8.81771 2 8.75V8.25C2 8.18229 2.02474 8.1237 2.07422 8.07422C2.1237 8.02474 2.18229 8 2.25 8H2.75C2.81771 8 2.8763 8.02474 2.92578 8.07422C2.97526 8.1237 3 8.18229 3 8.25ZM3 6.25V6.75C3 6.81771 2.97526 6.8763 2.92578 6.92578C2.8763 6.97526 2.81771 7 2.75 7H2.25C2.18229 7 2.1237 6.97526 2.07422 6.92578C2.02474 6.8763 2 6.81771 2 6.75V6.25C2 6.18229 2.02474 6.1237 2.07422 6.07422C2.1237 6.02474 2.18229 6 2.25 6H2.75C2.81771 6 2.8763 6.02474 2.92578 6.07422C2.97526 6.1237 3 6.18229 3 6.25ZM3 4.25V4.75C3 4.81771 2.97526 4.8763 2.92578 4.92578C2.8763 4.97526 2.81771 5 2.75 5H2.25C2.18229 5 2.1237 4.97526 2.07422 4.92578C2.02474 4.8763 2 4.81771 2 4.75V4.25C2 4.18229 2.02474 4.1237 2.07422 4.07422C2.1237 4.02474 2.18229 4 2.25 4H2.75C2.81771 4 2.8763 4.02474 2.92578 4.07422C2.97526 4.1237 3 4.18229 3 4.25ZM12 8.25V8.75C12 8.81771 11.9753 8.8763 11.9258 8.92578C11.8763 8.97526 11.8177 9 11.75 9H4.25C4.18229 9 4.1237 8.97526 4.07422 8.92578C4.02474 8.8763 4 8.81771 4 8.75V8.25C4 8.18229 4.02474 8.1237 4.07422 8.07422C4.1237 8.02474 4.18229 8 4.25 8H11.75C11.8177 8 11.8763 8.02474 11.9258 8.07422C11.9753 8.1237 12 8.18229 12 8.25ZM12 6.25V6.75C12 6.81771 11.9753 6.8763 11.9258 6.92578C11.8763 6.97526 11.8177 7 11.75 7H4.25C4.18229 7 4.1237 6.97526 4.07422 6.92578C4.02474 6.8763 4 6.81771 4 6.75V6.25C4 6.18229 4.02474 6.1237 4.07422 6.07422C4.1237 6.02474 4.18229 6 4.25 6H11.75C11.8177 6 11.8763 6.02474 11.9258 6.07422C11.9753 6.1237 12 6.18229 12 6.25ZM12 4.25V4.75C12 4.81771 11.9753 4.8763 11.9258 4.92578C11.8763 4.97526 11.8177 5 11.75 5H4.25C4.18229 5 4.1237 4.97526 4.07422 4.92578C4.02474 4.8763 4 4.81771 4 4.75V4.25C4 4.18229 4.02474 4.1237 4.07422 4.07422C4.1237 4.02474 4.18229 4 4.25 4H11.75C11.8177 4 11.8763 4.02474 11.9258 4.07422C11.9753 4.1237 12 4.18229 12 4.25ZM13 9.75V3.25C13 3.18229 12.9753 3.1237 12.9258 3.07422C12.8763 3.02474 12.8177 3 12.75 3H1.25C1.18229 3 1.1237 3.02474 1.07422 3.07422C1.02474 3.1237 1 3.18229 1 3.25V9.75C1 9.81771 1.02474 9.8763 1.07422 9.92578C1.1237 9.97526 1.18229 10 1.25 10H12.75C12.8177 10 12.8763 9.97526 12.9258 9.92578C12.9753 9.8763 13 9.81771 13 9.75ZM14 1.25V9.75C14 10.0938 13.8776 10.388 13.6328 10.6328C13.388 10.8776 13.0938 11 12.75 11H1.25C0.90625 11 0.611979 10.8776 0.367188 10.6328C0.122396 10.388 0 10.0938 0 9.75V1.25C0 0.90625 0.122396 0.611979 0.367188 0.367188C0.611979 0.122396 0.90625 0 1.25 0H12.75C13.0938 0 13.388 0.122396 13.6328 0.367188C13.8776 0.611979 14 0.90625 14 1.25Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_372_3024">
                                            <rect width="14" height="11" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <span>Prendas</span>
                        </article>

                        <ul className='flex items-center text-base bg-gray-100 text-gray h-14'>
                            <li className='flex items-center justify-center h-full px-6 font-medium tracking-wide text-gray-600 cursor-pointer hover:bg-gray-200'>
                                <a>En venta</a>
                            </li>
                            <li className='flex items-center justify-center h-full px-6 font-medium tracking-wide text-gray-600 cursor-pointer hover:bg-gray-200'>
                                <a>Apartados</a>
                            </li>
                            <li className='flex items-center justify-center h-full px-6 font-medium tracking-wide text-blue-500 border-b-4 border-blue-500 cursor-pointer hover:bg-gray-200'>
                                <a>Empeñados</a>
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


                            <section className='mt-10'>

                                <label for="prestamos" class="block text-sm font-semibold text-gray-700 mb-4">TODAS LAS PRENDAS EMPEÑADAS</label>

                                <div className='grid gap-5  grid-cols-[600px,600px]'>

                                    <article className='flex cursor-pointer'>
                                        <div>
                                            <div className='flex items-center justify-center w-32 h-full bg-gray-300'>
                                                9-1
                                            </div>
                                        </div>

                                        <div className='relative flex justify-between w-full p-4 bg-white'>

                                            <div>
                                                <p className=''>Ford Focus 2009</p>
                                                <p className='tracking-wide text-gray-500'>No. Serie344 40000km</p>
                                                <p className='tracking-wide text-gray-500'>05  jun 2023</p>
                                            </div>

                                            <div>
                                                <div className='flex items-center'>
                                                    <p className='mr-2 text-sm'>Empeñado</p>
                                                    <a className='flex items-center justify-center w-6 h-6 bg-gray-100 rounded-sm hover:bg-gray-300'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                            <path d="M7.5 9C7.5 9.39782 7.65804 9.77936 7.93934 10.0607C8.22064 10.342 8.60218 10.5 9 10.5C9.39782 10.5 9.77936 10.342 10.0607 10.0607C10.342 9.77936 10.5 9.39782 10.5 9C10.5 8.60218 10.342 8.22064 10.0607 7.93934C9.77936 7.65804 9.39782 7.5 9 7.5C8.60218 7.5 8.22064 7.65804 7.93934 7.93934C7.65804 8.22064 7.5 8.60218 7.5 9ZM7.5 4.5C7.5 4.89782 7.65804 5.27936 7.93934 5.56066C8.22064 5.84196 8.60218 6 9 6C9.39782 6 9.77936 5.84196 10.0607 5.56066C10.342 5.27936 10.5 4.89782 10.5 4.5C10.5 4.10218 10.342 3.72064 10.0607 3.43934C9.77936 3.15804 9.39782 3 9 3C8.60218 3 8.22064 3.15804 7.93934 3.43934C7.65804 3.72064 7.5 4.10218 7.5 4.5ZM7.5 13.5C7.5 13.8978 7.65804 14.2794 7.93934 14.5607C8.22064 14.842 8.60218 15 9 15C9.39782 15 9.77936 14.842 10.0607 14.5607C10.342 14.2794 10.5 13.8978 10.5 13.5C10.5 13.1022 10.342 12.7206 10.0607 12.4393C9.77936 12.158 9.39782 12 9 12C8.60218 12 8.22064 12.158 7.93934 12.4393C7.65804 12.7206 7.5 13.1022 7.5 13.5Z" fill="#4B5563" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>

                                            <div className='absolute bottom-0 right-0 flex items-center justify-center w-20 h-6 bg-green-700'>
                                                <p className='text-xs tracking-wider text-white'>Empeñado</p>
                                            </div>


                                        </div>

                                    </article>


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
    )
}

export default prendas