import React from 'react'
import { Topbar, Sidebar } from '@/app/layouts/dashboard'


const InformacionCliente = () => {
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
                            <span>Información del cliente</span>
                        </article>

                        <section className='mt-10 ml-5 w-[698px]'>

                            <article className='pb-10'>
                                <div className='w-full p-4 text-white bg-gray-700'>
                                    <h3>Alejandro Aguilar Islas</h3>
                                    <div className='flex'>
                                        <p className='pr-2'>Puntuación:</p>
                                        <span>0</span>
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
                                    
                                    <div className='flex flex-col items-center justify-center w-32'>
                                        <p className='text-sm text-center'>% DE LIQUIDACION</p>
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