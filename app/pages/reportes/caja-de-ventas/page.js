import React from 'react'
import { Topbar, Sidebar } from '@/app/layouts/dashboard'
import Link from 'next/link'

const CajaVentas = () => {
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
                        <div className='h-screen overflow-auto bg-gray-200'>

                            <article className='flex items-center pl-6 text-base text-white bg-gray-700 h-14'>
                                <Link href="../reportes" className='mr-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='cursor-pointer fill-white hover:fill-gray-400'>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15 20L7 12L15 4L17 6L11 12L17 18L15 20Z" />
                                    </svg>
                                </Link>
                                <div className='mr-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M8.5 1.30278V5.87497C8.5 5.90812 8.51317 5.93992 8.53661 5.96336C8.56005 5.9868 8.59185 5.99997 8.625 5.99997H13.1972C13.2095 5.99998 13.2216 5.99633 13.2319 5.98948C13.2422 5.98264 13.2502 5.9729 13.2549 5.9615C13.2597 5.9501 13.2609 5.93755 13.2586 5.92543C13.2562 5.91331 13.2503 5.90217 13.2416 5.89341L8.60656 1.25841C8.5978 1.2497 8.58666 1.24379 8.57454 1.24141C8.56243 1.23903 8.54987 1.24029 8.53847 1.24504C8.52707 1.24978 8.51733 1.2578 8.51049 1.26808C8.50364 1.27836 8.49999 1.29043 8.5 1.30278Z" fill="white" />
                                        <path d="M7.75 7C7.6837 7 7.62011 6.97366 7.57322 6.92678C7.52634 6.87989 7.5 6.8163 7.5 6.75V1H2.875C2.77554 1 2.68016 1.03951 2.60983 1.10983C2.53951 1.18016 2.5 1.27554 2.5 1.375V14.625C2.5 14.7245 2.53951 14.8198 2.60983 14.8902C2.68016 14.9605 2.77554 15 2.875 15H13.125C13.2245 15 13.3198 14.9605 13.3902 14.8902C13.4605 14.8198 13.5 14.7245 13.5 14.625V7H7.75ZM11 12H5V11H11V12ZM11 9.5H5V8.5H11V9.5Z" fill="white" />
                                    </svg>
                                </div>
                                <span>Caja de ventas</span>
                            </article>

                            <section className='mt-10 ml-5 mb-44'>

                                <div className='mb-8'>
                                    <h3 class="block text-sm font-semibold text-gray-700 mb-4">Caja de ventas </h3>
                                    <div className='flex gap-4'>
                                        <Link href="#" className='flex items-center justify-center w-56 text-center bg-white border-2 border-gray-300 border-solid h-28'>
                                            <p className='font-bold text-gray-500'>Flujo de caja</p>
                                        </Link>

                                        <Link href="#" className='flex items-center justify-center w-56 text-center bg-white border-2 border-gray-300 border-solid h-28'>
                                            <p className='font-bold text-gray-500'>Resumen de caja</p>
                                        </Link>

                                        <Link href="#" className='flex items-center justify-center w-56 text-center bg-white border-2 border-gray-300 border-solid h-28'>
                                            <p className='font-bold text-gray-500'>Registrar depósito</p>
                                        </Link>

                                        <Link href="#" className='flex items-center justify-center w-56 bg-white border-2 border-gray-300 border-solid h-28text-center'>
                                            <p className='font-bold text-gray-500'>Registrar retiro</p>
                                        </Link>

                                        <Link href="#" className='flex items-center justify-center w-56 text-center bg-white border-2 border-gray-300 border-solid h-28'>
                                            <p className='font-bold text-gray-500'>Registrar gasto</p>
                                        </Link>
                                    </div>
                                </div>

                            </section>

                        </div>
                    </section>

                </div>

            </div>

        </div>
    )
}

export default CajaVentas