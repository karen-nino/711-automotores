import React from 'react'
import { Topbar, Sidebar } from '@/app/layouts/dashboard'
import Link from 'next/link'

const DetallesDePrendas = () => {
    return (
        <div>
            <div className='flex flex-col'>

                <div className="grid h-screen grid-cols-[230px,1fr,1fr,1fr,1fr,1fr] grid-rows-[1fr,1fr] overflow-hidden">

                    <section className="col-span-6">
                        <Topbar />
                    </section>

                    <section className="col-span-1 row-start-2">
                        <Sidebar />
                    </section>

                    <section className="col-span-5 row-start-2 overflow-auto">
                        <div className='h-screen bg-gray-200'>

                            <article className='flex items-center pl-6 text-base text-white bg-gray-700 h-14'>
                                <Link href="../prendas" className='mr-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='cursor-pointer fill-white hover:fill-gray-400'>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15 20L7 12L15 4L17 6L11 12L17 18L15 20Z" />
                                    </svg>
                                </Link>
                                <div className='mr-3'>
                                    <span>Detalles de prenda</span>
                                </div>
                            </article>

                            <section className='mt-10 ml-5 w-[698px]'>

                                <article className='pb-10'>
                                    <div className='w-full p-4 text-white bg-gray-700'>
                                        <h3>Nissan Focus 2013</h3>
                                    </div>

                                    <div className='w-full px-4 py-6 text-gray-500 break-words bg-white'>
                                        <div className='flex pb-3 text-sm'>
                                            <div className='w-[150px]'>Stock</div>
                                            <div className=''>1-1</div>
                                        </div>
                                        <div className='flex pb-3 text-sm'>
                                            <div className='w-[150px]'>Dueño original</div>
                                            <div className=''>Emiliano Gomez Barrones</div>
                                        </div>
                                        <div className='flex pb-3 text-sm'>
                                            <div className='w-[150px]'>Descripción</div>
                                            <div className=''>Nissan Focus 2023</div>
                                        </div>
                                        <div className='flex pb-3 text-sm'>
                                            <div className='w-[150px]'>Detalles</div>
                                            <div className=''>No. Serie 300 2000km</div>
                                        </div>
                                        <div className='flex pb-3 text-sm'>
                                            <div className='w-[150px]'>Observaciones</div>
                                            <div className=''>Perfectas condiciones</div>
                                        </div>
                                        <div className='flex pb-3 text-sm'>
                                            <div className='w-[150px]'>Avalúo</div>
                                            <div className=''>$2.00</div>
                                        </div>
                                        <div className='flex pb-3 text-sm'>
                                            <div className='w-[150px]'>Fecha venta</div>
                                            <div className=''>22/06/2023</div>
                                        </div>
                                        <div className='flex pb-3 text-sm'>
                                            <div className='w-[150px]'>Prestado</div>
                                            <div className=''>$200,000.00</div>
                                        </div>
                                        <div className='flex pb-3 text-sm'>
                                            <div className='w-[150px]'>Precio venta</div>
                                            <div className=''>$210,000.00</div>
                                        </div>
                                        <div className='flex pb-3 text-sm'>
                                            <div className='w-[150px]'>Adquisición</div>
                                            <div className=''>Empeño</div>
                                        </div>
                                        <div className='flex pb-3 text-sm'>
                                            <div className='w-[150px]'>Estado</div>
                                            <div className=''>Vendido</div>
                                        </div>
                                        <div className='flex pb-3 text-sm'>
                                            <div className='w-[150px]'>Vendido a</div>
                                            <div className=''>Lizbeth Ramos</div>
                                        </div>
                                        <div className='flex pb-3 text-sm'>
                                            <div className='w-[150px]'>Vendido por</div>
                                            <div className=''>Orlando Daniel Virgen Z</div>
                                        </div>
                                    </div>
                                </article>
                                
                                <article className='pb-10'>
                                    <div className='w-full p-4 text-white bg-gray-700'>
                                        <h3>Fotos</h3>
                                    </div>

                                    {/* <div className='w-full px-4 py-6 text-gray-500 break-words bg-white'>
                                    </div> */}
                                </article>

                            </section>

                        </div>
                    </section>

                </div>

            </div>
        </div>
    )
}

export default DetallesDePrendas