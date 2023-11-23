import React from 'react'
import { Topbar, Sidebar } from '@/app/layouts/dashboard'
import Link from 'next/link'


const InformacionCliente = () => {
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
                            <Link href="./" className='mr-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='cursor-pointer fill-white hover:fill-gray-400'>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15 20L7 12L15 4L17 6L11 12L17 18L15 20Z" />
                                </svg>
                            </Link>
                            <span>Información del cliente</span>

                            <div className='absolute flex flex-col items-center justify-center right-20 top-20'>

                                <button className='flex items-center justify-center w-16 h-16 mb-2 bg-red-500 rounded-full'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" viewBox="0 0 25 28" fill="none">
                                        <g clip-path="url(#clip0_345_3116)">
                                            <path d="M22.75 11.375H14.875V3.5C14.875 2.53367 14.0913 1.75 13.125 1.75H11.375C10.4087 1.75 9.625 2.53367 9.625 3.5V11.375H1.75C0.783672 11.375 0 12.1587 0 13.125V14.875C0 15.8413 0.783672 16.625 1.75 16.625H9.625V24.5C9.625 25.4663 10.4087 26.25 11.375 26.25H13.125C14.0913 26.25 14.875 25.4663 14.875 24.5V16.625H22.75C23.7163 16.625 24.5 15.8413 24.5 14.875V13.125C24.5 12.1587 23.7163 11.375 22.75 11.375Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_345_3116">
                                                <rect width="24.5" height="28" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </button>

                                <ul>
                                    <li>
                                        <a href="../nuevo-prestamo" className='flex items-center justify-center w-16 h-16 mb-2 bg-red-500 rounded-full'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="19" viewBox="0 0 28 19" fill="none">
                                                <g clip-path="url(#clip0_371_993)">
                                                    <path d="M11.2 13.0667H16.8V11.6667H14.9333V5.13333H13.2708L11.1125 7.13125L12.2354 8.29792C12.6438 7.93819 12.9111 7.66111 13.0375 7.46667H13.0667V11.6667H11.2V13.0667ZM18.6667 9.33333C18.6667 10.0139 18.5646 10.7042 18.3604 11.4042C18.1563 12.1042 17.867 12.7556 17.4927 13.3583C17.1184 13.9611 16.625 14.4521 16.0125 14.8312C15.4 15.2104 14.7292 15.4 14 15.4C13.2708 15.4 12.6 15.2104 11.9875 14.8312C11.375 14.4521 10.8816 13.9611 10.5073 13.3583C10.133 12.7556 9.84375 12.1042 9.63958 11.4042C9.43542 10.7042 9.33333 10.0139 9.33333 9.33333C9.33333 8.65278 9.43542 7.9625 9.63958 7.2625C9.84375 6.5625 10.133 5.91111 10.5073 5.30833C10.8816 4.70556 11.375 4.21458 11.9875 3.83542C12.6 3.45625 13.2708 3.26667 14 3.26667C14.7292 3.26667 15.4 3.45625 16.0125 3.83542C16.625 4.21458 17.1184 4.70556 17.4927 5.30833C17.867 5.91111 18.1563 6.5625 18.3604 7.2625C18.5646 7.9625 18.6667 8.65278 18.6667 9.33333ZM26.1333 13.0667V5.6C25.1028 5.6 24.2229 5.23542 23.4938 4.50625C22.7646 3.77708 22.4 2.89722 22.4 1.86667H5.6C5.6 2.89722 5.23542 3.77708 4.50625 4.50625C3.77708 5.23542 2.89722 5.6 1.86667 5.6V13.0667C2.89722 13.0667 3.77708 13.4312 4.50625 14.1604C5.23542 14.8896 5.6 15.7694 5.6 16.8H22.4C22.4 15.7694 22.7646 14.8896 23.4938 14.1604C24.2229 13.4312 25.1028 13.0667 26.1333 13.0667ZM28 0.933333V17.7333C28 17.9861 27.9076 18.2049 27.7229 18.3896C27.5382 18.5743 27.3194 18.6667 27.0667 18.6667H0.933333C0.680556 18.6667 0.461806 18.5743 0.277083 18.3896C0.0923611 18.2049 0 17.9861 0 17.7333V0.933333C0 0.680556 0.0923611 0.461806 0.277083 0.277083C0.461806 0.0923611 0.680556 0 0.933333 0H27.0667C27.3194 0 27.5382 0.0923611 27.7229 0.277083C27.9076 0.461806 28 0.680556 28 0.933333Z" fill="white" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_371_993">
                                                        <rect width="28" height="18.6667" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="../nueva-compra" className='flex items-center justify-center w-16 h-16 mb-2 bg-red-500 rounded-full'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                                <path d="M9.625 24.5C10.5915 24.5 11.375 23.7165 11.375 22.75C11.375 21.7835 10.5915 21 9.625 21C8.6585 21 7.875 21.7835 7.875 22.75C7.875 23.7165 8.6585 24.5 9.625 24.5Z" fill="white" />
                                                <path d="M21.875 24.5C22.8415 24.5 23.625 23.7165 23.625 22.75C23.625 21.7835 22.8415 21 21.875 21C20.9085 21 20.125 21.7835 20.125 22.75C20.125 23.7165 20.9085 24.5 21.875 24.5Z" fill="white" />
                                                <path d="M9.17547 16.625H23.4675L25.5675 6.125H7.32211L6.85891 3.5H1.75V5.25H5.39109L8.01609 20.125H23.625V18.375H9.48391L9.17547 16.625Z" fill="white" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>

                            </div>


                        </article>

                        <section className='mt-10 ml-5 w-[698px] mb-44'>

                            <article className='pb-10'>
                                <div className='flex items-center justify-between w-full p-4 text-white bg-gray-700'>
                                    <div>
                                        <h3>Alejandro Aguilar Islas</h3>
                                        <div className='flex'>
                                            <p className='pr-2'>Puntuación:</p>
                                            <span>0</span>
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-end'>
                                        <Link href="#" className='p-2 mb-2 rounded-sm cursor-pointer hover:bg-gray-800'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                <g clip-path="url(#clip0_555_3030)">
                                                    <path d="M4.25391 16.5L5.32031 15.4336L2.56641 12.6797L1.5 13.7461V15H3V16.5H4.25391ZM10.3828 5.625C10.3828 5.45312 10.2969 5.36719 10.125 5.36719C10.0469 5.36719 9.98047 5.39453 9.92578 5.44922L3.57422 11.8008C3.51953 11.8555 3.49219 11.9219 3.49219 12C3.49219 12.1719 3.57812 12.2578 3.75 12.2578C3.82812 12.2578 3.89453 12.2305 3.94922 12.1758L10.3008 5.82422C10.3555 5.76953 10.3828 5.70312 10.3828 5.625ZM9.75 3.375L14.625 8.25L4.875 18H0V13.125L9.75 3.375ZM17.7539 4.5C17.7539 4.91406 17.6094 5.26563 17.3203 5.55469L15.375 7.5L10.5 2.625L12.4453 0.691406C12.7266 0.394531 13.0781 0.246094 13.5 0.246094C13.9141 0.246094 14.2695 0.394531 14.5664 0.691406L17.3203 3.43359C17.6094 3.73828 17.7539 4.09375 17.7539 4.5Z" fill="white" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_555_3030">
                                                        <rect width="18" height="18" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </Link>
                                        <p>Clasificación: A</p>
                                    </div>
                                </div>

                                <div className='w-full px-4 py-6 text-gray-500 bg-white'>
                                    <ul className='text-sm'>
                                        <li className='pb-3'>Email</li>
                                        <li className='pb-3'>Teléfono</li>
                                        <li className='pb-3'>Domicilio</li>
                                        <li className='pb-3'>Nacimiento</li>
                                        <li className='pb-3'>ID</li>
                                        <li className='pb-3'>Cotitular</li>
                                    </ul>
                                </div>
                            </article>


                            <div className='mb-10'>
                                <label for="prestamos" class="block mb-2 text-sm font-semibold text-gray-700">Préstamos</label>
                                <div className='flex gap-2 px-5 py-4 text-xs tracking-wide text-gray-600 bg-green-400 rounded place-content-around text-gray '>

                                    <div className='flex flex-col items-center justify-center w-32'>
                                        <p className='text-sm'>ACTIVOS</p>
                                        <p className='text-3xl'>0</p>
                                    </div>

                                    <div className='flex flex-col items-center justify-center w-32'>
                                        <p className='text-sm'>EXPIRADOS</p>
                                        <p className='text-3xl'>0</p>
                                    </div>

                                    <div className='flex flex-col items-center justify-center w-32'>
                                        <p className='text-sm'>LIQUIDADOS</p>
                                        <p className='text-3xl'>0</p>
                                    </div>

                                </div>
                            </div>

                            <div className='mb-10'>
                                <label for="prestamos" class="block mb-2 text-sm font-semibold text-gray-700">Préstamos</label>
                                <div className='flex gap-2 px-5 py-4 text-xs tracking-wide text-gray-600 bg-green-400 rounded place-content-around text-gray '>

                                    <div className='flex flex-col items-center justify-center w-32'>
                                        <p className='text-sm'>EMPEÑADO</p>
                                        <p className='text-3xl'>0</p>
                                    </div>

                                    <div className='flex flex-col items-center justify-center w-32'>
                                        <p className='text-sm'>DESEMPEÑADO</p>
                                        <p className='text-3xl'>0</p>
                                    </div>

                                    <div className='flex flex-col items-center justify-center w-32'>
                                        <p className='text-sm'>PERDIDO</p>
                                        <p className='text-3xl'>0</p>
                                    </div>

                                    <div className='flex flex-col items-center justify-center w-32'>
                                        <p className='text-sm'>VENCIDO</p>
                                        <p className='text-3xl'>0</p>
                                    </div>

                                </div>
                            </div>

                            <div className='mb-10'>
                                <label for="fotografias" class="block mb-2 text-sm font-semibold text-gray-700">Fotografías</label>
                                <a className='block px-5 py-3 text-xs tracking-wide text-gray-600 bg-white border border-b border-gray-300 rounded cursor-pointer text-gray active:bg-gray-300 w-44'>
                                    <div className='flex justify-center'>
                                        <span className='text-center'>Agregar foto</span>
                                    </div>
                                </a>
                            </div>

                        </section>

                    </div>
                </section>

            </div>

        </div>
    )
}

export default InformacionCliente