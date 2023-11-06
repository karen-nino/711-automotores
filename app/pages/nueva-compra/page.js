import React from 'react'
import { Topbar, Sidebar } from '@/app/layouts/dashboard'
import Link from 'next/link'


const NuevaCompra = () => {
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
                    <div className='h-screen pb-64 overflow-auto bg-gray-200'>

                        <article className='flex items-center pl-6 text-base text-white bg-gray-700 h-14'>
                            <Link href="./clientes/informacion-cliente" className='mr-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='cursor-pointer fill-white hover:fill-gray-400'>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15 20L7 12L15 4L17 6L11 12L17 18L15 20Z" />
                                </svg>
                            </Link>
                            <div className='flex flex-col'>
                                <span>Comprar prenda</span>
                                <span>Alejandro Aguilar Islas</span>
                            </div>
                        </article>

                        <section className='mt-10 ml-5 w-[698px]'>


                            <div className='mb-5'>
                                <label for="categoria" class="block mb-2 text-sm font-medium text-gray-700">Prenda</label>
                                <div className='px-5 py-4 bg-white'>

                                    <div className='mb-5'>
                                        <label for="categoria" class="block mb-2 text-sm font-medium text-gray-700">Tipo</label>
                                        <select id="categoria" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                            <option>Selecciona el tipo de prenda</option>
                                            <option selected value="vehiculo">Vehículo</option>
                                        </select>
                                    </div>

                                    <div className='mb-5'>
                                        <label for="categoria" class="block mb-2 text-sm font-medium text-gray-700">Tipo de movimiento</label>
                                        <select id="categoria" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                            <option selected>Selecciona el tipo de movimiento</option>
                                            <option value="empeño">Empeño</option>
                                            <option value="venta">Venta</option>
                                            <option value="consignacion">Consignación</option>
                                        </select>
                                    </div>

                                    <div className='mb-5'>
                                        <label for="marca" class="block mb-2 text-sm font-semibold text-gray-700">Marca</label>
                                        <input type="text" placeholder="Marca" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                    </div>

                                    <div className='mb-5'>
                                        <label for="linea" class="block mb-2 text-sm font-semibold text-gray-700">Línea</label>
                                        <input type="text" placeholder="Línea" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                    </div>

                                    <div className='mb-5'>
                                        <label for="modelo" class="block mb-2 text-sm font-semibold text-gray-700">Modelo</label>
                                        <input type="text" placeholder="Modelo" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                    </div>

                                    <div className='mb-5'>
                                        <label for="serie" class="block mb-2 text-sm font-semibold text-gray-700">Serie</label>
                                        <input type="text" placeholder="Serie" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                    </div>

                                    <div className='mb-5'>
                                        <label for="kilometraje" class="block mb-2 text-sm font-semibold text-gray-700">Kilometraje</label>
                                        <input type="text" placeholder="Kilometraje" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                    </div>

                                    <div className='mb-5'>
                                        <label for="obersavaciones" class="block mb-2 text-sm font-semibold text-gray-700">Observaciones</label>
                                        <input type="text" placeholder="Observaciones" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                    </div>

                                    <div className='mb-5'>
                                        <label for="dueño" class="block mb-2 text-sm font-semibold text-gray-700">Precio de compra</label>
                                        <input type="text" placeholder="Dueño original" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                    </div>

                                    <div className='mb-5'>
                                        <label for="dueño" class="block mb-2 text-sm font-semibold text-gray-700">Precio de venta</label>
                                        <input type="text" placeholder="Dueño original" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                    </div>

                                </div>

                            </div>


                        </section>

                    </div>
                </section>

            </div>

        </div>
    )
}

export default NuevaCompra