import React from 'react'
import { Topbar, Sidebar } from '@/app/layouts/dashboard'
import Link from 'next/link'

const Reportes = () => {
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M8.5 1.30278V5.87497C8.5 5.90812 8.51317 5.93992 8.53661 5.96336C8.56005 5.9868 8.59185 5.99997 8.625 5.99997H13.1972C13.2095 5.99998 13.2216 5.99633 13.2319 5.98948C13.2422 5.98264 13.2502 5.9729 13.2549 5.9615C13.2597 5.9501 13.2609 5.93755 13.2586 5.92543C13.2562 5.91331 13.2503 5.90217 13.2416 5.89341L8.60656 1.25841C8.5978 1.2497 8.58666 1.24379 8.57454 1.24141C8.56243 1.23903 8.54987 1.24029 8.53847 1.24504C8.52707 1.24978 8.51733 1.2578 8.51049 1.26808C8.50364 1.27836 8.49999 1.29043 8.5 1.30278Z" fill="white" />
                                    <path d="M7.75 7C7.6837 7 7.62011 6.97366 7.57322 6.92678C7.52634 6.87989 7.5 6.8163 7.5 6.75V1H2.875C2.77554 1 2.68016 1.03951 2.60983 1.10983C2.53951 1.18016 2.5 1.27554 2.5 1.375V14.625C2.5 14.7245 2.53951 14.8198 2.60983 14.8902C2.68016 14.9605 2.77554 15 2.875 15H13.125C13.2245 15 13.3198 14.9605 13.3902 14.8902C13.4605 14.8198 13.5 14.7245 13.5 14.625V7H7.75ZM11 12H5V11H11V12ZM11 9.5H5V8.5H11V9.5Z" fill="white" />
                                </svg>
                            </div>
                            <span>Reportes</span>
                        </article>

                        <section className='mt-10 ml-5 mb-44'>

                            <div className='mb-8'>
                                <h3 class="block text-sm font-semibold text-gray-700 mb-4">Caja</h3>
                                <div className='flex gap-4'>
                                    <Link href="./reportes/caja/caja-de-empeno" className='flex items-center justify-center w-56 text-center bg-white border-2 border-gray-300 border-solid h-28'>
                                        <p className='font-bold text-gray-500'>Caja de Empeño</p>
                                    </Link>

                                    <Link href="./reportes/caja/caja-de-ventas" className='flex items-center justify-center w-56 text-center bg-white border-2 border-gray-300 border-solid h-28'>
                                        <p className='font-bold text-gray-500'>Caja de ventas</p>
                                    </Link>
                                </div>
                            </div>

                            <div className='mb-8'>
                                <h3 class="block text-sm font-semibold text-gray-700 mb-4">Clientes</h3>
                                <div className='flex gap-4'>
                                    <Link href="./reportes/clientes/orden-alfabetico" className='flex flex-col items-center justify-center w-56 gap-2 text-center bg-white border-2 border-gray-300 border-solid h-28'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="32" viewBox="0 0 30 32" fill="none">
                                            <g clip-path="url(#clip0_468_2198)">
                                                <path d="M20.6983 7.28571H23.859L22.5733 3.39286L22.359 2.55357C22.3352 2.3631 22.3233 2.24405 22.3233 2.19643H22.2519L22.1983 2.55357C22.1983 2.56548 22.1775 2.67262 22.1358 2.875C22.0942 3.07738 22.0495 3.25 22.0019 3.39286L20.6983 7.28571ZM12.5733 25.7143C12.5733 25.8571 12.5138 26 12.3947 26.1429L6.69832 31.8393C6.57927 31.9464 6.44237 32 6.28761 32C6.14475 32 6.00784 31.9464 5.87689 31.8393L0.162604 26.125C-0.0159669 25.9345 -0.0576336 25.7262 0.0376045 25.5C0.132843 25.2619 0.311414 25.1429 0.573319 25.1429H4.00189V0.571429C4.00189 0.404762 4.05546 0.267857 4.1626 0.160714C4.26975 0.0535714 4.40665 0 4.57332 0H8.00189C8.16856 0 8.30546 0.0535714 8.41261 0.160714C8.51975 0.267857 8.57332 0.404762 8.57332 0.571429V25.1429H12.0019C12.1686 25.1429 12.3055 25.1964 12.4126 25.3036C12.5197 25.4107 12.5733 25.5476 12.5733 25.7143ZM27.5019 27.8393V32H17.0733V30.3929L23.6626 20.9464C23.8055 20.7321 23.9305 20.5714 24.0376 20.4643L24.234 20.3036V20.25C24.2102 20.25 24.1715 20.253 24.118 20.2589C24.0644 20.2649 24.0197 20.2679 23.984 20.2679C23.8412 20.3036 23.6626 20.3214 23.4483 20.3214H19.3055V22.375H17.1626V18.2857H27.2876V19.875L20.6983 29.3393C20.6269 29.4345 20.5019 29.5893 20.3233 29.8036L20.1269 30V30.0357L20.3769 30C20.484 29.9762 20.6626 29.9643 20.9126 29.9643H25.3412V27.8393H27.5019ZM29.0912 11.8214V13.7143H23.9483V11.8214H25.2876L24.4483 9.25H20.109L19.2697 11.8214H20.609V13.7143H15.484V11.8214H16.734L20.8412 0H23.734L27.8412 11.8214H29.0912Z" fill="#686868" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_468_2198">
                                                    <rect width="29.1467" height="32" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p className='font-bold text-gray-500'>Por orden alfabético</p>
                                    </Link>

                                    <Link href="./reportes/clientes/mejor-puntuacion" className='flex flex-col items-center justify-center w-56 gap-2 text-center bg-white border-2 border-gray-300 border-solid h-28'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="32" viewBox="0 0 34 32" fill="none">
                                            <g clip-path="url(#clip0_468_2200)">
                                                <path d="M33.28 12.3C33.28 12.5933 33.1067 12.9133 32.76 13.26L25.5 20.34L27.22 30.34C27.2333 30.4333 27.24 30.5667 27.24 30.74C27.24 31.02 27.17 31.2567 27.03 31.45C26.89 31.6433 26.6867 31.74 26.42 31.74C26.1667 31.74 25.9 31.66 25.62 31.5L16.64 26.78L7.66 31.5C7.36667 31.66 7.1 31.74 6.86 31.74C6.58 31.74 6.37 31.6433 6.23 31.45C6.09 31.2567 6.02 31.02 6.02 30.74C6.02 30.66 6.03333 30.5267 6.06 30.34L7.78 20.34L0.5 13.26C0.166667 12.9 0 12.58 0 12.3C0 11.8067 0.373333 11.5 1.12 11.38L11.16 9.92L15.66 0.82C15.9133 0.273333 16.24 0 16.64 0C17.04 0 17.3667 0.273333 17.62 0.82L22.12 9.92L32.16 11.38C32.9067 11.5 33.28 11.8067 33.28 12.3Z" fill="#686868" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_468_2200">
                                                    <rect width="33.28" height="32" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p className='font-bold text-gray-500'>Por mejor puntuación</p>
                                    </Link>

                                    <Link href="#" className='flex items-center justify-center w-56 text-center bg-white border-2 border-gray-300 border-solid h-28'>
                                        <p className='font-bold text-gray-500'>Cumpleañeros del mes</p>
                                    </Link>

                                    <Link href="#" className='flex items-center justify-center w-56 text-center bg-white border-2 border-gray-300 border-solid h-28'>
                                        <p className='font-bold text-gray-500'>Sin actividad reciente</p>
                                    </Link>
                                </div>
                            </div>

                            <div className='mb-8'>
                                <h3 class="block text-sm font-semibold text-gray-700 mb-4">Préstamos</h3>
                                <div className='flex gap-4'>
                                    <Link href="./reportes/prestamos/vigentes" className='flex items-center justify-center w-56 text-center bg-white border-2 border-gray-300 border-solid h-28'>
                                        <p className='font-bold text-gray-500'>Préstamos vigentes</p>
                                    </Link>

                                    <Link href="#" className='flex items-center justify-center w-56 text-center bg-white border-2 border-gray-300 border-solid h-28'>
                                        <p className='font-bold text-gray-500'>Préstamos por vencer</p>
                                    </Link>

                                    <Link href="./reportes/prestamos/vencidos" className='flex items-center justify-center w-56 text-center bg-white border-2 border-gray-300 border-solid h-28'>
                                        <p className='font-bold text-gray-500'>Préstamos vencidos</p>
                                    </Link>

                                    <Link href="#" className='flex items-center justify-center w-56 text-center bg-white border-2 border-gray-300 border-solid h-28'>
                                        <p className='font-bold text-gray-500'>Préstamos expirados</p>
                                    </Link>

                                    <Link href="#" className='flex items-center justify-center w-56 text-center bg-white border-2 border-gray-300 border-solid h-28'>
                                        <p className='font-bold text-gray-500'>Préstamos liquidados</p>
                                    </Link>
                                </div>
                            </div>

                            <div className='mb-8'>
                                <h3 class="block text-sm font-semibold text-gray-700 mb-4">Compras, ventas y apartados</h3>
                                <div className='flex gap-4'>
                                    <Link href="./reportes/compras-ventas-apartados/compras" className='flex items-center justify-center w-56 text-center bg-white border-2 border-gray-300 border-solid h-28'>
                                        <p className='font-bold text-gray-500'>Compras</p>
                                    </Link>

                                    <Link href="#" className='flex items-center justify-center w-56 text-center bg-white border-2 border-gray-300 border-solid h-28'>
                                        <p className='font-bold text-gray-500'>Ventas</p>
                                    </Link>

                                    <Link href="#" className='flex items-center justify-center w-56 text-center bg-white border-2 border-gray-300 border-solid h-28'>
                                        <p className='font-bold text-gray-500'>Apartados vigentes</p>
                                    </Link>

                                    <Link href="#" className='flex items-center justify-center w-56 text-center bg-white border-2 border-gray-300 border-solid h-28'>
                                        <p className='font-bold text-gray-500'>Apartados vencidos</p>
                                    </Link>
                                </div>
                            </div>

                            <div className='mb-8'>
                                <h3 class="block text-sm font-semibold text-gray-700 mb-4">Inventario</h3>
                                <div className='flex gap-4'>
                                    <Link href="./reportes/inventario/prendas-empenadas" className='flex items-center justify-center w-56 text-center bg-white border-2 border-gray-300 border-solid h-28'>
                                        <p className='font-bold text-gray-500'>Prendas empeñadas</p>
                                    </Link>

                                    <Link href="#" className='flex items-center justify-center w-56 text-center bg-white border-2 border-gray-300 border-solid h-28'>
                                        <p className='font-bold text-gray-500'>Joyas empeñados</p>
                                    </Link>

                                    <Link href="#" className='flex items-center justify-center w-56 text-center bg-white border-2 border-gray-300 border-solid h-28'>
                                        <p className='font-bold text-gray-500'>Prendas en venta</p>
                                    </Link>

                                    <Link href="#" className='flex items-center justify-center w-56 text-center bg-white border-2 border-gray-300 border-solid h-28'>
                                        <p className='font-bold text-gray-500'>Joyas en venta</p>
                                    </Link>

                                    <Link href="#" className='flex items-center justify-center w-56 text-center bg-white border-2 border-gray-300 border-solid h-28'>
                                        <p className='font-bold text-gray-500'>Prendas apartadas</p>
                                    </Link>
                                </div>
                            </div>

                            <div className='mb-8'>
                                <h3 class="block text-sm font-semibold text-gray-700 mb-4">Respaldo</h3>
                                <div className='flex gap-4'>
                                    <Link href="#" className='flex items-center justify-center w-56 text-center bg-white border-2 border-gray-300 border-solid h-28'>
                                        <p className='font-bold text-gray-500'>Respaldo en Excel</p>
                                    </Link>
                                </div>
                            </div>

                        </section>

                    </div>
                </section>

            </div>

        </div>
    )
}

export default Reportes