import React from 'react'

const ModalDocumentos = () => {
    return (
        <div>
            <input type="checkbox" id="tw-modal-documentos" class="peer fixed apparence-none opacity-0" />
            <label for="tw-modal-documentos" class="pointer-events-none invisible fixed inset-0 flex cursor-pointer items-center justify-center overflow-hidden overscroll-contain bg-slate-700/30 opacity-0 transition-all duration-200 ease-in-out peer-checked:pointer-events-auto peer-checked:visible peer-checked:opacity-100 peer-checked:[&>*]:translate-y-0 peer-checked:[&>*]:scale-100">
                <label class="max-h-[calc(100vh - 5em) h-fit w-[500px] scale-90 overflow-y-auto overscroll-contain rounded-md bg-white p-6 text-black shadow-2xl transition]" for="">
                    <h3 class="text-lg font-bold mb-5">Agregar documentos</h3>
                    <div className='mb-5'>
                        <label for="nombre" class="block mb-2 text-sm font-semibold text-gray-700">Tipo de foto</label>
                        <select id="identificacion" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option selected>Selecciona</option>
                            <option value="front">Frente</option>
                            <option value="back">Vuelta</option>
                        </select>
                        <a className='block mt-4 text-xs tracking-wide text-gray-700 bg-white border border-b border-gray-300 rounded cursor-pointer w-[140px] item active:bg-gray-200'>
                            <div className='flex justify-between'>
                                <div className='flex justify-center py-3 pl-3'>
                                    <span className='text-center'>Agregar foto</span>
                                </div>
                                <div className='px-2 py-3 border'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M0 4.79998C0 3.91998 0.72 3.19998 1.6 3.19998H4L5.6 1.59998H10.4L12 3.19998H14.4C14.8243 3.19998 15.2313 3.36855 15.5314 3.6686C15.8314 3.96866 16 4.37563 16 4.79998V12.8C16 13.2243 15.8314 13.6313 15.5314 13.9313C15.2313 14.2314 14.8243 14.4 14.4 14.4H1.6C1.17565 14.4 0.768687 14.2314 0.468629 13.9313C0.168571 13.6313 0 13.2243 0 12.8V4.79998ZM8 12.8C9.06087 12.8 10.0783 12.3785 10.8284 11.6284C11.5786 10.8783 12 9.86084 12 8.79998C12 7.73911 11.5786 6.72169 10.8284 5.97155C10.0783 5.2214 9.06087 4.79998 8 4.79998C6.93913 4.79998 5.92172 5.2214 5.17157 5.97155C4.42143 6.72169 4 7.73911 4 8.79998C4 9.86084 4.42143 10.8783 5.17157 11.6284C5.92172 12.3785 6.93913 12.8 8 12.8ZM8 11.2C7.68483 11.2 7.37274 11.1379 7.08156 11.0173C6.79038 10.8967 6.5258 10.7199 6.30294 10.497C6.08008 10.2742 5.9033 10.0096 5.78269 9.71842C5.66208 9.42723 5.6 9.11515 5.6 8.79998C5.6 8.4848 5.66208 8.17272 5.78269 7.88154C5.9033 7.59035 6.08008 7.32578 6.30294 7.10292C6.5258 6.88006 6.79038 6.70328 7.08156 6.58266C7.37274 6.46205 7.68483 6.39998 8 6.39998C8.63652 6.39998 9.24697 6.65283 9.69706 7.10292C10.1471 7.55301 10.4 8.16346 10.4 8.79998C10.4 9.4365 10.1471 10.0469 9.69706 10.497C9.24697 10.9471 8.63652 11.2 8 11.2Z" fill="black" />
                                    </svg>
                                </div>
                            </div>
                        </a>
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

export default ModalDocumentos