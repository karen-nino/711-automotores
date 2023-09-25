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
                            <div className='flex items-center justify-center h-full px-6 font-medium tracking-wide text-gray-600 cursor-pointer hover:bg-gray-200'>En venta</div>
                            <div className='flex items-center justify-center h-full px-6 font-medium tracking-wide text-gray-600 cursor-pointer hover:bg-gray-200'>Apartados</div>
                            <div className='flex items-center justify-center h-full px-6 font-medium tracking-wide text-blue-500 border-b-4 border-blue-500 cursor-pointer hover:bg-gray-200'>Empeñados</div>
                        </article>

                        <section className='mt-10 ml-5'>
                        <label for="prestamos" class="block text-sm font-semibold text-gray-700 ml-5">TODAS LAS PRENDAS EMPEÑADAS</label>


                            <section className='grid gap-5 p-5 grid-cols-[600px,600px]'>


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



                            </section>


                        </section>

                    </div>
                </section>

            </div>

        </div>
    )
}

export default prendas