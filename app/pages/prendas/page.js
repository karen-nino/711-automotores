import React from 'react'
import { Topbar, Sidebar } from '@/app/layouts/dashboard'
import Link from 'next/link'

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
                    <div className='h-screen overflow-auto bg-gray-200'>

                        <article className='flex items-center pl-6 text-base text-white bg-gray-700 h-14'>
                            <div className='mr-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
                                    <g clip-path="url(#clip0_372_3024)">
                                        <path d="M3.27273 9V9.54545C3.27273 9.61932 3.24574 9.68324 3.19176 9.73722C3.13778 9.79119 3.07386 9.81818 3 9.81818H2.45455C2.38068 9.81818 2.31676 9.79119 2.26278 9.73722C2.20881 9.68324 2.18182 9.61932 2.18182 9.54545V9C2.18182 8.92614 2.20881 8.86222 2.26278 8.80824C2.31676 8.75426 2.38068 8.72727 2.45455 8.72727H3C3.07386 8.72727 3.13778 8.75426 3.19176 8.80824C3.24574 8.86222 3.27273 8.92614 3.27273 9ZM3.27273 6.81818V7.36364C3.27273 7.4375 3.24574 7.50142 3.19176 7.5554C3.13778 7.60938 3.07386 7.63636 3 7.63636H2.45455C2.38068 7.63636 2.31676 7.60938 2.26278 7.5554C2.20881 7.50142 2.18182 7.4375 2.18182 7.36364V6.81818C2.18182 6.74432 2.20881 6.6804 2.26278 6.62642C2.31676 6.57244 2.38068 6.54545 2.45455 6.54545H3C3.07386 6.54545 3.13778 6.57244 3.19176 6.62642C3.24574 6.6804 3.27273 6.74432 3.27273 6.81818ZM3.27273 4.63636V5.18182C3.27273 5.25568 3.24574 5.3196 3.19176 5.37358C3.13778 5.42756 3.07386 5.45455 3 5.45455H2.45455C2.38068 5.45455 2.31676 5.42756 2.26278 5.37358C2.20881 5.3196 2.18182 5.25568 2.18182 5.18182V4.63636C2.18182 4.5625 2.20881 4.49858 2.26278 4.4446C2.31676 4.39063 2.38068 4.36364 2.45455 4.36364H3C3.07386 4.36364 3.13778 4.39063 3.19176 4.4446C3.24574 4.49858 3.27273 4.5625 3.27273 4.63636ZM13.0909 9V9.54545C13.0909 9.61932 13.0639 9.68324 13.0099 9.73722C12.956 9.79119 12.892 9.81818 12.8182 9.81818H4.63636C4.5625 9.81818 4.49858 9.79119 4.4446 9.73722C4.39063 9.68324 4.36364 9.61932 4.36364 9.54545V9C4.36364 8.92614 4.39063 8.86222 4.4446 8.80824C4.49858 8.75426 4.5625 8.72727 4.63636 8.72727H12.8182C12.892 8.72727 12.956 8.75426 13.0099 8.80824C13.0639 8.86222 13.0909 8.92614 13.0909 9ZM13.0909 6.81818V7.36364C13.0909 7.4375 13.0639 7.50142 13.0099 7.5554C12.956 7.60938 12.892 7.63636 12.8182 7.63636H4.63636C4.5625 7.63636 4.49858 7.60938 4.4446 7.5554C4.39063 7.50142 4.36364 7.4375 4.36364 7.36364V6.81818C4.36364 6.74432 4.39063 6.6804 4.4446 6.62642C4.49858 6.57244 4.5625 6.54545 4.63636 6.54545H12.8182C12.892 6.54545 12.956 6.57244 13.0099 6.62642C13.0639 6.6804 13.0909 6.74432 13.0909 6.81818ZM13.0909 4.63636V5.18182C13.0909 5.25568 13.0639 5.3196 13.0099 5.37358C12.956 5.42756 12.892 5.45455 12.8182 5.45455H4.63636C4.5625 5.45455 4.49858 5.42756 4.4446 5.37358C4.39063 5.3196 4.36364 5.25568 4.36364 5.18182V4.63636C4.36364 4.5625 4.39063 4.49858 4.4446 4.4446C4.49858 4.39063 4.5625 4.36364 4.63636 4.36364H12.8182C12.892 4.36364 12.956 4.39063 13.0099 4.4446C13.0639 4.49858 13.0909 4.5625 13.0909 4.63636ZM14.1818 10.6364V3.54545C14.1818 3.47159 14.1548 3.40767 14.1009 3.35369C14.0469 3.29972 13.983 3.27273 13.9091 3.27273H1.36364C1.28977 3.27273 1.22585 3.29972 1.17188 3.35369C1.1179 3.40767 1.09091 3.47159 1.09091 3.54545V10.6364C1.09091 10.7102 1.1179 10.7741 1.17188 10.8281C1.22585 10.8821 1.28977 10.9091 1.36364 10.9091H13.9091C13.983 10.9091 14.0469 10.8821 14.1009 10.8281C14.1548 10.7741 14.1818 10.7102 14.1818 10.6364ZM15.2727 1.36364V10.6364C15.2727 11.0114 15.1392 11.3324 14.8722 11.5994C14.6051 11.8665 14.2841 12 13.9091 12H1.36364C0.988636 12 0.667614 11.8665 0.400568 11.5994C0.133523 11.3324 0 11.0114 0 10.6364V1.36364C0 0.988636 0.133523 0.667614 0.400568 0.400568C0.667614 0.133523 0.988636 0 1.36364 0H13.9091C14.2841 0 14.6051 0.133523 14.8722 0.400568C15.1392 0.667614 15.2727 0.988636 15.2727 1.36364Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_372_3024">
                                            <rect width="15.2727" height="12" fill="white" />
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
                                <a value="Ocultar">Apartados</a>
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
                            

                            <section id="apartados" onclick="ocultar('apartados')" className='mt-10'>

                                <label for="prestamos" class="block text-sm font-semibold text-gray-700 mb-4">TODAS LAS PRENDAS APARTADAS</label>

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

                                            <div className='absolute bottom-0 right-0 flex items-center justify-center w-20 h-6 bg-orange-700'>
                                                <p className='text-xs tracking-wider text-white'>Apartadas</p>
                                            </div>
                                        </div>

                                    </article>
                                </div>
                            </section>


                            <section id="empeñados" className='mt-10'>

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