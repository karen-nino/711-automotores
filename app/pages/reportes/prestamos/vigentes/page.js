import React from 'react'
import { Topbar, Sidebar } from '@/app/layouts/dashboard'
import Link from 'next/link'

const PrestamosVigentes = () => {
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
                                <Link href="../../reportes" className='mr-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='cursor-pointer fill-white hover:fill-gray-400'>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15 20L7 12L15 4L17 6L11 12L17 18L15 20Z" />
                                    </svg>
                                </Link>
                                <span>Préstamos vigentes</span>
                            </article>

                            <article className='flex items-center justify-between px-6 text-base bg-white h-14'>
                                <div className='h-full bg-gray-300 w-80'></div>
                                <div className='flex gap-3'>
                                    <Link href="#" className='block px-5 py-3 text-xs tracking-wide text-gray-600 bg-white border border-b border-gray-300 rounded cursor-pointer text-gray active:bg-gray-300'>
                                        <div className='flex justify-center'>
                                            <span className='text-center'>Volver</span>
                                        </div>
                                    </Link>
                                    <Link href="#" className='block px-5 py-3 text-xs tracking-wide text-white bg-green-500 border rounded cursor-pointer active:bg-green-600'>
                                        <div className='flex justify-center'>
                                            <span className='text-center'>Imprimir</span>
                                        </div>
                                    </Link>
                                </div>
                            </article>

                            <section className='mx-5 mt-10 mb-44'>

                                <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                    <div class="inline-block min-w-full shadow rounded overflow-hidden">
                                        <table class="min-w-full leading-normal">
                                            <thead>
                                                <tr>
                                                    <th
                                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                        Fecha de préstamo
                                                    </th>
                                                    <th
                                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                        Fecha de vencimiento
                                                    </th>
                                                    <th
                                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                        Contrato
                                                    </th>
                                                    <th
                                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                        Cliente
                                                    </th>
                                                    <th
                                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                        Prenda
                                                    </th>
                                                    <th
                                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                        Monto del préstamo
                                                    </th>
                                                    <th
                                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                        Abonado a capital
                                                    </th>
                                                    <th
                                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                        Intereses pagados
                                                    </th>
                                                    <th
                                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                        Recargos extemp. pagados
                                                    </th>
                                                    <th
                                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                        Reemplazos de la boleta
                                                    </th>
                                                    <th
                                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                        Descuentos
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/* <tr>
                                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <div class="flex items-center">
                                                            <p class="text-gray-900 whitespace-no-wrap">
                                                                Total
                                                            </p>
                                                        </div>
                                                    </td>
                                                </tr> */}
                                            </tbody>
                                        </table>
                                        <div
                                            class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
                                            <span class="text-xs xs:text-sm text-gray-900">
                                                Showing 1 to 4 of 50 Entries
                                            </span>
                                            <div class="inline-flex mt-2 xs:mt-0">
                                                <button
                                                    class="text-sm text-blue-50 transition duration-150 hover:bg-blue-500 bg-blue-600 font-semibold py-2 px-4 rounded-l">
                                                    Prev
                                                </button>
                                                &nbsp; &nbsp;
                                                <button
                                                    class="text-sm text-blue-50 transition duration-150 hover:bg-blue-500 bg-blue-600 font-semibold py-2 px-4 rounded-r">
                                                    Next
                                                </button>
                                            </div>
                                        </div>
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

export default PrestamosVigentes