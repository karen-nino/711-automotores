import React from 'react'

const ModalFotos = () => {
    return (
        <div>
            <input type="checkbox" id="tw-modal" class="peer fixed apparence-none opacity-0" />
            <label for="tw-modal" class="pointer-events-none invisible fixed inset-0 flex cursor-pointer items-center justify-center overflow-hidden overscroll-contain bg-slate-700/30 opacity-0 transition-all duration-200 ease-in-out peer-checked:pointer-events-auto peer-checked:visible peer-checked:opacity-100 peer-checked:[&>*]:translate-y-0 peer-checked:[&>*]:scale-100">
                <label class="max-h-[calc(100vh - 5em) h-fit w-[500px] scale-90 overflow-y-auto overscroll-contain rounded-md bg-white p-6 text-black shadow-2xl transition]" for="">
                    <h3 class="text-lg font-bold mb-5">Agregar fotos</h3>
                    <div className='mb-5'>
                        <label for="nombre" class="block mb-2 text-sm font-semibold text-gray-700">Tipo de foto</label>
                        <select id="identificacion" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option selected>Selecciona</option>
                            <option value="front">Frente</option>
                            <option value="back">Vuelta</option>
                        </select>
                    </div>
                    <div className='flex justify-end gap-2'>
                        <a className='px-5 py-3 text-xs tracking-wide text-gray-700 bg-white border border-b border-gray-300 rounded cursor-pointer item active:bg-gray-200'>
                            <div className='flex justify-center'>
                                <span className='text-center'>Cancelar</span>
                            </div>
                        </a>
                        <a className='px-5 py-3 text-xs tracking-wide text-white bg-blue-500 border border-b border-gray-300 rounded cursor-pointer item text-gray active:bg-blue-700'>
                            <div className='flex justify-center'>
                                <span className='text-center'>Aceptar</span>
                            </div>
                        </a>
                    </div>
                </label>
            </label>
        </div>
    )
}

export default ModalFotos