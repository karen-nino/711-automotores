import React from 'react'

const ModalImpuestos = () => {
    return (
        <div>
            <input type="checkbox" id="tw-modal-impuestos" class="peer fixed apparence-none opacity-0" />
            <label for="tw-modal-impuestos" class="pointer-events-none invisible fixed inset-0 flex cursor-pointer items-center justify-center overflow-hidden overscroll-contain bg-slate-700/30 opacity-0 transition-all duration-200 ease-in-out peer-checked:pointer-events-auto peer-checked:visible peer-checked:opacity-100 peer-checked:[&>*]:translate-y-0 peer-checked:[&>*]:scale-100">
                <label class="max-h-[calc(100vh - 5em) h-fit w-[500px] scale-90 overflow-y-auto overscroll-contain rounded-md bg-white p-6 text-black shadow-2xl transition]" for="">
                    <h3 class="text-lg font-bold mb-5">Agregar detalles de impuestos</h3>
                    <div className='mb-5'>
                        <div className='mb-5'>
                            <label for="linea" class="block mb-2 text-sm font-semibold text-gray-700">Nombre</label>
                            <input type="text" placeholder="Nombre" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                        </div>
                        <div className='mb-5'>
                            <label for="linea" class="block mb-2 text-sm font-semibold text-gray-700">Periodo</label>
                            <input type="text" placeholder="Periodo" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                        </div>
                        <div className='mb-5'>
                            <label for="linea" class="block mb-2 text-sm font-semibold text-gray-700">Plazo</label>
                            <select id="categoria" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                <option selected value="marca">Selecciona</option>
                                <option>1° Quincena</option>
                                <option>2° Quincena</option>
                                <option>3° Quincena</option>
                            </select>
                        </div>
                        <div className='mb-5'>
                            <label for="nombre" class="block mb-2 text-sm font-semibold text-gray-700">Interés por financiamiento (%)</label>
                            <input type="number" min="0" max="100" placeholder="0" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                        </div>
                        <div className='mb-5'>
                            <label for="linea" class="block mb-2 text-sm font-semibold text-gray-700">IVA</label>
                            <input type="text" placeholder="Línea" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                        </div>
                        <div className='mb-5'>
                            <label for="nombre" class="block mb-2 text-sm font-semibold text-gray-700">Interés Total</label>
                            <input type="number" min="0" max="100" placeholder="0" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                        </div>
                        <div className='mt-4'>
                            <p class="block mb-2 text-sm font-medium text-gray-700">Total</p>
                            <p className='text-4xl font-bold text-gray-700'>$0.00</p>
                        </div>
                    </div>
                    <div className='flex justify-end gap-2'>
                        <a className='px-5 py-3 text-xs tracking-wide text-gray-700 bg-white border border-b border-gray-300 rounded cursor-pointer item active:bg-gray-200'>
                            <div className='flex justify-center'>
                                <span className='text-center'>Cancelar</span>
                            </div>
                        </a>
                        <a className='px-5 py-3 text-xs tracking-wide text-white bg-blue-500 border border-b border-gray-300 rounded cursor-pointer item text-gray active:bg-blue-700'>
                            <div className='flex justify-center'>
                                <span className='text-center'>Guardar</span>
                            </div>
                        </a>
                    </div>
                </label>
            </label>
        </div>
    )
}

export default ModalImpuestos