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
                    <div className='min-h-screen bg-gray-200'>

                        <article className='flex items-center pl-6 text-base text-white bg-gray-700 h-14'>
                            <div className='mr-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15 20L7 12L15 4L17 6L11 12L17 18L15 20Z" fill="white" />
                                </svg>
                            </div>
                            <span>Prendas</span>
                        </article>

                        <article className='flex items-center text-base bg-gray-100 text-gray h-14'>
                            <div className='flex items-center justify-center h-full px-6 font-medium tracking-wide text-gray-600 cursor-pointer hover:bg-gray-200'>En venta</div>
                            <div className='flex items-center justify-center h-full px-6 font-medium tracking-wide text-gray-600 cursor-pointer hover:bg-gray-200'>Apartados</div>
                            <div className='flex items-center justify-center h-full px-6 font-medium tracking-wide text-blue-500 border-b-4 border-blue-500 cursor-pointer hover:bg-gray-200'>Empeñados</div>
                        </article>


                        <section className='mt-10 ml-5'>

                        <div className='flex'>
                            
                        <div className='flex border border-gray-300 bg-gray-50 w-96'>
                                <input type="text" placeholder="Buscar" class="w-96  text-gray-900 text-sm rounded-md block p-2.5" />
                                <a className='block px-3 py-3 text-xs tracking-wide text-gray-600 bg-white border border-b border-gray-300 rounded cursor-pointer text-gray active:bg-gray-300'>
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
                                <a className='block px-3 py-3 text-xs tracking-wide text-gray-600 bg-white border border-b border-gray-300 rounded cursor-pointer text-gray active:bg-gray-300'>
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

                            <a className='block px-5 py-3 ml-2 text-xs tracking-wide text-gray-600 bg-white border border-b border-gray-300 rounded cursor-pointer text-gray active:bg-gray-300'>
                                <div className='flex justify-center'>
                                    <span className='text-center'>Mover</span>
                                </div>
                            </a>
           
                            
                        </div>


                            <section className='mt-10'>

                                <label for="prestamos" class="block text-sm font-semibold text-gray-700 mb-4">TODAS LAS PRENDAS EMPEÑADAS</label>

                                <div className='grid gap-5  grid-cols-[600px,600px]'>

                                    <article className='flex bg-white cursor-pointer'>
                                        <div>
                                            <div className='flex items-center justify-center w-32 h-full bg-gray-300'>
                                                9-1
                                            </div>
                                        </div>

                                        <div className='flex justify-between w-full p-4'>
                                            <div>
                                                <p className=''>Ford Focus 2009</p>
                                                <p className='tracking-wide text-gray-500'>No. Serie344 40000km</p>
                                                <p className='tracking-wide text-gray-500'>05  jun 2023</p>
                                            </div>

                                            <div>
                                                <div className='flex items-center'>
                                                    <p className='mr-2 text-sm'>Empeñado</p>
                                                    <div className='w-6 h-6 bg-gray-200 rounded-sm'></div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>

                                    <article className='flex bg-white cursor-pointer'>
                                        <div>
                                            <div className='flex items-center justify-center w-32 h-full bg-gray-300'>
                                                9-1
                                            </div>
                                        </div>

                                        <div className='flex justify-between w-full p-4'>
                                            <div>
                                                <p className=''>Ford Focus 2009</p>
                                                <p className='tracking-wide text-gray-500'>No. Serie344 40000km</p>
                                                <p className='tracking-wide text-gray-500'>05  jun 2023</p>
                                            </div>

                                            <div>
                                                <div className='flex items-center'>
                                                    <p className='mr-2 text-sm'>Empeñado</p>
                                                    <div className='w-6 h-6 bg-gray-200 rounded-sm'></div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>

                                    <article className='flex bg-white cursor-pointer'>
                                        <div>
                                            <div className='flex items-center justify-center w-32 h-full bg-gray-300'>
                                                9-1
                                            </div>
                                        </div>

                                        <div className='flex justify-between w-full p-4'>
                                            <div>
                                                <p className=''>Ford Focus 2009</p>
                                                <p className='tracking-wide text-gray-500'>No. Serie344 40000km</p>
                                                <p className='tracking-wide text-gray-500'>05  jun 2023</p>
                                            </div>

                                            <div>
                                                <div className='flex items-center'>
                                                    <p className='mr-2 text-sm'>Empeñado</p>
                                                    <div className='w-6 h-6 bg-gray-200 rounded-sm'></div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>

                                    <article className='flex bg-white cursor-pointer'>
                                        <div>
                                            <div className='flex items-center justify-center w-32 h-full bg-gray-300'>
                                                9-1
                                            </div>
                                        </div>

                                        <div className='flex justify-between w-full p-4'>
                                            <div>
                                                <p className=''>Ford Focus 2009</p>
                                                <p className='tracking-wide text-gray-500'>No. Serie344 40000km</p>
                                                <p className='tracking-wide text-gray-500'>05  jun 2023</p>
                                            </div>

                                            <div>
                                                <div className='flex items-center'>
                                                    <p className='mr-2 text-sm'>Empeñado</p>
                                                    <div className='w-6 h-6 bg-gray-200 rounded-sm'></div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>


                                </div>

                            </section>


                        </section>

                    </div>
                </section>

            </div>

        </div>
    )
}

export default prendas