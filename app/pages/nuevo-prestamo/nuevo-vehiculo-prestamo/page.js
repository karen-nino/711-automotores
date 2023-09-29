import React from 'react'
import { Topbar, Sidebar } from '@/app/layouts/dashboard'
import ModalFotos from '@/app/components/modal/modal-fotos/page'

const PrestamoVehiculo = () => {
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
                            <div className='flex flex-col'>
                                <span>Nuevo Préstamo</span>
                                <span>Alejandro Aguilar Islas</span>
                            </div>
                        </article>

                        <section className='mt-10 ml-5 w-[698px]'>

                            <div className='mb-5'>
                                <label for="categoria" class="block mb-2 text-sm font-medium text-gray-700">Categoría</label>
                                <select id="categoria" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                    <option selected>Selecciona una categoría</option>
                                    <option value="1">1</option>
                                </select>
                            </div>

                            <div className='mb-5'>
                                <label for="categoria" class="block mb-2 text-sm font-medium text-gray-700">Fecha de préstamo</label>
                                <select id="categoria" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                    <option selected>14/08/23</option>
                                </select>
                            </div>

                            <div className='mb-5'>
                                <label for="categoria" class="block mb-2 text-sm font-medium text-gray-700">Prendas en garantía</label>
                                <div className='px-5 py-4 bg-white'>

                                    <div className='mb-5'>
                                        <label for="categoria" class="block mb-2 text-sm font-medium text-gray-700">Tipo</label>
                                        <select id="categoria" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                            <option>Selecciona el tipo de prenda</option>
                                            <option selected value="vehiculo">Vehículo</option>
                                        </select>
                                    </div>

                                    <div className='mb-5'>
                                        <label for="marca" class="block mb-2 text-sm font-semibold text-gray-700">Marca</label>
                                        <input type="text" placeholder="Ciudad y estado/provincia" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                    </div>

                                    <div className='mb-5'>
                                        <label for="linea" class="block mb-2 text-sm font-semibold text-gray-700">Línea</label>
                                        <input type="text" placeholder="Ciudad y estado/provincia" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                    </div>

                                    <div className='mb-5'>
                                        <label for="modelo" class="block mb-2 text-sm font-semibold text-gray-700">Modelo</label>
                                        <input type="text" placeholder="Ciudad y estado/provincia" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                    </div>

                                    <div className='mb-5'>
                                        <label for="serie" class="block mb-2 text-sm font-semibold text-gray-700">Serie</label>
                                        <input type="text" placeholder="Ciudad y estado/provincia" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                    </div>

                                    <div className='mb-5'>
                                        <label for="kilometraje" class="block mb-2 text-sm font-semibold text-gray-700">Kilometraje</label>
                                        <input type="text" placeholder="Ciudad y estado/provincia" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                    </div>

                                    <div className='mb-5'>
                                        <label for="motor" class="block mb-2 text-sm font-semibold text-gray-700">Número de motor</label>
                                        <input type="text" placeholder="Ciudad y estado/provincia" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                    </div>

                                    <div className='mb-5'>
                                        <label for="obersavaciones" class="block mb-2 text-sm font-semibold text-gray-700">Observaciones</label>
                                        <input type="text" placeholder="Ciudad y estado/provincia" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                    </div>

                                    <div className='mb-5'>
                                        <label for="avaluo" class="block mb-2 text-sm font-semibold text-gray-700">Avalúo</label>
                                        <input type="text" placeholder="Ciudad y estado/provincia" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                    </div>

                                    <div className='mb-5'>
                                        <label for="prestamo" class="block mb-2 text-sm font-semibold text-gray-700">Préstamo</label>
                                        <input type="text" placeholder="Ciudad y estado/provincia" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                    </div>

                                    <div className='mb-5'>
                                        <label for="ubicacion" class="block mb-2 text-sm font-semibold text-gray-700">Ubicación de resguardo</label>
                                        <input type="text" placeholder="Ciudad y estado/provincia" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                    </div>

                                    <div className='mb-5'>
                                        <label for="estado" class="block mb-2 text-sm font-medium text-gray-700">Tipo</label>
                                        <select id="estado" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                            <option selected>Empeñado</option>
                                            <option value="estado">Apartado</option>
                                            <option value="estado">En venta</option>
                                        </select>
                                    </div>

                                    <div className='mb-5'>
                                        <label for="dueño" class="block mb-2 text-sm font-semibold text-gray-700">Dueño original</label>
                                        <input type="text" placeholder="Ciudad y estado/provincia" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                    </div>

                                </div>


                                <div className='px-5 py-4 mt-8 mb-8 bg-white'>

                                    <div className='flex justify-between'>
                                        <p>Fotografías</p>
                                        <label for="tw-modal" className='text-blue-400 cursor-pointer'>+ Agregar fotos</label>
                                    </div>
                                    < ModalFotos/>                                        

                                </div>
                            </div>


                            <a className='block w-48 py-3 mb-8 text-xs tracking-wide text-white bg-green-500 border border-b border-gray-300 rounded cursor-pointer item text-gray active:bg-green-700'>
                                <div className='flex justify-center'>
                                    <span className='text-center'>Agregar otra prenda</span>
                                </div>
                            </a>

                            <article className='pb-10'>

                                <div className='w-full px-4 py-6 text-gray-500 bg-white'>
                                    <ul className='text-sm'>
                                        <li className='pb-3'>
                                            <label for="categoria" class="block mb-2 text-sm font-medium text-gray-700">Préstamo total</label>
                                            <p className='text-3xl font-bold text-gray-700'>$0.00</p>
                                        </li>
                                        <li className='pb-3'>
                                            <label for="categoria" class="block mb-2 text-sm font-medium text-gray-700">Interés al finalizar el plazo</label>
                                            <p className='text-3xl font-bold text-gray-700'>$0.00</p>
                                        </li>
                                        <li className='pb-3'>
                                            <label for="categoria" class="block mb-2 text-sm font-medium text-gray-700">Total a pagar al finalizar el plazo</label>
                                            <p className='text-3xl font-bold text-gray-700'>$0.00</p>
                                        </li>
                                    </ul>
                                </div>

                            </article>


                        </section>

                    </div>
                </section>

            </div>

        </div>
    )
}

export default PrestamoVehiculo