import React from 'react'
import { Topbar, Sidebar } from '@/app/layouts/dashboard'
import Link from 'next/link'

const DetallesPrenda = () => {
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

                    <section className="col-span-5 row-start-2">
                        <div className='h-screen pb-64 overflow-auto bg-gray-200'>

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
                                        <h3>Ford Focus 2009</h3>
                                    </div>

                                    <div className='w-full px-4 py-6 text-gray-500 break-words bg-white'>
                                        <div className='flex pb-3 text-sm'>
                                            <div className='w-[150px] font-bold'>Stock</div>
                                            <div className=''>9-1</div>
                                        </div>
                                        <div className='flex pb-3 text-sm'>
                                            <div className='w-[150px] font-bold'>Dueño original</div>
                                            <div className=''>Héctor Hernández Copca</div>
                                        </div>
                                        <div className='flex pb-3 text-sm'>
                                            <div className='w-[150px] font-bold'>Descripción</div>
                                            <div className=''>Ford Focus 2009</div>
                                        </div>
                                        <div className='flex pb-3 text-sm'>
                                            <div className='w-[150px] font-bold'>Detalles</div>
                                            <div className=''>No. Serie 344 4000km</div>
                                        </div>
                                        <div className='flex pb-3 text-sm'>
                                            <div className='w-[150px] font-bold'>Observaciones</div>
                                            <div className=''>Perfecto</div>
                                        </div>
                                        <div className='flex pb-3 text-sm'>
                                            <div className='w-[150px] font-bold'>Ubicación</div>
                                            <div className=''>Querétaro</div>
                                        </div>
                                        <div className='flex pb-3 text-sm'>
                                            <div className='w-[150px] font-bold'>Avalúo</div>
                                            <div className=''>$3.00</div>
                                        </div>
                                        <div className='flex pb-3 text-sm'>
                                            <div className='w-[150px] font-bold'>Prestado</div>
                                            <div className=''>$45,000.00</div>
                                        </div>
                                        <div className='flex pb-3 text-sm'>
                                            <div className='w-[150px] font-bold'>Adquisición</div>
                                            <div className=''>Empeño</div>
                                        </div>
                                        <div className='flex pb-3 text-sm'>
                                            <div className='w-[150px] font-bold'>Estado</div>
                                            <div className=''>Empeño</div>
                                        </div>
                                        <div className='flex pb-3 text-sm'>
                                            <div className='w-[150px] font-bold'>Encargado</div>
                                            <div className=''>Lizbeth Ramos</div>
                                        </div>
                                    </div>
                                </article>

                                <article className='pb-10'>
                                    <div className='flex items-center justify-between w-full p-4 text-white bg-gray-700'>
                                        <h3>Documentos</h3>
                                        <a className='block px-5 py-2 text-xs tracking-wide text-gray-600 bg-white border border-b border-gray-300 rounded cursor-pointer text-gray active:bg-gray-300'>
                                            <div className='flex justify-center'>
                                                <span className='text-center'>Agregar</span>
                                            </div>
                                        </a>
                                    </div>

                                    {/* <div className='w-full px-4 py-6 text-gray-500 break-words bg-white'>
                                    </div> */}
                                </article>

                                <article className='pb-10'>
                                    <div className='flex items-center justify-between w-full p-4 text-white bg-gray-700'>
                                        <h3>Fotos</h3>
                                        <a className='block px-5 py-2 text-xs tracking-wide text-gray-600 bg-white border border-b border-gray-300 rounded cursor-pointer text-gray active:bg-gray-300'>
                                            <div className='flex justify-center'>
                                                <span className='text-center'>Agregar</span>
                                            </div>
                                        </a>
                                    </div>

                                    {/* <div className='w-full px-4 py-6 text-gray-500 break-words bg-white'>
                                    </div> */}
                                </article>

                                <article className='pb-10'>
                                    <div className='flex items-center justify-between w-full p-4 text-white bg-gray-700'>
                                        <h3>Información post-venta</h3>
                                        <a className='block px-5 py-2 text-xs tracking-wide text-gray-600 bg-white border border-b border-gray-300 rounded cursor-pointer text-gray active:bg-gray-300'>
                                            <div className='flex justify-center'>
                                                <span className='text-center'>Agregar</span>
                                            </div>
                                        </a>
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

export default DetallesPrenda