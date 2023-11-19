import React from 'react'
import { Topbar, Sidebar } from '@/app/layouts/dashboard'
import ModalFotos from '@/app/components/modal/modal-fotos/page'
import Link from 'next/link'
import ModalAvaluo from '@/app/components/modal/modal-avaluo/page'
import ModalImpuestos from '@/app/components/modal/modal-impuestos/page'

const NuevoPrestamo = () => {
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
                            <Link href="./clientes/informacion-cliente" className='mr-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='cursor-pointer fill-white hover:fill-gray-400'>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15 20L7 12L15 4L17 6L11 12L17 18L15 20Z" />
                                </svg>
                            </Link>
                            <div className='flex flex-col'>
                                <span>Nuevo Préstamo</span>
                                <span>Alejandro Aguilar Islas</span>
                            </div>
                        </article>

                        <section className='mt-10 ml-5 w-[698px] mb-64'>

                            {/* <div className='mb-5'>
                                <label for="categoria" class="block mb-2 text-sm font-medium text-gray-700">Categoría</label>
                                <select id="categoria" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                    <option selected>Selecciona una categoría</option>
                                    <option value="1">1</option>
                                </select>
                            </div> */}

                            <div className='mb-5'>
                                <label for="categoria" class="block mb-2 text-sm font-medium text-gray-700">Agregar impuestos</label>
                                <a className='block px-5 py-3 text-xs tracking-wide text-white bg-blue-500 border border-b border-gray-300 rounded cursor-pointer text-gray active:bg-gray-300 w-44'>
                                    <div className='flex justify-center'>
                                        <label for="tw-modal-impuestos" className='text-center'>Agregar Impuestos</label>
                                    </div>
                                    < ModalImpuestos />
                                </a>
                            </div>

                            <div className='mb-5'>
                                <label for="periodo" class="block mb-2 text-sm font-medium text-gray-700">Periodo</label>
                                <select id="preiodo" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                    <option selected>Mensual</option>
                                    <option value="quincinal">Quincenal</option>
                                    <option value="semanal">Semanal</option>
                                    <option value="diario">Diario</option>
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
                                        <label for="categoria" class="block mb-2 text-sm font-semibold text-gray-700">Tipo</label>
                                        <select id="categoria" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                            <option selected>Selecciona el tipo de prenda</option>
                                            <option value="vehiculo">Autos</option>
                                            <option value="vehiculo">Motos</option>
                                            <option value="maquinaria">Maquinaria pesada</option>
                                            <option value="maquinaria">Otros</option>
                                        </select>
                                    </div>

                                    <div className='mb-5'>
                                        <label for="categoria" class="block mb-2 text-sm font-semibold text-gray-700">Marca</label>
                                        <select id="categoria" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                            <option selected value="marca">Selecciona</option>
                                            <option>Marca</option>
                                            <option>Marca</option>
                                            <option>Otros</option>
                                        </select>
                                    </div>

                                    <div className='mb-5'>
                                        <label for="linea" class="block mb-2 text-sm font-semibold text-gray-700">Otros (Marca)</label>
                                        <input type="text" placeholder="Línea" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                    </div>

                                    <div className='mb-5'>
                                        <label for="linea" class="block mb-2 text-sm font-semibold text-gray-700">Marca - Motos</label>
                                        <div className='flex gap-4'>
                                            <select id="Marca" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                                <option selected value="marca">Marca</option>
                                            </select>
                                            <select id="año" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                                <option selected value="marca">Año</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className='mb-5'>
                                        <label for="linea" class="block mb-2 text-sm font-semibold text-gray-700">Submarca - Motos</label>
                                        <input type="text" placeholder="Línea" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
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
                                        <label for="modelo" class="block mb-2 text-sm font-semibold text-gray-700">Versión</label>
                                        <input type="text" placeholder="Versión" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
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
                                        <label for="motor" class="block mb-2 text-sm font-semibold text-gray-700">Número de motor</label>
                                        <input type="text" placeholder="Número de motor" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                    </div>

                                    <div className='mb-5'>
                                        <label for="obersavaciones" class="block mb-2 text-sm font-semibold text-gray-700">Observaciones</label>
                                        <input type="text" placeholder="Observaciones" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                    </div>

                                    <div className='mb-5'>
                                        <label for="avaluo" class="block mb-2 text-sm font-semibold text-gray-700">Avalúo</label>
                                        <a className='block px-5 py-3 text-xs tracking-wide text-gray-600 bg-white border border-b border-gray-300 rounded cursor-pointer text-gray active:bg-gray-300 w-44'>
                                            <div className='flex justify-center'>
                                                <label for="tw-modal-avaluo" className='text-center'>Agregar Avalúo</label>
                                                < ModalAvaluo />
                                            </div>
                                        </a>
                                    </div>

                                    <div className='mb-5'>
                                        <label for="prestamo" class="block mb-2 text-sm font-semibold text-gray-700">Préstamo</label>
                                        <input type="text" placeholder="Préstamo" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                    </div>


                                    <div className='mb-5'>
                                        <label for="prestamo" class="block mb-2 text-sm font-semibold text-gray-700">Plazo</label>
                                        <div className='flex gap-4'>
                                            <select id="Marca" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                                <option selected value="marca">Día</option>
                                            </select>
                                            <select id="año" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                                <option selected value="marca">Mes</option>
                                            </select>
                                            <select id="año" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                                <option selected value="marca">Año</option>
                                            </select>
                                            <button className='flex justify-center items-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 w-40 p-2.5'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path d="M1.25 17.8125C1.25 18.0611 1.34877 18.2996 1.52459 18.4754C1.7004 18.6512 1.93886 18.75 2.1875 18.75H17.8125C18.0611 18.75 18.2996 18.6512 18.4754 18.4754C18.6512 18.2996 18.75 18.0611 18.75 17.8125V6.875H1.25V17.8125ZM13.75 8.28125C13.75 8.23981 13.7665 8.20007 13.7958 8.17076C13.8251 8.14146 13.8648 8.125 13.9062 8.125H15.4688C15.5102 8.125 15.5499 8.14146 15.5792 8.17076C15.6085 8.20007 15.625 8.23981 15.625 8.28125V9.84375C15.625 9.88519 15.6085 9.92493 15.5792 9.95424C15.5499 9.98354 15.5102 10 15.4688 10H13.9062C13.8648 10 13.8251 9.98354 13.7958 9.95424C13.7665 9.92493 13.75 9.88519 13.75 9.84375V8.28125ZM13.75 11.4062C13.75 11.3648 13.7665 11.3251 13.7958 11.2958C13.8251 11.2665 13.8648 11.25 13.9062 11.25H15.4688C15.5102 11.25 15.5499 11.2665 15.5792 11.2958C15.6085 11.3251 15.625 11.3648 15.625 11.4062V12.9688C15.625 13.0102 15.6085 13.0499 15.5792 13.0792C15.5499 13.1085 15.5102 13.125 15.4688 13.125H13.9062C13.8648 13.125 13.8251 13.1085 13.7958 13.0792C13.7665 13.0499 13.75 13.0102 13.75 12.9688V11.4062ZM10.625 8.28125C10.625 8.23981 10.6415 8.20007 10.6708 8.17076C10.7001 8.14146 10.7398 8.125 10.7812 8.125H12.3438C12.3852 8.125 12.4249 8.14146 12.4542 8.17076C12.4835 8.20007 12.5 8.23981 12.5 8.28125V9.84375C12.5 9.88519 12.4835 9.92493 12.4542 9.95424C12.4249 9.98354 12.3852 10 12.3438 10H10.7812C10.7398 10 10.7001 9.98354 10.6708 9.95424C10.6415 9.92493 10.625 9.88519 10.625 9.84375V8.28125ZM10.625 11.4062C10.625 11.3648 10.6415 11.3251 10.6708 11.2958C10.7001 11.2665 10.7398 11.25 10.7812 11.25H12.3438C12.3852 11.25 12.4249 11.2665 12.4542 11.2958C12.4835 11.3251 12.5 11.3648 12.5 11.4062V12.9688C12.5 13.0102 12.4835 13.0499 12.4542 13.0792C12.4249 13.1085 12.3852 13.125 12.3438 13.125H10.7812C10.7398 13.125 10.7001 13.1085 10.6708 13.0792C10.6415 13.0499 10.625 13.0102 10.625 12.9688V11.4062ZM10.625 14.5312C10.625 14.4898 10.6415 14.4501 10.6708 14.4208C10.7001 14.3915 10.7398 14.375 10.7812 14.375H12.3438C12.3852 14.375 12.4249 14.3915 12.4542 14.4208C12.4835 14.4501 12.5 14.4898 12.5 14.5312V16.0938C12.5 16.1352 12.4835 16.1749 12.4542 16.2042C12.4249 16.2335 12.3852 16.25 12.3438 16.25H10.7812C10.7398 16.25 10.7001 16.2335 10.6708 16.2042C10.6415 16.1749 10.625 16.1352 10.625 16.0938V14.5312ZM7.5 11.4062C7.5 11.3648 7.51646 11.3251 7.54576 11.2958C7.57507 11.2665 7.61481 11.25 7.65625 11.25H9.21875C9.26019 11.25 9.29993 11.2665 9.32924 11.2958C9.35854 11.3251 9.375 11.3648 9.375 11.4062V12.9688C9.375 13.0102 9.35854 13.0499 9.32924 13.0792C9.29993 13.1085 9.26019 13.125 9.21875 13.125H7.65625C7.61481 13.125 7.57507 13.1085 7.54576 13.0792C7.51646 13.0499 7.5 13.0102 7.5 12.9688V11.4062ZM7.5 14.5312C7.5 14.4898 7.51646 14.4501 7.54576 14.4208C7.57507 14.3915 7.61481 14.375 7.65625 14.375H9.21875C9.26019 14.375 9.29993 14.3915 9.32924 14.4208C9.35854 14.4501 9.375 14.4898 9.375 14.5312V16.0938C9.375 16.1352 9.35854 16.1749 9.32924 16.2042C9.29993 16.2335 9.26019 16.25 9.21875 16.25H7.65625C7.61481 16.25 7.57507 16.2335 7.54576 16.2042C7.51646 16.1749 7.5 16.1352 7.5 16.0938V14.5312ZM4.375 11.4062C4.375 11.3648 4.39146 11.3251 4.42076 11.2958C4.45007 11.2665 4.48981 11.25 4.53125 11.25H6.09375C6.13519 11.25 6.17493 11.2665 6.20424 11.2958C6.23354 11.3251 6.25 11.3648 6.25 11.4062V12.9688C6.25 13.0102 6.23354 13.0499 6.20424 13.0792C6.17493 13.1085 6.13519 13.125 6.09375 13.125H4.53125C4.48981 13.125 4.45007 13.1085 4.42076 13.0792C4.39146 13.0499 4.375 13.0102 4.375 12.9688V11.4062ZM4.375 14.5312C4.375 14.4898 4.39146 14.4501 4.42076 14.4208C4.45007 14.3915 4.48981 14.375 4.53125 14.375H6.09375C6.13519 14.375 6.17493 14.3915 6.20424 14.4208C6.23354 14.4501 6.25 14.4898 6.25 14.5312V16.0938C6.25 16.1352 6.23354 16.1749 6.20424 16.2042C6.17493 16.2335 6.13519 16.25 6.09375 16.25H4.53125C4.48981 16.25 4.45007 16.2335 4.42076 16.2042C4.39146 16.1749 4.375 16.1352 4.375 16.0938V14.5312ZM17.8125 2.5H15.6281V1.25H13.7531V2.5H6.24687V1.25H4.37187V2.5H2.1875C2.06485 2.49897 1.94322 2.52222 1.8296 2.5684C1.71597 2.61459 1.61261 2.6828 1.52547 2.76911C1.43833 2.85542 1.36912 2.95811 1.32185 3.07129C1.27457 3.18446 1.25015 3.30587 1.25 3.42852V5.625H18.75V3.42852C18.7498 3.30587 18.7254 3.18446 18.6782 3.07129C18.6309 2.95811 18.5617 2.85542 18.4745 2.76911C18.3874 2.6828 18.284 2.61459 18.1704 2.5684C18.0568 2.52222 17.9351 2.49897 17.8125 2.5Z" fill="#616161" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    <div className='mb-5'>
                                        <label for="ubicacion" class="block mb-2 text-sm font-semibold text-gray-700">Ubicación</label>
                                        <select id="estado" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                            <option selected>Matilde</option>
                                            <option value="estado">Querétaro</option>
                                            <option value="estado">711</option>
                                            <option value="estado">Otros</option>
                                        </select>
                                    </div>

                                    <div className='mb-5'>
                                        <label for="ubicacion" class="block mb-2 text-sm font-semibold text-gray-700">Otros (Ubicación)</label>
                                        <input type="text" placeholder="Ubicación de resguardo" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                    </div>

                                    <div className='mb-5'>
                                        <label for="estado" class="block mb-2 text-sm font-medium text-gray-700">Estado</label>
                                        <select id="estado" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                            <option selected>Empeñado</option>
                                            <option value="estado">Apartado</option>
                                            <option value="estado">En venta</option>
                                        </select>
                                    </div>

                                    <div className='mb-5'>
                                        <label for="dueño" class="block mb-2 text-sm font-semibold text-gray-700">Responsable</label>
                                        <input type="text" placeholder="Pedro Casa Aguilar" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" disabled />
                                    </div>

                                </div>


                                <div className='px-5 py-4 mt-8 mb-8 bg-white'>

                                    <div className='flex justify-between'>
                                        <p>Fotografías</p>
                                        <label for="tw-modal-fotos" className='text-blue-400 cursor-pointer'>+ Agregar fotos</label>
                                    </div>
                                    < ModalFotos />

                                </div>
                            </div>

                            <article className='pb-10'>

                                <div className='w-full px-4 py-6 text-gray-500 bg-white'>
                                    <div className='flex justify-between'>
                                        <div className='flex flex-col justify-between w-1/2'>
                                            <div className='mt-4'>
                                                <p class="block mb-2 text-sm font-medium text-gray-700">Préstamo total</p>
                                                <p className='text-4xl font-bold text-gray-700'>$0.00</p>
                                            </div>
                                            <div>
                                                <p class="block mb-2 text-sm  text-gray-700">Fecha de inicio: 01/01/2023</p>
                                            </div>
                                        </div>
                                        <div className='w-1/2 bg-gray-100'>
                                            <ul className='p-4 text-sm'>
                                                <li className='flex justify-between pb-3'>
                                                    <div>
                                                        <label for="categoria" class="block mb-2 text-sm font-medium text-gray-700">Interés a medio mes</label>
                                                        <p className='text-3xl font-bold text-gray-700'>$0.00</p>
                                                    </div>
                                                    <div>
                                                        <label for="categoria" class="block mb-2 text-sm text-gray-700">01/01/2023</label>
                                                    </div>
                                                </li>
                                                <li className='flex justify-between pb-3'>
                                                    <div>
                                                        <label for="categoria" class="block mb-2 text-sm font-medium text-gray-700">Interés al fin de mes</label>
                                                        <p className='text-3xl font-bold text-gray-700'>$0.00</p>
                                                    </div>
                                                    <div>
                                                        <label for="categoria" class="block mb-2 text-sm text-gray-700">01/01/2023</label>
                                                    </div>
                                                </li>
                                                <li className='flex justify-between pb-3'>
                                                    <div>
                                                        <label for="categoria" class="block mb-2 text-sm font-medium text-gray-700">Interés al finalizar el plazo</label>
                                                        <p className='text-3xl font-bold text-gray-700'>$0.00</p>
                                                    </div>
                                                    <div>
                                                        <label for="categoria" class="block mb-2 text-sm text-gray-700">01/01/2023</label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </article>


                        </section>

                    </div>
                </section>

            </div>

        </div>
    )
}

export default NuevoPrestamo