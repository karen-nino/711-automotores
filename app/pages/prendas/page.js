import React from 'react'
import { Topbar, Sidebar } from '@/app/layouts/dashboard'


const prendas = () => {
    return (
        <div className='flex flex-col'>

            <div className="grid h-screen grid-cols-[230px,1fr,1fr,1fr,1fr,1fr] grid-rows-[1fr,1fr]">

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
                            <div className='flex items-center justify-center h-full px-6 font-medium tracking-wide text-blue-500 border-b-4 border-blue-500 cursor-pointer'>En venta</div>
                            <div className='flex items-center justify-center h-full px-6 font-medium tracking-wide text-gray-600 cursor-pointer'>Apartados</div>
                            <div className='flex items-center justify-center h-full px-6 font-medium tracking-wide text-gray-600 cursor-pointer'>Empeñados</div>
                        </article>

                        <section className='mt-10 ml-5'>


                            <section className='grid grid-cols-4 gap-3 p-5'>



                                <article className='flex h-20 bg-white cursor-pointer'>

                                    <div>
                                        <div className='flex items-center justify-center w-24 h-full bg-gray-300'>

                                        </div>
                                    </div>

                                    <div className='flex justify-between w-full p-3 ml-3'>

                                        <div>
                                            <p className='text-gray-500'>Ford Focus 2009</p>
                                            <p>No. Serie344 40000km</p>
                                            <p>05  jun 2023</p>
                                        </div>

                                        <div>
                                            <div className='flex items-center'>
                                                <p className='mr-1 text-sm text-gray-500'>0</p>
                                                <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                                            </div>
                                        </div>

                                    </div>

                                </article>

                                <article className='flex h-20 bg-white cursor-pointer'>

                                    <div>
                                        <div className='flex items-center justify-center w-24 h-full bg-gray-300'>

                                        </div>
                                    </div>

                                    <div className='flex justify-between w-full p-3 ml-3'>

                                        <div>
                                            <p className='text-gray-500'>Ford Focus 2009</p>
                                            <p>No. Serie344 40000km</p>
                                            <p>05  jun 2023</p>
                                        </div>

                                        <div>
                                            <div className='flex items-center'>
                                                <p className='mr-1 text-sm text-gray-500'>0</p>
                                                <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                                            </div>
                                        </div>

                                    </div>

                                </article>

                                <article className='flex h-20 bg-white cursor-pointer'>

                                    <div>
                                        <div className='flex items-center justify-center w-24 h-full bg-gray-300'>

                                        </div>
                                    </div>

                                    <div className='flex justify-between w-full p-3 ml-3'>

                                        <div>
                                            <p className='text-gray-500'>Ford Focus 2009</p>
                                            <p>No. Serie344 40000km</p>
                                            <p>05  jun 2023</p>
                                        </div>

                                        <div>
                                            <div className='flex items-center'>
                                                <p className='mr-1 text-sm text-gray-500'>0</p>
                                                <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                                            </div>
                                        </div>

                                    </div>

                                </article>



                            </section>


                        </section>

                    </div>
                </section>

            </div>

        </div>
    )
}

export default prendas